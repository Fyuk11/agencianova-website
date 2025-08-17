import { qsa } from './utils.js';

// Casos
// animations.js (ya lo tienes)
// Esto detecta cualquier elemento con la clase "reveal"
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

reveals.forEach(el => io.observe(el));
