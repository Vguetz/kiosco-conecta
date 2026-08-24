/* ==========================================================================
   CURSOR — punto + anillo con inercia. El anillo persigue al punto y, bajo el
   filtro goo, ambos se estiran como una gota al moverse rápido.
   ========================================================================== */

import gsap from 'gsap';

export function initCursor() {
  const el = document.getElementById('cursor');
  if (!el) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = el.querySelector('.cursor__dot');
  const ring = el.querySelector('.cursor__ring');
  const label = el.querySelector('.cursor__label');

  const setDotX = gsap.quickTo(dot, 'x', { duration: 0.14, ease: 'power3' });
  const setDotY = gsap.quickTo(dot, 'y', { duration: 0.14, ease: 'power3' });
  const setRingX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const setRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  const setLabX = gsap.quickTo(label, 'x', { duration: 0.4, ease: 'power3' });
  const setLabY = gsap.quickTo(label, 'y', { duration: 0.4, ease: 'power3' });

  let shown = false;

  window.addEventListener('pointermove', (e) => {
    if (!shown) { shown = true; gsap.to(el, { opacity: 1, duration: 0.4 }); }
    setDotX(e.clientX); setDotY(e.clientY);
    setRingX(e.clientX); setRingY(e.clientY);
    setLabX(e.clientX); setLabY(e.clientY);
  }, { passive: true });

  window.addEventListener('pointerleave', () => {
    shown = false;
    gsap.to(el, { opacity: 0, duration: 0.3 });
  });

  const SEL = 'a, button, .card, .socia, .chip, [data-cursor], input, textarea';

  document.addEventListener('pointerover', (e) => {
    const hit = e.target.closest(SEL);
    if (!hit) return;
    const text = hit.dataset.cursor || '';
    gsap.to(ring, { width: text ? 62 : 52, height: text ? 62 : 52, opacity: text ? 1 : 0.75, duration: 0.4, ease: 'power3.out' });
    gsap.to(dot, { scale: text ? 0 : 0.6, duration: 0.35 });
    if (text) {
      label.textContent = text;
      gsap.to(label, { opacity: 1, duration: 0.25 });
    }
  });

  document.addEventListener('pointerout', (e) => {
    if (!e.target.closest(SEL)) return;
    if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(SEL)) return;
    gsap.to(ring, { width: 40, height: 40, opacity: 0.5, duration: 0.45, ease: 'power3.out' });
    gsap.to(dot, { scale: 1, duration: 0.35 });
    gsap.to(label, { opacity: 0, duration: 0.2 });
  });

  document.addEventListener('pointerdown', () => gsap.to(ring, { scale: 0.75, duration: 0.2 }));
  document.addEventListener('pointerup', () => gsap.to(ring, { scale: 1, duration: 0.5, ease: 'elastic.out(1,.4)' }));
}
