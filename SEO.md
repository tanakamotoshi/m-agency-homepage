# SEO.md

# M Agency SEO & Performance Guideline
Version 1.0

---

# このドキュメントについて

このドキュメントは

株式会社M Agencyコーポレートサイトの

・SEO
・表示速度
・アクセシビリティ
・Core Web Vitals
・検索エンジン最適化

の品質基準を定義する。

すべてのページはこのルールを満たすこと。

---

# 基本方針

SEOは

検索順位を上げるためではない。

ユーザーが必要な情報へ

最短で辿り着けるサイトを作ることを目的とする。

Googleのガイドラインを遵守する。

---

# 品質目標

目標

Google PageSpeed

90点以上

Desktop

95点以上

Mobile

90点以上

Lighthouse

Accessibility

95点以上

Best Practices

95点以上

SEO

100点

を目標とする。

---

# Core Web Vitals

常に以下を意識する。

LCP

2.5秒以内

CLS

0.1未満

INP

200ms未満

不要なJavaScriptは禁止。

不要なCSSは禁止。

---

# HTML

HTML5に準拠する。

セマンティックHTMLを使用する。

見出し構造を守る。

header

main

section

article

footer

nav

を適切に使用する。

---

# Title

すべてのページに

固有のtitleを設定する。

例

株式会社M Agency｜人・企業・サービスをつなぐ総合エージェンシー

人材紹介・採用支援｜株式会社M Agency

---

# Description

すべてのページに

descriptionを設定する。

120〜160文字程度を目安とする。

ページごとに内容を変更する。

---

# Heading

h1

1ページにつき1つ

h2

主要セクション

h3

カード

項目

など

階層を守る。

---

# URL

URLは短くする。

英語表記を使用する。

例

service-human.html

service-study.html

service-auto.html

---

# 内部リンク

関連ページへリンクする。

孤立したページを作らない。

パンくずリスト導入時も

内部リンクを意識する。

---

# 画像

画像には必ず

alt

を設定する。

画像サイズは最適化する。

WebP対応を検討する。

遅延読み込みを利用する。

---

# OGP

全ページに設定する。

title

description

image

url

type

site_name

を設定する。

---

# favicon

必ず設定する。

複数サイズ対応する。

---

# robots.txt

公開時に作成する。

不要ページはクロールさせない。

---

# sitemap.xml

公開時に作成する。

ページ追加時は更新する。

---

# Canonical

重複ページがある場合のみ設定する。

---

# 構造化データ

必要に応じて

Organization

WebSite

BreadcrumbList

FAQPage

などを実装する。

JSON-LDを使用する。

---

# 多言語SEO

日本語

英語

両方更新する。

hreflang導入時は

整合性を保つ。

---

# パフォーマンス

画像を最適化する。

CSSを軽量化する。

JavaScriptを軽量化する。

不要なライブラリは禁止。

---

# フォント

Google Fontsは必要最小限。

font-display: swap

を意識する。

不要なウェイトを読み込まない。

---

# アクセシビリティ

WCAG 2.2 AA準拠を目指す。

画像

alt

フォーム

label

ボタン

aria-label

コントラスト

キーボード操作

を確認する。

---

# モバイル対応

Mobile Firstを意識する。

横スクロール禁止。

タップ領域を十分確保する。

文字サイズを適切にする。

---

# セキュリティ

HTTPS前提。

target="_blank"

使用時は

rel="noopener noreferrer"

を付与する。

---

# JavaScript

Consoleエラー禁止。

未使用コードは禁止。

不要なイベントは禁止。

---

# CSS

未使用CSSは禁止。

!important禁止。

過度なネスト禁止。

---

# AIへの指示

ページ追加時は

以下を必ず確認する。

□ title

□ description

□ h1

□ h2

□ alt

□ OGP

□ 内部リンク

□ ページ速度

□ 多言語対応

□ モバイル表示

□ Consoleエラー

□ Accessibility

---

# 公開前チェック

□ favicon

□ robots.txt

□ sitemap.xml

□ OGP

□ Google Analytics

□ Google Search Console

□ 404ページ

□ リンク切れ確認

□ フォーム確認

□ 表示速度確認

---

# 最終目標

株式会社M Agencyのコーポレートサイトを

Googleから評価されるサイト

ユーザーが使いやすいサイト

表示速度が速いサイト

長期間運用できるサイト

世界基準の品質を持つコーポレートサイト

として育てる。