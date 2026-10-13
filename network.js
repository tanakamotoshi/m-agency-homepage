(() => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  const labels = lang === 'ja'
    ? { all: 'すべて', japan: '🇯🇵 日本', overseas: '🌍 海外', official: '公式サイト', consult: 'M Agencyに相談する', empty: '条件に合う提携企業・サービスはまだ登録されていません。' }
    : { all: 'All', japan: '🇯🇵 Japan', overseas: '🌍 Overseas', official: 'Official website', consult: 'Ask M Agency', empty: 'No partners or services match these filters yet.' };
  const partners = (window.M_AGENCY_PARTNERS || []).filter(partner => partner.visible).sort((a, b) => a.order - b.order);
  const macroCategories = window.M_AGENCY_MACRO_CATEGORIES || [];
  const fineCategories = window.M_AGENCY_CATEGORIES || [];
  const regionFilters = document.querySelector('[data-region-filters]');
  const categoryFilters = document.querySelector('[data-category-filters]');
  const grid = document.querySelector('[data-partner-grid]');
  const count = document.querySelector('[data-result-count]');
  const clearButton = document.querySelector('[data-clear-filters]');
  if (!regionFilters || !categoryFilters || !grid) return;

  const state = { region: 'all', category: 'all' };
  const localized = value => value?.[lang] || value?.ja || '';
  const categoryName = id => localized(fineCategories.find(category => category.id === id)?.name) || id;
  const macroCategoryName = id => localized(macroCategories.find(category => category.id === id)?.name) || id;
  const filterButton = (id, label, type) => {
    const active = state[type] === id;
    return `<button class="filter-button${active ? ' is-active' : ''}" type="button" data-filter-type="${type}" data-filter-value="${id}" aria-pressed="${active}">${label}</button>`;
  };

  function renderFilters() {
    regionFilters.innerHTML = [filterButton('all', labels.all, 'region'), filterButton('japan', labels.japan, 'region'), filterButton('overseas', labels.overseas, 'region')].join('');
    categoryFilters.innerHTML = [filterButton('all', labels.all, 'category'), ...macroCategories.map(category => filterButton(category.id, localized(category.name), 'category'))].join('');
  }

  function partnerCard(partner) {
    const macroNames = (partner.macroCategories || []).map(macroCategoryName);
    const fineNames = (partner.categories || []).map(categoryName);
    const consultationUrl = `/${lang}/?company=${encodeURIComponent(localized(partner.name))}#contact`;
    return `<article class="partner-card">
      <div class="partner-logo"><img src="${partner.logo}" alt="${localized(partner.name)}" loading="lazy"></div>
      <div class="partner-card-body">
        <div class="partner-meta"><span>${localized(partner.region)}</span>${macroNames.map(name => `<span>${name}</span>`).join('')}</div>
        <h2>${localized(partner.name)}</h2>
        <p class="partner-description">${localized(partner.description)}</p>
        <div class="partner-fine-categories">${fineNames.map(name => `<span>${name}</span>`).join('')}</div>
        <div class="actions"><a class="btn btn-primary" href="${consultationUrl}">${labels.consult}</a><a class="btn btn-secondary" href="${partner.officialUrl}" target="_blank" rel="noopener noreferrer">${labels.official}<span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`;
  }

  function render() {
    const visible = partners.filter(partner => (state.region === 'all' || partner.regionType === state.region) && (state.category === 'all' || (partner.macroCategories || []).includes(state.category)));
    if (count) count.textContent = visible.length;
    grid.className = `partner-grid partner-grid-count-${Math.min(visible.length, 3)}`;
    grid.innerHTML = visible.length ? visible.map(partnerCard).join('') : `<p class="network-empty">${labels.empty}</p>`;
  }

  function selectFilter(event) {
    const button = event.target.closest('[data-filter-type]');
    if (!button) return;
    state[button.dataset.filterType] = button.dataset.filterValue;
    renderFilters();
    render();
  }
  regionFilters.addEventListener('click', selectFilter);
  categoryFilters.addEventListener('click', selectFilter);
  clearButton?.addEventListener('click', () => { state.region = 'all'; state.category = 'all'; renderFilters(); render(); });
  renderFilters();
  render();
})();
