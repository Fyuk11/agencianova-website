// js/nav.js
export function initNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  if (!nav || !toggle) return;

  const open = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-active"); // animación del hamburger
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("nav-open");
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active"); // animación del hamburger
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });

  // cerrar al hacer clic en un link
  nav.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", close);
  });

  // cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
