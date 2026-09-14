(() => {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  localStorage.setItem('mAgencyLang', lang);
  const menuButton = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('[data-lang-link]').forEach(link => link.addEventListener('click', () => localStorage.setItem('mAgencyLang', link.dataset.langLink)));
  const metricList = document.querySelector('[data-metrics]');
  const metrics = (window.M_AGENCY_METRICS || []).filter(item => item.value !== null && item.value !== '');
  if (metricList) metricList.innerHTML = metrics.length ? metrics.map(item => `<article class="metric-card"><strong>${item.value}</strong><span>${item.label[lang]}</span></article>`).join('') : `<p class="empty-note">${metricList.dataset.empty}</p>`;
  const featured = document.querySelector('[data-featured-partners]');
  if (featured) {
    const partners = (window.M_AGENCY_PARTNERS || []).filter(p => p.visible && p.featured).sort((a,b) => a.order-b.order).slice(0,3);
    featured.innerHTML = partners.map(p => `<article class="logo-card"><img src="${p.logo}" alt="${p.name[lang]}" loading="lazy"><span>${p.name[lang]}</span></article>`).join('');
  }
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    const messages = lang === 'en' ? {
      invalid: 'Please check the required fields and your email address.',
      sending: 'Sending your inquiry…',
      failure: 'Your inquiry could not be sent. Please try again later or email contact@m-agencyglobal.com directly.',
      button: 'Send inquiry'
    } : {
      invalid: '必須項目とメールアドレスを確認してください。',
      sending: '送信しています…',
      failure: '送信できませんでした。時間を置いて再度お試しいただくか、contact@m-agencyglobal.comへ直接ご連絡ください。',
      button: '送信する'
    };
    const params = new URLSearchParams(location.search);
    const subjectInput = form.querySelector('[name="subject"]');
    const subject = params.get('company') || params.get('service') || '';
    if (subjectInput && subject) subjectInput.value = subject;
    const startedAt = form.querySelector('[name="started_at"]');
    const notice = form.querySelector('[data-form-notice]');
    const submitButton = form.querySelector('[type="submit"]');
    if (startedAt) startedAt.value = String(Math.floor(Date.now() / 1000));
    form.addEventListener('invalid', () => {
      notice.textContent = messages.invalid;
      notice.classList.remove('is-success');
      notice.classList.add('is-error');
      notice.hidden = false;
    }, true);
    form.addEventListener('submit', async event => {
      event.preventDefault();
      notice.hidden = true;
      notice.classList.remove('is-success', 'is-error');
      if (!form.checkValidity()) {
        notice.textContent = messages.invalid;
        notice.classList.add('is-error');
        notice.hidden = false;
        form.reportValidity();
        return;
      }
      submitButton.disabled = true;
      submitButton.textContent = messages.sending;
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || !result.ok) {
          const requestError = new Error('Request failed');
          requestError.userMessage = result.message || messages.failure;
          throw requestError;
        }
        notice.textContent = result.message;
        notice.classList.add('is-success');
        notice.hidden = false;
        form.reset();
        if (startedAt) startedAt.value = String(Math.floor(Date.now() / 1000));
      } catch (error) {
        notice.textContent = error.userMessage || messages.failure;
        notice.classList.add('is-error');
        notice.hidden = false;
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = messages.button;
        notice.focus();
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
