/* ==========================================================================
   GOO — sistema de interacción líquida.
   Todo lo que se toca (botones, píldoras de navegación, filtros, burger, fab)
   deforma su masa como si fuera un fluido: varias esferas viajan bajo un
   filtro SVG que las funde entre sí (feGaussianBlur + feColorMatrix).
   ========================================================================== */

import gsap from 'gsap';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ─────────────────────────────────────────────────────────────
   1. BOTONES
   ───────────────────────────────────────────────────────────── */

const BLOB_POS = [
  { x: -0.30, y: -0.62 },
  { x: 0.06, y: 0.72 },
  { x: 0.33, y: -0.66 },
  { x: -0.14, y: 0.66 },
];

export function gooButtons(scope = document) {
  scope.querySelectorAll('.btn').forEach(setupButton);
}

function setupButton(btn) {
  if (btn.dataset.goo) return;
  btn.dataset.goo = '1';

  const fx = document.createElement('span');
  fx.className = 'btn__fx';
  fx.style.filter = 'url(#goo)';

  const bg = document.createElement('i');
  bg.className = 'btn__bg';
  fx.appendChild(bg);

  const blobs = BLOB_POS.map(() => {
    const b = document.createElement('i');
    b.className = 'btn__b';
    fx.appendChild(b);
    return b;
  });

  btn.prepend(fx);

  const enter = () => {
    if (reduced) return;
    const w = btn.offsetWidth;
    const h = btn.offsetHeight;
    gsap.killTweensOf(blobs);
    gsap.to(blobs, {
      scale: (i) => 0.78 + (i % 2) * 0.34,
      x: (i) => w * BLOB_POS[i].x,
      y: (i) => h * BLOB_POS[i].y,
      duration: 0.85,
      ease: 'elastic.out(1, 0.58)',
      stagger: 0.035,
    });
    gsap.to(bg, { scaleX: 1.045, scaleY: 1.1, duration: 0.6, ease: 'elastic.out(1, .5)' });
  };

  const leave = () => {
    gsap.killTweensOf(blobs);
    gsap.to(blobs, {
      scale: 0,
      x: 0,
      y: 0,
      duration: 0.55,
      ease: 'power3.inOut',
      stagger: { each: 0.03, from: 'end' },
    });
    gsap.to(bg, { scaleX: 1, scaleY: 1, duration: 0.5, ease: 'power3.out' });
    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, .4)' });
  };

  if (finePointer) {
    btn.addEventListener('mouseenter', enter);
    btn.addEventListener('mouseleave', leave);
    /* magnetismo: el botón se estira hacia el puntero */
    btn.addEventListener('mousemove', (e) => {
      if (reduced) return;
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - (r.left + r.width / 2)) * 0.22,
        y: (e.clientY - (r.top + r.height / 2)) * 0.32,
        duration: 0.5,
        ease: 'power3.out',
      });
    });
  } else {
    btn.addEventListener('pointerdown', enter);
    btn.addEventListener('pointerup', () => setTimeout(leave, 220));
    btn.addEventListener('pointercancel', leave);
  }

  btn.addEventListener('pointerdown', () => {
    gsap.to(bg, { scaleX: 0.94, scaleY: 0.84, duration: 0.2, ease: 'power2.out' });
  });
  btn.addEventListener('pointerup', () => {
    gsap.to(bg, { scaleX: 1, scaleY: 1, duration: 0.7, ease: 'elastic.out(1, .35)' });
  });
}

/* ─────────────────────────────────────────────────────────────
   2. PÍLDORA DESLIZANTE (nav y filtros)
   Una píldora + una gota rezagada: al desplazarse, el filtro las
   mantiene unidas por un hilo elástico antes de fusionarlas.
   ───────────────────────────────────────────────────────────── */

