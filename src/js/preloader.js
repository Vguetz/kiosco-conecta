/* ==========================================================================
   PRELOADER — cuatro gotas orbitan, se fusionan en el logotipo y estallan
   para abrir la página. Devuelve una promesa que resuelve al terminar.
   ========================================================================== */

import gsap from 'gsap';

export function runPreloader() {
  const el = document.getElementById('preloader');
  if (!el) return Promise.resolve();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const core = el.querySelector('.pl-blob--core');
  const blobs = [...el.querySelectorAll('.pl-blob:not(.pl-blob--core)')];
  const mark = el.querySelector('.preloader__mark');
  const bar = el.querySelector('.preloader__bar i');

  if (reduced) {
    el.remove();
    document.body.classList.remove('is-locked');
    return Promise.resolve();
  }

  document.body.classList.add('is-locked');

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        el.remove();
        document.body.classList.remove('is-locked');
        resolve();
      },
    });

    const R = Math.min(150, window.innerWidth * 0.28);

    gsap.set(core, { scale: 0 });
    gsap.set(blobs, { scale: 0 });

    tl.to(core, { scale: 1, duration: 0.6, ease: 'elastic.out(1, .55)' })
      .to(blobs, {
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(2)',
      }, 0.1)
      /* órbita */
      .to(blobs, {
        keyframes: [
          { x: (i) => Math.cos((i / 3) * Math.PI * 2) * R, y: (i) => Math.sin((i / 3) * Math.PI * 2) * R, duration: 0.7 },
          { x: (i) => Math.cos((i / 3) * Math.PI * 2 + 2.4) * R * 0.8, y: (i) => Math.sin((i / 3) * Math.PI * 2 + 2.4) * R * 0.8, duration: 0.7 },
          { x: 0, y: 0, duration: 0.6, ease: 'power2.in' },
        ],
      }, 0.35)
      .to(bar, { width: '100%', duration: 1.9, ease: 'power2.inOut' }, 0.2)
      /* fusión */
      .to(core, { scale: 2.2, duration: 0.5, ease: 'power2.out' }, '-=0.35')
      .to(blobs, { scale: 0, duration: 0.3 }, '<')
      .to(mark, { opacity: 1, duration: 0.4 }, '-=0.25')
      .fromTo(mark.children,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out' }, '<')
      /* apertura */
      .to(core, { scale: 42, duration: 0.85, ease: 'power3.inOut' }, '+=0.35')
      .to([mark, bar.parentElement], { opacity: 0, duration: 0.3 }, '<')
      .to(el, { opacity: 0, duration: 0.4 }, '-=0.3');
  });
}
