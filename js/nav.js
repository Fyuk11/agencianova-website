export function initNav() {
  if (window.__nav_inited) return;
  window.__nav_inited = true;

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector(".nav-overlay");
  const closeBtn = document.querySelector("[data-nav-close]");

  if (!nav || !toggle) return;

  const open = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
    if(overlay) overlay.classList.add("is-active");
    document.documentElement.classList.add("nav-open");
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    if(overlay) overlay.classList.remove("is-active");
    document.documentElement.classList.remove("nav-open");
    document.body.style.overflow = '';
  };

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("is-open") ? close() : open();
  });

  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    close();
  });

  // cerrar al clickear cualquier link dentro del nav
  nav.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", close);
  });

  // cerrar al presionar Escape
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") close();
  });

  // cerrar al clickear fuera del nav
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      close();
    }
  });

  // prevenir clicks dentro del nav de cerrar
  nav.addEventListener("click", (e) => e.stopPropagation());
}