export function createSlidingPill({ container, pill, offset = 20, trailClass, duration = 0.55 }) {
  const goo = document.createElement('div');
  goo.className = trailClass.replace('__trail', '__goo');
  goo.style.filter = 'url(#goo)';
  goo.style.position = 'absolute';
  goo.style.inset = `-${offset}px`;
  goo.style.pointerEvents = 'none';

  const trail = document.createElement('span');
  trail.className = trailClass;

  container.prepend(goo);
  goo.appendChild(pill);
  goo.appendChild(trail);

  let current = null;

  function moveTo(target, instant = false) {
    if (!target) return;
    current = target;
    const w = target.offsetWidth;
    const h = target.offsetHeight;
    const x = target.offsetLeft + offset;
    const y = target.offsetTop + offset;

    const d = instant || reduced ? 0 : duration;

    gsap.to(pill, {
      x, y, width: w, height: h, opacity: 1,
      duration: d, ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(trail, {
      x: x + w / 2 - 11,
      y: y + h / 2 - 11,
      opacity: 1,
      duration: d * 1.55,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.fromTo(pill,
      { scaleY: 1 },
      { scaleY: 1, keyframes: [{ scaleY: 0.86, duration: d * 0.4 }, { scaleY: 1, duration: d * 0.9, ease: 'elastic.out(1,.45)' }] }
    );
  }

  function refresh() { if (current) moveTo(current, true); }
  window.addEventListener('resize', refresh);

  return { moveTo, refresh };
}

/* ─────────────────────────────────────────────────────────────
   3. BURGER
   ───────────────────────────────────────────────────────────── */

export function gooBurger(burger) {
  const bars = burger.querySelectorAll('.burger__goo i');
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5, ease: 'power3.inOut' } });

  tl.to(bars[1], { scale: 0.1, opacity: 0, duration: 0.3 }, 0)
    .to(bars[0], { y: 0, rotate: 45, width: 24 }, 0.05)
    .to(bars[2], { y: 0, rotate: -45, width: 24 }, 0.05)
    .to(burger, { backgroundColor: '#FFC72C', duration: 0.4 }, 0)
    .to(bars, { backgroundColor: '#08080A', duration: 0.4 }, 0);

  return tl;
}

/* ─────────────────────────────────────────────────────────────
   4. FAB — la gota que se desprende y vuelve
   ───────────────────────────────────────────────────────────── */

export function fabPop(fab) {
  const sat = fab.querySelector('[data-sat]');
  const disc = fab.querySelector('.fab__disc');
  const btn = fab.querySelector('.fab__btn');

  gsap.killTweensOf([sat, disc, btn]);
  gsap.set(sat, { scale: 0, x: 0, y: 0 });

  gsap.timeline()
    .to(sat, { scale: 1, x: -34, y: -30, duration: 0.42, ease: 'power2.out' }, 0)
    .to(sat, { scale: 0, x: 0, y: 0, duration: 0.5, ease: 'power2.in' }, 0.34)
    .to(disc, { scaleX: 1.22, scaleY: 0.8, duration: 0.16, ease: 'power2.out' }, 0.12)
    .to(disc, { scaleX: 1, scaleY: 1, duration: 0.95, ease: 'elastic.out(1, .32)' }, 0.28)
    .fromTo(btn, { scale: 0.86 }, { scale: 1, duration: 0.8, ease: 'elastic.out(1, .4)' }, 0.28);
}

/* ─────────────────────────────────────────────────────────────
   5. Vuelo del producto hacia el pedido
   ───────────────────────────────────────────────────────────── */

export function flyToCart(sourceEl, fab) {
  if (reduced || !sourceEl || !fab) return;

  const from = sourceEl.getBoundingClientRect();
  const to = fab.getBoundingClientRect();

  const ghost = sourceEl.cloneNode(true);
  ghost.style.cssText = `position:fixed;left:${from.left}px;top:${from.top}px;width:${from.width}px;
    height:${from.height}px;z-index:110;pointer-events:none;margin:0;`;
  document.body.appendChild(ghost);

  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);

  gsap.timeline({ onComplete: () => ghost.remove() })
    .to(ghost, { x: dx * 0.42, y: dy * 0.36 - 90, scale: 0.72, rotate: -14, duration: 0.42, ease: 'power2.out' })
    .to(ghost, { x: dx, y: dy, scale: 0.12, rotate: 24, opacity: 0.6, duration: 0.48, ease: 'power2.in' })
    .set(ghost, { opacity: 0 });
}
