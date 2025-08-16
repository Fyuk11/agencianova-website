import { qsa, inView } from './utils.js';

// Reveal on-scroll (IntersectionObserver)
const reveals = qsa('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -8% 0px' });
reveals.forEach(el => io.observe(el));

// Typed effect (hero)
const typedEl = document.querySelector('.typed');
if (typedEl) {
  const words = JSON.parse(typedEl.dataset.typed || '[]');
  let i = 0, j = 0, deleting = false, current = '';
  const type = () => {
    const word = words[i % words.length];
    current = deleting ? word.slice(0, j--) : word.slice(0, j++);
    typedEl.textContent = current;
    if (!deleting && j === word.length + 2) deleting = true, setTimeout(type, 900);
    else if (deleting && j === 0) deleting = false, i++, setTimeout(type, 300);
    else setTimeout(type, deleting ? 40 : 80);
  };
  type();
}
