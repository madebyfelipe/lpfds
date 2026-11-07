// Execute no openbot_browser.run_script com viewport mobile e o servidor aberto.
const base = await evaluate(() => location.origin);
const results = [];
for (const theme of ["light", "dark"]) {
  await evaluate(`localStorage.setItem('inst-theme', '${theme}')`);
  for (const path of ["/", "/metodologia", "/projetos", "/imersao"]) {
    await navigate(base + path);
    await snapshot();
    results.push(await evaluate(async () => {
      const bar = document.querySelector('.inst-mobile-cta');
      if (Boolean(bar) !== ['/', '/metodologia', '/projetos'].includes(location.pathname)) {
        throw new Error('CTA fora do escopo');
      }
      if (bar) {
        const link = bar.querySelector('a');
        if (link.href !== 'https://cal.com/madebyfelipe/15min') throw new Error('Destino do CTA');
        link.focus();
        if (getComputedStyle(link).outlineStyle === 'none') throw new Error('Foco invisível');
        const banner = document.querySelector('.mbf-consent');
        if (banner && banner.getBoundingClientRect().bottom > bar.getBoundingClientRect().top) {
          throw new Error('Sobreposição do banner');
        }
      }
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.append(script);
      });
      const audit = await axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }
      });
      if (audit.violations.length) throw new Error(JSON.stringify(audit.violations));
      return { path: location.pathname, theme: document.documentElement.dataset.instTheme, violations: 0 };
    }));
  }
}
return results;
