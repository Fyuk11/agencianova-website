// Pequeños helpers
export const qs = (s, el = document) => el.querySelector(s);
export const qsa = (s, el = document) => [...el.querySelectorAll(s)];
export const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
export const throttle = (fn, limit = 100) => {
  let inThrottle, lastArgs;
  return (...args) => {
    lastArgs = args;
    if (!inThrottle) {
      fn(...lastArgs); inThrottle = true;
      setTimeout(() => { inThrottle = false; if (lastArgs) fn(...lastArgs); }, limit);
    }
  };
};
export const inView = (el, offset = 0) => {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0;
};
