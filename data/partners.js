/* 提携企業はこの配列へ1社1件だけ追加します。複数カテゴリーへの所属が可能です。 */
window.M_AGENCY_PARTNERS = [
  {
    id: "kaisha-hojin-center",
    name: {
      ja: "会社法人センター",
      en: "Kaisha Hojin Center"
    },
    logo: "/assets/partners/kaisha-hojin-center.png",
    officialUrl: "https://kaisha-kakuyasu.com/",
    categories: ["professionals", "business-support"],
    macroCategories: ["people-professional", "it-business"],
    regionType: "japan",
    countryCode: "JP",
    region: {
      ja: "日本・全国対応",
      en: "Japan / Nationwide"
    },
    description: {
      ja: "司法書士と行政書士が連携し、会社設立に必要な電子定款や登記関連書類の作成を全国対応で支援する会社設立専門サービスです。",
      en: "A company formation service supporting clients across Japan with electronic articles of incorporation and incorporation documents through collaboration between judicial and administrative scriveners."
    },
    strengths: {
      ja: ["会社設立に特化", "全国対応", "追加の顧問契約なし"],
      en: ["Company formation specialist", "Nationwide support", "No mandatory advisory contract"]
    },
    visible: true,
    order: 10
  }
];
/* 一覧ページ用の大分類です。1社を複数の大分類へ所属させられます。 */
window.M_AGENCY_MACRO_CATEGORIES = [
  { id: "people-professional", name: { ja: "人・専門サービス", en: "People & Professional Services" } },
  { id: "it-business", name: { ja: "IT・ビジネス", en: "IT & Business" } },
  { id: "goods-industry", name: { ja: "もの・産業", en: "Products & Industry" } },
  { id: "living-other", name: { ja: "暮らし・その他", en: "Living & Other" } }
];
window.M_AGENCY_CATEGORIES = [
  { id: "real-estate", name: { ja: "不動産・住まい", en: "Real Estate & Living" } },
  { id: "professionals", name: { ja: "士業・専門家", en: "Professional Services" } },
  { id: "human-resources", name: { ja: "人材・採用", en: "HR & Recruitment" } },
  { id: "it-creative", name: { ja: "IT・Web・クリエイティブ", en: "IT, Web & Creative" } },
  { id: "business-support", name: { ja: "経営・ビジネス支援", en: "Business Support" } },
  { id: "global", name: { ja: "海外・グローバル", en: "Global Services" } },
  { id: "personal", name: { ja: "生活・個人向けサービス", en: "Personal Services" } },
  { id: "other", name: { ja: "その他", en: "Other" } }
];
