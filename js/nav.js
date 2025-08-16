import { qs, qsa, on, throttle } from './utils.js';

const header = qs('[data-header]');
const nav = qs('[data-nav]');
const toggle = qs('[data-nav-toggle]');
const links = qsa('.nav__link');

const closeNav = () => {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = `<svg width="24" height="24" aria-hidden="true"><use href="assets/icons.svg#menu"></use></svg>`;
};

const openNav = () => {
  nav.classList.add('is-open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.innerHTML = `<svg width="24" height="24" aria-hidden="true"><use href="assets/icons.svg#close"></use></svg>`;
};

on(toggle, 'click', () => nav.classList.contains('is-open') ? closeNav() : openNav());
links.forEach(l => on(l, 'click', closeNav));

// Header shrink + botón top
const btnTop = document.getElementById('btnTop');
const onScroll = throttle(() => {
  const scrolled = window.scrollY > 10;
  header.classList.toggle('is-scrolled', scrolled);
  btnTop.classList.toggle('is-visible', window.scrollY > 350);
  // Scroll spy
  let current = '';
  qsa('section[id]').forEach(sec => {
    const top = sec.offsetTop - 100;
    if (scrollY >= top) current = sec.id;
  });
  links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`));
}, 100);

on(window, 'scroll', onScroll);
on(btnTop, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
