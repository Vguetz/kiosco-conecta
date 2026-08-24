/* ==========================================================================
   NAVEGACIÓN — barra fija, píldora líquida, menú mobile y anclas suaves
   ========================================================================== */

import gsap from 'gsap';
import { createSlidingPill, gooBurger } from './goo.js';

export function initNav(scrollTo) {
  const nav = document.getElementById('nav');
  const links = [...document.querySelectorAll('.nav__link')];
  const pillEl = document.getElementById('navPill');
  const container = document.getElementById('navLinks');
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');

  /* ── barra pegajosa ── */
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── píldora líquida ── */
  let pill = null;
  if (container && pillEl) {
    pill = createSlidingPill({
      container,
      pill: pillEl,
      offset: 20,
      trailClass: 'nav__trail',
      duration: 0.5,
    });

    const active = () => links.find((l) => l.classList.contains('is-active')) || links[0];
    requestAnimationFrame(() => pill.moveTo(active(), true));

    links.forEach((l) => {
      l.addEventListener('mouseenter', () => pill.moveTo(l));
      l.addEventListener('focus', () => pill.moveTo(l));
    });
    container.addEventListener('mouseleave', () => pill.moveTo(active()));
    window.addEventListener('load', () => pill.moveTo(active(), true));
  }

  /* ── sección activa ── */
  const sections = [...document.querySelectorAll('main section[id]')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const id = en.target.id;
      links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
      const act = links.find((l) => l.classList.contains('is-active'));
      if (pill && act && !container.matches(':hover')) pill.moveTo(act);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => io.observe(s));

  /* ── menú mobile ── */
  let open = false;
  const burgerTl = gooBurger(burger);
  const sheet = menu.querySelector('.menu__sheet');
  const blobs = menu.querySelectorAll('.menu__blob');
  const items = menu.querySelectorAll('.menu__link');
  const foot = menu.querySelector('.menu__foot');

  const menuTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
    .set(menu, { visibility: 'visible' })
    .to(blobs, { scale: 1.35, duration: 0.5, stagger: 0.06, ease: 'back.out(1.6)' }, 0)
    .to(sheet, { scale: 1, duration: 0.7, ease: 'power4.inOut' }, 0.12)
    .fromTo(items,
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, 0.4)
    .fromTo(foot, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, 0.65);

  function toggleMenu(force) {
    open = force ?? !open;
    menu.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
    if (open) { burgerTl.play(); menuTl.timeScale(1).play(); }
    else { burgerTl.reverse(); menuTl.timeScale(1.6).reverse(); }
  }

  burger.addEventListener('click', () => toggleMenu());
  menu.querySelectorAll('.menu__link').forEach((a) => {
    a.addEventListener('click', () => toggleMenu(false));
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) toggleMenu(false); });

  /* ── anclas suaves ── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (open) toggleMenu(false);
      scrollTo(target);
    });
  });

  return { refreshPill: () => pill && pill.refresh() };
}
