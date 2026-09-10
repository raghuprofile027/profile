export function smoothScrollTo(href) {
  const el = document.querySelector(href);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
}