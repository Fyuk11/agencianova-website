// /js/gtag.js
// Config GA4 + helper "track" para usar en cualquier parte

// Inicia GA (la función gtag y dataLayer ya están definidos inline en el head)
gtag('js', new Date());
gtag('config', 'G-XXXX', {
  anonymize_ip: true,
  transport_type: 'beacon',
  // Si no querés el page_view automático en todas, puedes controlar esto:
  // send_page_view: false
});

// Helper seguro para eventos
window.track = function(action, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', action, params);
  }
};

// Ejemplos de auto-track (opcional):
window.addEventListener('DOMContentLoaded', () => {
  // WhatsApp flotante
  document.querySelector('.wa-float')?.addEventListener('click', () => {
    track('click', { event_category: 'CTA', event_label: 'WhatsApp Floating' });
  });

  // CTA “Cotizar” del header (ajusta el selector a tu markup real)
  document.querySelector('.nav__cta')?.addEventListener('click', () => {
    track('click', { event_category: 'CTA', event_label: 'Header Cotizar' });
  });

  // Formulario
  document.getElementById('contactForm')?.addEventListener('submit', () => {
    track('form_submit', { form_id: 'contactForm' });
  });
});
