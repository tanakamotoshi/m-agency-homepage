<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['ok' => $status >= 200 && $status < 300, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function has_header_break(string $value): bool
{
    return preg_match('/[\r\n]/', $value) === 1;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Method not allowed.');
}

$lang = ($_POST['lang'] ?? '') === 'en' ? 'en' : 'ja';
$messages = [
    'ja' => [
        'invalid' => '入力内容を確認してください。',
        'spam' => '送信を受け付けられませんでした。時間を置いてもう一度お試しください。',
        'rate' => '短時間に続けて送信されています。少し時間を置いてからお試しください。',
        'success' => 'お問い合わせを送信しました。担当者からの返信をお待ちください。',
        'failure' => '送信できませんでした。時間を置いて再度お試しいただくか、contact@m-agencyglobal.comへ直接ご連絡ください。',
    ],
    'en' => [
        'invalid' => 'Please check the information you entered.',
        'spam' => 'Your inquiry could not be accepted. Please wait and try again.',
        'rate' => 'Please wait a moment before sending another inquiry.',
        'success' => 'Your inquiry has been sent. We will reply as soon as possible.',
        'failure' => 'Your inquiry could not be sent. Please try again later or email contact@m-agencyglobal.com directly.',
    ],
];
$message = $messages[$lang];

$host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$host = preg_replace('/:\d+$/', '', $host);
$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
if ($origin !== '') {
    $originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
    if ($originHost === '' || $originHost !== $host) {
        respond(403, $message['spam']);
    }
}

$secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
session_set_cookie_params([
    'httponly' => true,
    'secure' => $secure,
    'samesite' => 'Lax',
]);
session_start();

if (!empty($_POST['website'])) {
    respond(400, $message['spam']);
}

$startedAt = filter_var($_POST['started_at'] ?? null, FILTER_VALIDATE_INT);
$now = time();
if ($startedAt === false || $startedAt > $now || ($now - $startedAt) < 3 || ($now - $startedAt) > 7200) {
    respond(400, $message['spam']);
}

$lastSentAt = (int) ($_SESSION['m_agency_last_sent_at'] ?? 0);
if ($lastSentAt > 0 && ($now - $lastSentAt) < 60) {
    respond(429, $message['rate']);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$type = trim((string) ($_POST['type'] ?? ''));
$bodyText = trim((string) ($_POST['message'] ?? ''));

if (
    $name === '' || $email === '' || $type === '' || $bodyText === '' ||
    text_length($name) > 100 || text_length($email) > 254 ||
    text_length($subject) > 200 || text_length($type) > 100 ||
    text_length($bodyText) > 5000 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    has_header_break($name) || has_header_break($email) ||
    has_header_break($subject) || has_header_break($type)
) {
    respond(422, $message['invalid']);
}

$recipient = 'contact@m-agencyglobal.com';
$mailSubject = '[M Agency HP] ' . ($subject !== '' ? $subject : $type);
$mailBody = implode("\n", [
    'M Agency公式HPからお問い合わせが届きました。',
    '',
    '言語: ' . strtoupper($lang),
    'お名前: ' . $name,
    'メールアドレス: ' . $email,
    '相談対象: ' . ($subject !== '' ? $subject : '未入力'),
    '相談内容: ' . $type,
    '',
    'お問い合わせ内容:',
    $bodyText,
    '',
    '送信日時: ' . date('Y-m-d H:i:s T'),
]);

$safeReplyName = str_replace(['"', '<', '>'], '', $name);
$encodedReplyName = '=?UTF-8?B?' . base64_encode($safeReplyName) . '?=';
$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: M Agency Website <contact@m-agencyglobal.com>',
    'Reply-To: ' . $encodedReplyName . ' <' . $email . '>',
]);

if (function_exists('mb_send_mail')) {
    mb_language('uni');
    mb_internal_encoding('UTF-8');
    $sent = mb_send_mail($recipient, $mailSubject, $mailBody, $headers, '-fcontact@m-agencyglobal.com');
} else {
    $encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
    $sent = mail($recipient, $encodedSubject, $mailBody, $headers, '-fcontact@m-agencyglobal.com');
}

if (!$sent) {
    respond(500, $message['failure']);
}

$_SESSION['m_agency_last_sent_at'] = $now;
respond(200, $message['success']);
