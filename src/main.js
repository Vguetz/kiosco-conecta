/* ==========================================================================
   KIOSCO CONECTA — punto de entrada
   ========================================================================== */

import './styles/main.css';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { mountSprite } from './js/sprite.js';
import { renderTeam, renderFilters, renderGrid, renderFloaters, renderPeek } from './js/render.js';
import { gooButtons, createSlidingPill } from './js/goo.js';
import { initCursor } from './js/cursor.js';
import { runPreloader } from './js/preloader.js';
import { initNav } from './js/nav.js';
import { initOrder } from './js/order.js';
import { heroIntro, initScrollAnimations } from './js/scroll.js';

gsap.registerPlugin(ScrollTrigger);

/* consola de desarrollo: permite inspeccionar timelines desde el navegador */
if (import.meta.env.DEV) { window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; }

/* ─────────────── scroll suave ─────────────── */

function initSmoothScroll() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    return (target) => target.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return (target) => lenis.scrollTo(target, { offset: -70, duration: 1.15 });
}

/* ─────────────── filtros de producto (FLIP artesanal) ─────────────── */

function initFilters() {
  const host = document.querySelector('[data-filters]');
  const grid = document.querySelector('[data-grid]');
  if (!host || !grid) return;

  const pillEl = host.querySelector('[data-filter-pill]');
  const chips = [...host.querySelectorAll('.chip')];

  const pill = createSlidingPill({
    container: host,
    pill: pillEl,
    offset: 26,
    trailClass: 'filters__trail',
    duration: 0.5,
  });

  requestAnimationFrame(() => pill.moveTo(chips[0], true));

  let current = 'todos';

  function apply(cat) {
    if (cat === current) return;
    current = cat;

    const cards = [...grid.children];
    const before = new Map(cards.map((c) => [c, c.getBoundingClientRect()]));

    cards.forEach((c) => {
      const show = cat === 'todos' || c.dataset.cat === cat;
      c.style.display = show ? '' : 'none';
    });

    cards.forEach((c) => {
      if (c.style.display === 'none') return;
      const prev = before.get(c);
      const next = c.getBoundingClientRect();

      if (!prev || prev.width === 0) {
        gsap.fromTo(c,
          { opacity: 0, scale: 0.86, y: 22 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' });
        return;
      }

      gsap.fromTo(c,
        { x: prev.left - next.left, y: prev.top - next.top },
        { x: 0, y: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform' });
    });

    ScrollTrigger.refresh();
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.toggle('is-on', c === chip));
      pill.moveTo(chip);
      apply(chip.dataset.cat);
    });
    chip.addEventListener('mouseenter', () => pill.moveTo(chip));
    chip.addEventListener('mouseleave', () => {
      const on = chips.find((c) => c.classList.contains('is-on'));
      pill.moveTo(on);
    });
  });
}

/* ─────────────── arranque ─────────────── */

function boot() {
  mountSprite();

  renderTeam();
  renderFilters();
  renderGrid();
  renderFloaters();
  renderPeek();

  const scrollTo = initSmoothScroll();

  gooButtons();
  initCursor();
  initNav(scrollTo);
  initOrder();
  initFilters();
  initScrollAnimations();

  runPreloader().then(() => {
    heroIntro();
    ScrollTrigger.refresh();
  });

  /* las tipografías cambian métricas: recalculamos posiciones */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
