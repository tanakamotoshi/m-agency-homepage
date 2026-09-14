(() => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  const labels = lang === 'ja' ? {all:'すべて',official:'公式サイトを見る',consult:'M Agencyに相談する',guide:'この会社が自分に合うか知りたい方、紹介をご希望の方はM Agencyへご相談ください。',empty:'該当する企業はまだ登録されていません。'} : {all:'All',official:'Official website',consult:'Ask M Agency',guide:'If you would like to know whether this company is right for you, or would like an introduction, please contact M Agency.',empty:'No companies are registered in this category yet.'};
  const partners = (window.M_AGENCY_PARTNERS || []).filter(p => p.visible).sort((a,b) => a.order-b.order);
  const categories = (window.M_AGENCY_CATEGORIES || []);
  const tools = document.querySelector('[data-network-filters]');
  const grid = document.querySelector('[data-partner-grid]');
  function render(category='all') {
    const list = category === 'all' ? partners : partners.filter(p => p.categories.includes(category));
    grid.innerHTML = list.length ? list.map(p => {
      const categoryNames = p.categories.map(id => (window.M_AGENCY_CATEGORIES.find(c => c.id === id) || {name:{[lang]:id}}).name[lang]);
      return `<article class="partner-card"><img src="${p.logo}" alt="${p.name[lang]}" loading="lazy"><h2>${p.name[lang]}</h2><div class="tags">${categoryNames.map(x=>`<span class="tag">${x}</span>`).join('')}<span class="tag">${p.region[lang]}</span></div><p>${p.description[lang]}</p><div class="tags">${p.strengths[lang].map(x=>`<span class="tag">${x}</span>`).join('')}</div><p class="partner-guidance">${labels.guide}</p><div class="actions"><a class="btn btn-secondary" href="${p.officialUrl}" target="_blank" rel="noopener noreferrer">${labels.official}</a><a class="btn btn-primary" href="/${lang}/?company=${encodeURIComponent(p.name[lang])}#contact">${labels.consult}</a></div></article>`;
    }).join('') : `<p>${labels.empty}</p>`;
  }
  const requestedCategory = new URLSearchParams(location.search).get('category');
  const initialCategory = categories.some(c => c.id === requestedCategory) ? requestedCategory : 'all';
  tools.innerHTML = [{id:'all',name:{[lang]:labels.all}},...categories].map(c=>`<button class="filter-button${c.id===initialCategory?' is-active':''}" type="button" data-category="${c.id}">${c.name[lang]}</button>`).join('');
  tools.addEventListener('click', e => { const button=e.target.closest('[data-category]'); if(!button)return; tools.querySelectorAll('button').forEach(b=>b.classList.remove('is-active')); button.classList.add('is-active'); render(button.dataset.category); });
  render(initialCategory);
})();
