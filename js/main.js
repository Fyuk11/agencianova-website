import { qs } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico
  const yearEl = qs('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mejora de accesibilidad: cerrar menú con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const toggle = document.querySelector('[data-nav-toggle]');
      const nav = document.querySelector('[data-nav]');
      if (nav?.classList.contains('is-open')) toggle?.click();
    }
  });

  // Prefetch suave de anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      const href = a.getAttribute('href');
      if (href?.length > 1) {
        const target = document.querySelector(href);
        target?.setAttribute('tabindex','-1');
        setTimeout(()=> target?.focus({preventScroll:true}), 500);
      }
    });
  });
});

// Hero | efecto typed en hero
const typedText = document.querySelector('.hero__subtitle');
const phrases = [
  "Estrategias de marketing digital, creatividad y resultados medibles que transforman tu negocio.",
  "Impulsamos tu visibilidad online y multiplicamos tus conversiones.",
  "Diseño, branding y campañas efectivas adaptadas a tu negocio."
];

let i = 0, j = 0;

function typeEffect(){
  if(j < phrases[i].length){
    typedText.textContent += phrases[i][j];
    j++;
    setTimeout(typeEffect, 50);
  } else {
    setTimeout(() => {
      typedText.textContent = '';
      j = 0;
      i = (i + 1) % phrases.length;
      typeEffect();
    }, 3000);
  }
}

typeEffect();


// Slider testimonios
const wrap = document.querySelector('.testimonials__wrap');
const slides = [...document.querySelectorAll('.testimonial')];
let current = 0;

const showSlide = index => {
  if(index < 0) index = slides.length -1;
  if(index >= slides.length) index = 0;
  wrap.style.transform = `translateX(-${index*100}%)`;
  current = index;
};

document.getElementById('prevTestimonial').addEventListener('click', ()=> showSlide(current-1));
document.getElementById('nextTestimonial').addEventListener('click', ()=> showSlide(current+1));
