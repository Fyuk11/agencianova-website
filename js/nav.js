export function initNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");
  if (!nav || !toggle || !overlay) return;

  const open = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-active");
    document.documentElement.classList.add("nav-open");
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-active");
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

  // cerrar clickeando en el overlay
  overlay.addEventListener("click", close);
}

