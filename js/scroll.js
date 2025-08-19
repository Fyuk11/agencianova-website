// /js/scroll.js
// Forzar scroll al tope al recargar, sin romper navegación normal por anclas

try {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  window.addEventListener('pageshow', (e) => {
    const nav = performance.getEntriesByType('navigation')[0];
    const isReload = nav ? nav.type === 'reload' : performance?.navigation?.type === 1;

    if (isReload) {
      window.scrollTo(0, 0);
      if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    }
  });
} catch (e) {
  // silencioso
}
