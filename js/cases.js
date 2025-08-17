// js/cases.js
// js/cases.js
export function initCasesSlider() {
  document.querySelectorAll('[data-cases]').forEach(shell => {
    if (shell.dataset.initialized) return; // evita doble binding
    shell.dataset.initialized = 'true';

    const viewport = shell.querySelector('[data-cases-viewport]');
    const prev = shell.querySelector('.cases__arrow--prev');
    const next = shell.querySelector('.cases__arrow--next');
    if (!viewport) return;

    const step = () => Math.round(viewport.clientWidth * 0.9);

    prev?.addEventListener('click', () => {
      viewport.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next?.addEventListener('click', () => {
      viewport.scrollBy({ left: step(), behavior: 'smooth' });
    });
  });
}
