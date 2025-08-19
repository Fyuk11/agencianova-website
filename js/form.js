import { qs, on } from './utils.js';

const form = qs('#contactForm');
const alertBox = qs('#formAlert');

const validate = () => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2) return 'El nombre es muy corto.';
  if (!emailOk) return 'Email inválido.';
  if (message.length < 10) return 'Contanos un poco más en el mensaje.';
  return '';
};

on(form, 'submit', async (e) => {
  e.preventDefault();
  alertBox.textContent = '';
  alertBox.className = 'form__alert';

  const error = validate();
  if (error) {
    alertBox.textContent = error;
    alertBox.classList.add('is-error');
    return;
  }

  try {
    const data = Object.fromEntries(new FormData(form));
    // 👉 Reemplaza con tu endpoint (Formspree, Netlify Forms o backend propio)
    const res = await fetch('https://formspree.io/f/mblkeqbq', {
      method:'POST',
      headers:{ 'Accept':'application/json', 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Error de envío');
    form.reset();
    alertBox.textContent = '¡Gracias! Te contactaremos a la brevedad.';
    alertBox.classList.add('is-ok');
  } catch (err) {
    alertBox.textContent = 'No pudimos enviar el mensaje. Probá de nuevo.';
    alertBox.classList.add('is-error');
  }
});
