/* ==========================================================================
   SCROLL — coreografía de entrada, parallax, contadores y marquesina
   ========================================================================== */

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────── utilidades ─────────────── */

function splitChars(el) {
  const text = el.textContent.trim();
  el.innerHTML = text
    .split(' ')
    .map((word) => `<span class="sw">${[...word]
      .map((ch) => `<span class="sc">${ch}</span>`).join('')}</span>`)
    .join('<span class="sw sw--gap"></span>');
  return el.querySelectorAll('.sc');
}

/* ─────────────── intro del hero ─────────────── */

export function heroIntro() {
  const words = document.querySelectorAll('.hero__title .w');
  const stage = document.querySelector('.hero__stage');
  const bag = document.querySelector('[data-bag]');
  const floaters = document.querySelectorAll('[data-floater]');
  const pillars = document.querySelectorAll('[data-pillar]');
  const reveals = document.querySelectorAll('.hero [data-reveal]');
  const thanks = document.querySelector('.hero__thanks');
  const scribbles = document.querySelectorAll('.scribble');
  const hint = document.querySelector('.scroll-hint');

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  if (reduced) {
    gsap.set([words, reveals, pillars, floaters, thanks, scribbles], { opacity: 1, y: 0 });
    return tl;
  }

  gsap.set(floaters, { opacity: 0, scale: 0.4 });

  tl.from(words, {
      yPercent: 118,
      duration: 1.05,
      stagger: { each: 0.045, from: 'start' },
    })
    .from(reveals, { y: 26, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.35)
    .from(bag, { scale: 0.72, opacity: 0, duration: 1.1, ease: 'elastic.out(1, .72)' }, 0.15)
    .to(floaters, {
      opacity: 1, scale: 1, duration: 0.8,
      stagger: { each: 0.09, from: 'random' },
      ease: 'back.out(1.9)',
    }, 0.55)
    .from(pillars, { x: 34, opacity: 0, duration: 0.7, stagger: 0.09 }, 0.6)
    .from(scribbles, { scale: 0, rotate: -90, duration: 0.7, stagger: 0.12, ease: 'back.out(2)' }, 0.8)
    .from(thanks, { opacity: 0, y: 14, rotate: -18, duration: 0.7 }, 0.95)
    .from(hint, { opacity: 0, y: -14, duration: 0.6 }, 1.1);

  /* respiración continua */
  gsap.to(bag, {
    y: -12, duration: 3.2, ease: 'sine.inOut', repeat: -1, yoyo: true,
  });

  floaters.forEach((f, i) => {
    gsap.to(f, {
      y: gsap.utils.random(-20, -34),
      x: gsap.utils.random(-10, 10),
      rotate: `+=${gsap.utils.random(-10, 10)}`,
      duration: gsap.utils.random(2.6, 4.2),
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: i * 0.18,
    });
  });

  /* parallax con el puntero */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const setters = [...floaters].map((f) => ({
      x: gsap.quickTo(f, 'xPercent', { duration: 0.9, ease: 'power3' }),
      y: gsap.quickTo(f, 'yPercent', { duration: 0.9, ease: 'power3' }),
      d: gsap.utils.random(8, 22),
    }));
    const bagX = gsap.quickTo(bag, 'xPercent', { duration: 1.1, ease: 'power3' });
    const bagY = gsap.quickTo(bag, 'yPercent', { duration: 1.1, ease: 'power3' });

    stage.closest('.hero').addEventListener('pointermove', (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      setters.forEach((s) => { s.x(cx * s.d); s.y(cy * s.d * 0.6); });
      bagX(cx * -4); bagY(cy * -3);
    });
  }

  return tl;
}

/* ─────────────── animaciones al hacer scroll ─────────────── */

export function initScrollAnimations() {
  /* títulos partidos en letras */
  document.querySelectorAll('[data-split]').forEach((el) => {
    const chars = splitChars(el);
    gsap.from(chars, {
      scrollTrigger: { trigger: el, start: 'top 86%' },
      yPercent: 105,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out',
      stagger: { each: 0.022, from: 'start' },
    });
  });

  /* revelados genéricos */
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    if (el.closest('.hero')) return;
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 34,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
    });
  });

  /* equipo */
  const team = document.querySelector('[data-team]');
  if (team) {
    gsap.from(team.children, {
      scrollTrigger: { trigger: team, start: 'top 84%' },
      y: 48, opacity: 0, scale: 0.94,
      duration: 0.85, ease: 'power3.out', stagger: 0.09,
    });
  }

  /* pasos de envío */
  const steps = document.querySelectorAll('[data-step]');
  if (steps.length) {
    gsap.from(steps, {
      scrollTrigger: { trigger: steps[0].parentElement, start: 'top 84%' },
      y: 46, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
    });
  }

  /* la moto cruza la sección */
  const moto = document.querySelector('.envios__moto');
  if (moto && !reduced) {
    gsap.fromTo(moto,
      { xPercent: 40, opacity: 0 },
      {
        xPercent: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#envios', start: 'top 70%' },
      });
    gsap.to(moto, {
      xPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: '#envios', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  }

  /* caja de donaciones con parallax */
  const box = document.querySelector('.cause__box svg');
  if (box && !reduced) {
    gsap.fromTo(box,
      { y: 60, rotate: -4, opacity: 0 },
      {
        y: 0, rotate: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cause', start: 'top 78%' },
      });
    gsap.to(box, {
      y: -34, ease: 'none',
      scrollTrigger: { trigger: '.cause', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
    });
  }

  /* tarjetas de producto */
  const grid = document.querySelector('[data-grid]');
  if (grid) {
    ScrollTrigger.batch(grid.children, {
      start: 'top 92%',
      onEnter: (batch) => gsap.from(batch, {
        y: 46, opacity: 0, scale: 0.95,
        duration: 0.7, ease: 'power3.out', stagger: 0.06, overwrite: true,
      }),
    });
  }

  initCounters();
  initMarquee();
}

/* ─────────────── contadores ─────────────── */

function initCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const pre = el.dataset.prefix || '';
    const suf = el.dataset.suffix || '';
    const obj = { v: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: end,
          duration: 1.9,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = pre + Math.round(obj.v) + suf; },
        });
      },
    });
  });

  const goal = document.querySelector('[data-goal]');
  if (!goal) return;
  const bar = goal.querySelector('[data-goal-bar]');
  const num = goal.querySelector('[data-goal-num]');
  const pct = 60; /* 120 de 200 desayunos */
  const o = { v: 0 };

  ScrollTrigger.create({
    trigger: goal,
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.to(o, {
        v: pct,
        duration: 1.9,
        ease: 'power2.out',
        onUpdate: () => {
          num.textContent = Math.round(o.v);
          bar.style.width = o.v + '%';
        },
      });
    },
  });
}

/* ─────────────── marquesina ─────────────── */

function initMarquee() {
  const track = document.querySelector('[data-marquee]');
  if (!track) return;

  track.innerHTML += track.innerHTML;

  const tween = gsap.to(track, {
    xPercent: -50,
    duration: 26,
    ease: 'none',
    repeat: -1,
  });

  if (reduced) { tween.pause(); return; }

  /* la velocidad del scroll empuja la cinta */
  ScrollTrigger.create({
    onUpdate: (self) => {
      const v = gsap.utils.clamp(-3, 3, self.getVelocity() / 320);
      gsap.to(tween, { timeScale: 1 + Math.abs(v), duration: 0.3, overwrite: true });
    },
  });
}
