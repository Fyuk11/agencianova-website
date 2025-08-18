// Entry point de la web (ESM)
// Importa módulos específicos
import './nav.js';
import './animations.js';
import './form.js';

import './utils.js';
import './reveal.js';
import './cases.js'


// js/main.js
import { initNav } from "./nav.js";

// inicia nav
initNav();

// (lo que ya tenías)

// Hero: typed effect en el subtítulo
const typedText = document.querySelector('.hero__subtitle');
if (typedText) {
  const phrases = [
    "Estrategias de marketing digital, creatividad y resultados medibles que transforman tu negocio.",
    "Impulsamos tu visibilidad online y multiplicamos tus conversiones.",
    "Diseño, branding y campañas efectivas adaptadas a tu negocio."
  ];
  let i = 0, j = 0;
  const typeEffect = () => {
    if (j < phrases[i].length) {
      typedText.textContent += phrases[i][j++];
      setTimeout(typeEffect, 50);
    } else {
      setTimeout(() => {
        typedText.textContent = '';
        j = 0;
        i = (i + 1) % phrases.length;
        typeEffect();
      }, 3000);
    }
  };
  typeEffect();
}

// Hero: asegurar video solo como fondo (no interactuable)
const video = document.querySelector('.hero__video');
if (video) {
  video.controls = false;
  video.disablePictureInPicture = true;
  video.setAttribute('tabindex', '-1');
}

// Cases
import { initCasesSlider } from "./cases.js";
initCasesSlider();

// Testimonios
/*document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".testimonials__wrap");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  let currentIndex = 0;

  function showTestimonial(index) {
    const offset = testimonials[index].offsetLeft;
    wrap.scrollTo({
      left: offset,
      behavior: "smooth"
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });
});
*/

// Testimonios con flechas centradas en la tarjeta activa
document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".testimonials__wrap");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  let currentIndex = 0;

  function showTestimonial(index) {
    currentIndex = index;
    const offset = testimonials[index].offsetLeft;
    wrap.scrollTo({
      left: offset,
      behavior: "smooth"
    });
    updateButtonPosition();
  }

  prevBtn.addEventListener("click", () => {
    showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  });

  nextBtn.addEventListener("click", () => {
    showTestimonial((currentIndex + 1) % testimonials.length);
  });

  // Centrar botones verticalmente según tarjeta activa
  /*function updateButtonPosition() {
    const activeCard = testimonials[currentIndex];
    const wrapRect = wrap.getBoundingClientRect();
    const cardRect = activeCard.getBoundingClientRect();
    const top = cardRect.top - wrapRect.top + activeCard.offsetHeight / 2;

    prevBtn.style.top = `${top}px`;
    nextBtn.style.top = `${top}px`;
  } */
function updateButtonPosition() {
  const activeCard = testimonials[currentIndex];
  const top = activeCard.offsetTop + activeCard.offsetHeight / 2 + 33;
  

  prevBtn.style.top = `${top}px`;
  nextBtn.style.top = `${top}px`;
}


  // Inicial y en resize
  updateButtonPosition();
  window.addEventListener("resize", updateButtonPosition);

  // Swipe en mobile
  let startX = 0;
  wrap.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
  wrap.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) showTestimonial((currentIndex + 1) % testimonials.length);
    else if (endX - startX > 50) showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  });
});
