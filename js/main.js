
import './utils.js';     // helpers primero
import './nav.js';
import './animations.js';
import './form.js';      // ahora puede usar qs y on sin problemas
import './reveal.js';
import './cases.js';



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

document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.querySelector(".testimonials__wrap");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  // Crear contenedor de dots si no existe
  let dotsContainer = document.querySelector(".testimonials__dots");
  if (!dotsContainer) {
    dotsContainer = document.createElement("div");
    dotsContainer.classList.add("testimonials__dots");
    wrap.parentNode.appendChild(dotsContainer);
  }

  const dots = [];
  let currentIndex = 0;
  let autoplayInterval;

  // Crear indicadores
  testimonials.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("testimonials__dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showTestimonial(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });

  function showTestimonial(index) {
    currentIndex = index;
    const offset = testimonials[index].offsetLeft;
    wrap.scrollTo({ left: offset, behavior: "smooth" });
    updateButtonPosition();
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  function updateButtonPosition() {
    const activeCard = testimonials[currentIndex];
    const top = activeCard.offsetTop + activeCard.offsetHeight / 2 + 33; // ajustar según diseño
    prevBtn.style.top = `${top}px`;
    nextBtn.style.top = `${top}px`;
  }

  // Flechas
  prevBtn.addEventListener("click", () =>
    showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length)
  );
  nextBtn.addEventListener("click", () =>
    showTestimonial((currentIndex + 1) % testimonials.length)
  );

  // Swipe móvil
  let startX = 0;
  wrap.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  wrap.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) showTestimonial((currentIndex + 1) % testimonials.length);
    else if (endX - startX > 50) showTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  });

  // Autoplay suave con loop infinito
  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      showTestimonial((currentIndex + 1) % testimonials.length);
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  wrap.addEventListener("mouseenter", stopAutoplay);
  wrap.addEventListener("mouseleave", startAutoplay);

  // Inicializar
  showTestimonial(currentIndex);
  window.addEventListener("resize", updateButtonPosition);
  startAutoplay();
});


// Forzar scroll al inicio en cada recarga
window.onload = () => {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, ' '); // limpia el hash de la URL
  }
};


