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

// Testimonios
document.addEventListener("DOMContentLoaded", () => {
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

  // 👉 soporte de swipe
  let startX = 0;
  wrap.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  wrap.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      // swipe izquierda
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    } else if (endX - startX > 50) {
      // swipe derecha
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
  });
});
/*
function updateButtonPosition() {
  const wrap = document.querySelector(".testimonials__wrap");
  const buttons = [document.getElementById("prevTestimonial"), document.getElementById("nextTestimonial")];
  const height = wrap.offsetHeight;

  buttons.forEach(btn => {
    btn.style.top = `${height / 2}px`;
  });
}

// Llamamos al inicio y cada vez que se haga resize
updateButtonPosition();
window.addEventListener("resize", updateButtonPosition);
*/
function updateButtonPosition() {
  const wrap = document.querySelector(".testimonials__wrap");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  // Obtenemos el índice de la tarjeta actualmente visible
  let currentIndex = 0;
  const scrollLeft = wrap.scrollLeft;
  testimonials.forEach((t, i) => {
    if (t.offsetLeft <= scrollLeft + 10) currentIndex = i;
  });

  // Tomamos la tarjeta visible
  const activeCard = testimonials[currentIndex];
  const cardHeight = activeCard.offsetHeight;

  // Posicionamos los botones verticalmente centrados respecto a la tarjeta visible
  prevBtn.style.top = `${activeCard.offsetTop + cardHeight / 2}px`;
  nextBtn.style.top = `${activeCard.offsetTop + cardHeight / 2}px`;
}

// Llamamos al cargar la página y cuando se haga scroll o resize
updateButtonPosition();
window.addEventListener("resize", updateButtonPosition);
document.querySelector(".testimonials__wrap").addEventListener("scroll", updateButtonPosition);
