/* export function initNav() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const closeBtn = document.querySelector("[data-nav-close]");
  if (!nav || !toggle || !overlay) return;

  const open = () => {
    nav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-active");
    document.documentElement.classList.add("nav-open");
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-active");
    document.documentElement.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });

  // Cierra al hacer click en los links
  nav.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", close);
  });

  // Cierra al hacer click en el overlay
  overlay.addEventListener("click", close);

  // Cierra al hacer click en el botón X
  if (closeBtn) {
    closeBtn.addEventListener("click", close);
  }

  // Cierra con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
*/

/*
// js/nav.js
export function initNav() {
  if (window.__nav_inited) return;
  window.__nav_inited = true;

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const closeBtn = document.querySelector("[data-nav-close]");

  if (!nav || !toggle || !overlay) {
    console.warn('initNav: elementos faltantes', { nav, toggle, overlay, closeBtn });
    return;
  }

  const open = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
    overlay.classList.add("is-active");
    document.documentElement.classList.add("nav-open");
    // bloquear scroll en body
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-active");
    document.documentElement.classList.remove("nav-open");
    // quitar bloqueo de scroll
    document.body.style.overflow = '';
  };

  // toggle por click
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("is-open") ? close() : open();
  });

  /* cerrar con la X
  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    close();
  });
*

// cerrar con la X
  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    close();
  });

  // cerrar clicando sobre overlay
  overlay.addEventListener("click", (e) => {
    close();
  });

  /* cerrar al clickear un link dentro del nav
  nav.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      close();
    });
  }); *

  nav.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", (e) => {
    close();
    // Dejá que haga scroll normal al id, no uses e.preventDefault()
  });
});


  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Clic en cualquier parte del documento debería cerrar (opcional)
  // Lo dejamos desactivado porque overlay ya gestiona el clic fuera.
  // document.addEventListener('click', (e) => { if (!nav.contains(e.target) && !toggle.contains(e.target)) close(); });
}

// auto-init seguro (si se importa o si se carga como script)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}

nav.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    nav.querySelectorAll(".nav__link").forEach(l => l.classList.remove("is-active"));
    link.classList.add("is-active");
    close();
  });
});

 */
export function initNav() {
  if (window.__nav_inited) return;
  window.__nav_inited = true;

  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const overlay = document.querySelector("[data-nav-overlay]");
  const closeBtn = document.querySelector("[data-nav-close]");

  if (!nav || !toggle) {
    console.warn('initNav: faltan elementos', { nav, toggle, overlay, closeBtn });
    return;
  }

  const open = () => {
    nav.classList.add("is-open");
    toggle.classList.add("is-active");
    toggle.setAttribute("aria-expanded", "true");
    overlay?.classList.add("is-active");
    document.documentElement.classList.add("nav-open");
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    nav.classList.remove("is-open");
    toggle.classList.remove("is-active");
    toggle.setAttribute("aria-expanded", "false");
    overlay?.classList.remove("is-active");
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

  overlay?.addEventListener("click", () => close());

  nav.querySelectorAll(".nav__link").forEach(link => {
    link.addEventListener("click", () => {
      nav.querySelectorAll(".nav__link").forEach(l => l.classList.remove("is-active"));
      link.classList.add("is-active");
      close();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// auto-init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNav);
} else {
  initNav();
}
