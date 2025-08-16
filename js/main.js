// Entry point de la web (ESM)
// Importa módulos específicos
import './nav.js';
import './animations.js';
import './form.js';

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
  video.setAttribute('tabindex', '-1'); // evita foco
}
