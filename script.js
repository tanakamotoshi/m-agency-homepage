// ==========================================
// M Agency - Dynamic Content & Localization
// ==========================================

// 多言語テキストデータ
const i18nData = {
  ja: {
    skipLink: "本文へスキップ",
    navAbout: "会社概要",
    navServices: "事業領域",
    navNetwork: "ネットワーク",
    navWhyUs: "選ばれる理由",
    navAchievements: "実績",
    navFaq: "よくある質問",
    navContact: "お問い合わせ",
    heroEyebrow: "総合ビジネスマッチングエージェンシー",
    heroTitleLine1: "信頼をつなぎ、",
    heroTitleLine2: "世界で機会を創る。",
    heroSub: "国内外の企業・専門家・サービスを結び、最適なビジネスマッチングを実現する総合エージェンシー。",
    ctaConsultation: "無料相談",
    ctaContact: "お問い合わせ",
    ceoPosition: "代表取締役",
    ceoName: "田中 元士",
    aboutKicker: "About Us",
    aboutTitle: "株式会社M Agencyについて",
    aboutBody: "M Agencyは「人・企業・サービスをつなぐ総合エージェンシー」です。世界中の信頼できる企業や専門家とお客様を結び付け、最適なソリューションを設計・提案します。",
    aboutMessage: "私たちは、ただ紹介するだけの会社ではありません。一つひとつのご相談に対して、最も適した人・企業・サービスを見極め、長期的に価値を生むつながりへと育てます。",
    visionText: "世界中で最も信頼されるビジネスマッチング企業になる。",
    valueLabel: "コアバリュー",
    servicesKicker: "Services",
    servicesTitle: "6つの事業領域",
    servicesLead: "多角的なネットワークで、あらゆるビジネスとライフステージをサポートします。",
    networkKicker: "Global Partner Network",
    networkTitle: "提携企業ネットワーク",
    networkLead: "国内外の強力なパートナー陣と提携しています。",
    networkNote: "※ 提携ネットワークは随時拡大中です。",
    whyKicker: "Why Choose Us",
    whyTitle: "選ばれる理由",
    achievementsKicker: "Achievements",
    achievementsTitle: "数字で伝える信頼",
    achievementsLead: "これまでの確かな実績とサポート体制。",
    advisorLabel: "顧問・アドバイザー",
    advisorName: "岩橋綾士（Iwahashi Ayato）",
    advisorRole1: "株式会社キャリアコネクト 代表取締役",
    advisorRole2: "株式会社Agent Sun 取締役",
    advisorRole3: "株式会社ミトミト 取締役",
    testimonialsKicker: "Testimonials",
    testimonialsTitle: "お客様の声",
    faqTitle: "よくある質問",
    contactKicker: "Contact",
    contactTitle: "まずはお気軽にご相談ください",
    contactLead: "個人のお客様から法人企業まで、目的や状況に合わせて最適なパートナーをご提案します。",
    contactPoint1Title: "対応領域",
    contactPoint1Body: "人材・留学・自動車・不動産・営業代行・海外進出支援",
    contactPoint2Title: "対応言語",
    contactPoint2Body: "日本語 / English",
    formName: "氏名",
    formCompany: "会社名",
    formEmail: "メールアドレス",
    formPhone: "電話番号",
    formInquiry: "相談内容",
    formSubmit: "送信する",
    formNote: "※ お問い合わせは2営業日以内にご返信いたします。"
  },
  en: {
    skipLink: "Skip to main content",
    navAbout: "About",
    navServices: "Services",
    navNetwork: "Network",
    navWhyUs: "Why Us",
    navAchievements: "Results",
    navFaq: "FAQ",
    navContact: "Contact",
    heroEyebrow: "Integrated Business Matching Agency",
    heroTitleLine1: "Connecting Trust.",
    heroTitleLine2: "Creating Global Opportunities.",
    heroSub: "A comprehensive agency connecting businesses, experts, and services globally to deliver optimal matching solutions.",
    ctaConsultation: "Free Consultation",
    ctaContact: "Inquire Now",
    ceoPosition: "CEO",
    ceoName: "Gentsu Tanaka",
    aboutKicker: "About Us",
    aboutTitle: "About M Agency Co., Ltd.",
    aboutBody: "M Agency is a comprehensive agency connecting people, business, and services. We design and propose optimal solutions by bridging clients with trusted companies and experts worldwide.",
    aboutMessage: "We do not just introduce; we closely evaluate each inquiry to foster long-term, value-creating connections.",
    visionText: "To become the most trusted business matching firm globally.",
    valueLabel: "Core Values",
    servicesKicker: "Services",
    servicesTitle: "6 Core Business Areas",
    servicesLead: "Supporting various business fields and life stages through our diverse network.",
    networkKicker: "Global Partner Network",
    networkTitle: "Partner Network",
    networkLead: "Partnering with powerful domestic and international organizations.",
    networkNote: "* Our partner network is continuously expanding.",
    whyKicker: "Why Choose Us",
    whyTitle: "Why Choose Us",
    achievementsKicker: "Achievements",
    achievementsTitle: "Trust in Numbers",
    achievementsLead: "Our proven track record and solid support structure.",
    advisorLabel: "Advisor",
    advisorName: "Ayato Iwahashi",
    advisorRole1: "CEO, Career Connect Co., Ltd.",
    advisorRole2: "Director, Agent Sun Co., Ltd.",
    advisorRole3: "Director, Mitomito Co., Ltd.",
    testimonialsKicker: "Testimonials",
    testimonialsTitle: "Client Testimonials",
    faqTitle: "FAQ",
    contactKicker: "Contact",
    contactTitle: "Feel Free to Contact Us",
    contactLead: "Proposing optimal partners tailored to objectives for both individual and corporate clients.",
    contactPoint1Title: "Business Areas",
    contactPoint1Body: "HR, Study Abroad, Automobile, Real Estate, Sales Agency, Global Expansion",
    contactPoint2Title: "Languages",
    contactPoint2Body: "Japanese / English",
    formName: "Full Name",
    formCompany: "Company Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formInquiry: "Inquiry Details",
    formSubmit: "Submit",
    formNote: "* We will respond within 2 business days."
  }
};

