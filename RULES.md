# RULES.md

# M Agency Development Rules
Version 1.0

---

# このドキュメントの目的

このドキュメントは

M Agency コーポレートサイトの

実装ルール

命名ルール

ファイル管理

保守性

品質

を統一するためのルールブックです。

すべての実装はこのルールに従ってください。

---

# 開発方針

実装より品質を優先する。

コードを書くことではなく

長期間保守できるサイトを作ることを目的とする。

---

# 実装前ルール

コードを書く前に

PROJECT.md

CLAUDE.md

DESIGN.md

COMPONENTS.md

SEO.md

を確認する。

---

# 修正ルール

既存コードは必要最低限のみ変更する。

動いている機能を壊さない。

不要なリファクタリングは禁止。

---

# HTMLルール

HTML5に準拠する。

セマンティックHTMLを使用する。

見出しは

h1

↓

h2

↓

h3

の順番を守る。

不要なdivは禁止。

article

section

header

footer

nav

main

を適切に使用する。

---

# CSSルール

保守性を最優先する。

!importantは禁止。

無意味なネストは禁止。

色はCSS変数を利用する。

余白は統一する。

フォントサイズは統一する。

---

# JavaScriptルール

Vanilla JavaScriptのみ。

ライブラリは禁止。

フレームワークは禁止。

グローバル変数を増やさない。

コメントを適切に書く。

可読性を優先する。

---

# 多言語対応

日本語だけ変更しない。

英語だけ変更しない。

追加した文章は

日本語

英語

両方追加する。

data-i18nを利用する。

---

# 命名規則

HTML

kebab-case

例

service-human.html

service-study.html

---

CSS

クラス名は

kebab-case

例

service-card

partner-grid

hero-title

---

JavaScript

変数

camelCase

例

currentLang

partnerList

serviceCards

関数

camelCase

例

updateContent()

renderServices()

---

画像

英数字のみ。

スペース禁止。

例

hero-image.jpg

partner-logo.png

service-human.jpg

---

フォルダ構成

assets

images

partners

services

icons

logo

で管理する。

---

# コメント

必要な箇所だけ書く。

何をしているコードなのかを説明する。

コードを読むだけで分かる内容はコメントしない。

---

# 再利用

同じコードを2回以上書かない。

共通化できる場合は提案する。

---

# UI変更

既存デザインを崩さない。

余白

フォント

色

ボタン

カード

は統一する。

---

# レスポンシブ

Desktop

Tablet

Mobile

すべて確認する。

スマホだけ崩れる実装は禁止。

---

# アクセシビリティ

画像にはaltを付ける。

フォームにはlabelを付ける。

ボタンはbuttonタグを使う。

リンクはaタグを使う。

コントラストを守る。

キーボード操作可能にする。

---

# SEO

ページ追加時は

title

description

h1

alt

内部リンク

canonical（必要時）

OGP（必要時）

を確認する。

---

# パフォーマンス

不要なCSSを書かない。

不要なJavaScriptを書かない。

画像サイズを最適化する。

同じ処理を繰り返さない。

Core Web Vitalsを意識する。

---

# ファイル追加ルール

新しいページを追加する場合は

理由

影響範囲

必要ファイル

を説明する。

勝手に大量のファイルを増やさない。

---

# ライブラリ追加

以下は禁止

Bootstrap

Tailwind

jQuery

React

Vue

その他ライブラリ

追加が必要な場合は

理由

メリット

デメリット

を説明する。

---

# 回答ルール

回答は以下の順番で行う。

① 変更内容

② 理由

③ 実装コード

④ 確認事項

⑤ 今後改善できる点

---

# エラー対応

応急処置は禁止。

必ず原因を特定する。

再発防止策を考える。

---

# Git運用

変更単位を意識する。

関連のない変更をまとめない。

変更内容が分かる単位で管理する。

---

# 品質チェック

実装後は必ず確認する。

□ デザインは崩れていないか

□ スマホ表示は問題ないか

□ タブレット表示は問題ないか

□ PC表示は問題ないか

□ JavaScriptエラーはないか

□ Consoleエラーはないか

□ SEOは問題ないか

□ 多言語対応できているか

□ 画像パスは正しいか

□ リンク切れはないか

---

# AIへの指示

AIは

コードを書く前に考える。

実装後に確認する。

改善案があれば提案する。

品質を最優先する。

---

# 最終目標

M Agencyのコーポレートサイトを

長期間運用できる

保守しやすい

美しい

高速

SEOに強い

世界基準の品質

へ育てること。