// データの定義
const services = [
  {
    id: 1,
    titleJa: "人材紹介・採用支援",
    titleEn: "Human Resources",
    descJa: "最適な人材と企業を結びつけます。",
    descEn: "Matching the right talent with the right enterprises.",
    url: "service-human.html",
    photo: "assets/services/photo-hr.jpg"
  },
  { id: 2, titleJa: "海外留学サポート", titleEn: "Study Abroad", descJa: "グローバルな挑戦をワンストップ支援。", descEn: "One-stop support for global educational challenges.", photo: "assets/services/photo-study.jpg" },
  { id: 3, titleJa: "自動車関連サービス", titleEn: "Automobile Services", descJa: "売買からアフターケアまでトータルサポート。", descEn: "Total support from sales to aftercare.", photo: "assets/services/photo-auto.jpg" },
  { id: 4, titleJa: "不動産コンサルティング", titleEn: "Real Estate", descJa: "国内外の最適な物件・投資をご提案。", descEn: "Proposing optimal domestic & global properties.", photo: "assets/services/photo-realestate.jpg" },
  { id: 5, titleJa: "営業代行・販路開拓", titleEn: "Sales Agency", descJa: "強力なネットワークで売上拡大に貢献。", descEn: "Contributing to revenue growth via our network.", photo: "assets/services/photo-sales.jpg" },
  { id: 6, titleJa: "海外進出・マッチング支援", titleEn: "Global Expansion", descJa: "世界への一歩を確実にバックアップ。", descEn: "Reliable backup for your next step into the world.", photo: "assets/services/photo-global.jpg" }
];

const reasons = [
  { id: 1, titleJa: "圧倒的なグローバルネットワーク", titleEn: "Global Network", descJa: "国内外の多岐にわたる業界トップ陣と直結。", descEn: "Directly connected with industry leaders worldwide." },
  { id: 2, titleJa: "ワンストップの解決力", titleEn: "One-Stop Solutions", descJa: "複数の事業領域をまたぐ複雑な課題も一括解決。", descEn: "Handling complex multi-sector challenges smoothly." },
  { id: 3, titleJa: "高い信頼性と伴走サポート", titleEn: "High Reliability", descJa: "ただの紹介に留まらない、長期的な成長を支援。", descEn: "Supporting long-term growth beyond mere matching." }
];

const metrics = [
  { value: "500+", labelJa: "提携企業数", labelEn: "Partner Firms" },
  { value: "98%", labelJa: "顧客満足度", labelEn: "Client Satisfaction" },
  { value: "10+", labelJa: "対応国・地域", labelEn: "Countries Covered" }
];

const faqs = [
  { qJa: "個人での相談も可能ですか？", qEn: "Can individuals apply for consultation?", aJa: "はい、留学や不動産、自動車関連など個人のお客様向けサービスも多数ございます。", aEn: "Yes, we offer various services for individuals such as study abroad and real estate." },
  { qJa: "強みのあるエリアはどこですか？", qEn: "Which regions are your strength?", aJa: "日本国内はもちろん、アジア圏や欧米などグローバルなネットワークを誇ります。", aEn: "In addition to Japan, we boast a strong network in Asia, North America, and Europe." }
];

// 描画と切り替えロジック
let currentLang = 'ja';

function updateContent() {
  // 静的テキストの置換
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[currentLang][key]) el.innerHTML = i18nData[currentLang][key];
  });

  // プレースホルダーの置換
  document.querySelectorAll('[data-ph-ja]').forEach(input => {
    input.placeholder = currentLang === 'ja' ? input.getAttribute('data-ph-ja') : input.getAttribute('data-ph-en');
  });

  // 事業領域の描画（urlがあれば専用ページへ、無ければ#networkへリンク）
  const sGrid = document.getElementById('servicesGrid');
  if(sGrid) {
    sGrid.innerHTML = services.map(s => `
      <a href="${s.url ? s.url : '#network'}" class="service-card">
        ${s.photo ? `<img src="${s.photo}" alt="" class="service-card-photo" />` : ''}
        <h3>${currentLang === 'ja' ? s.titleJa : s.titleEn}</h3>
        <p>${currentLang === 'ja' ? s.descJa : s.descEn}</p>
        <span class="service-card-arrow">詳しく見る →</span>
      </a>
    `).join('');
  }

  // 選ばれる理由の描画
  const rGrid = document.getElementById('reasonsGrid');
  if(rGrid) {
    rGrid.innerHTML = reasons.map(r => `
      <div class="reason-card">
        <h3>${currentLang === 'ja' ? r.titleJa : r.titleEn}</h3>
        <p>${currentLang === 'ja' ? r.descJa : r.descEn}</p>
      </div>
    `).join('');
  }

  // 実績の描画
  const mGrid = document.getElementById('metricsGrid');
  if(mGrid) {
    mGrid.innerHTML = metrics.map(m => `
      <div class="metric-card">
        <div class="metric-num">${m.value}</div>
        <div class="metric-label">${currentLang === 'ja' ? m.labelJa : m.labelEn}</div>
      </div>
    `).join('');
  }

  // FAQの描画
  const fList = document.getElementById('faqList');
  if(fList) {
    fList.innerHTML = faqs.map(f => `
      <div class="faq-item">
        <div class="faq-question">Q. ${currentLang === 'ja' ? f.qJa : f.qEn}</div>
        <div class="faq-answer">A. ${currentLang === 'ja' ? f.aJa : f.aEn}</div>
      </div>
    `).join('');
  }
}

// イベントリスナー設定
document.addEventListener('DOMContentLoaded', () => {
  // 今年の西暦をフッターに挿入
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // 言語切り替えボタン
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentLang = e.target.getAttribute('data-lang');
      updateContent();
    });
  });

  // 初回描画
  updateContent();
});