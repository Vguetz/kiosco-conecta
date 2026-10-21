/* ==========================================================================
   PEDIDO — estado del carrito liviano, panel lateral y armado del mensaje
   de WhatsApp. No hay checkout: el pedido se cierra por chat, como en el
   kiosco de verdad.
   ========================================================================== */

import gsap from 'gsap';
import { PRODUCTOS, NEGOCIO } from './data.js';
import { renderArt } from './art.js';
import { fabPop, flyToCart, gooButtons } from './goo.js';
import { money } from './render.js';

const KEY = 'kiosco-conecta:pedido';

const state = new Map();

let fab, drawer, scrim, body, totals, toastEl, toastTimer;

/* ─────────────── persistencia ─────────────── */

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]');
    raw.forEach(([id, qty]) => {
      if (PRODUCTOS.some((p) => p.id === id) && qty > 0) state.set(id, qty);
    });
  } catch { /* almacenamiento no disponible: seguimos en memoria */ }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify([...state])); } catch { /* noop */ }
}

/* ─────────────── cálculos ─────────────── */

export function lines() {
  return [...state].map(([id, qty]) => {
    const p = PRODUCTOS.find((x) => x.id === id);
    return { ...p, qty, importe: p.precio * qty };
  });
}

export function totalsOf() {
  const items = lines();
  const subtotal = items.reduce((a, l) => a + l.importe, 0);
  const unidades = items.reduce((a, l) => a + l.qty, 0);
  const envio = subtotal === 0 || subtotal >= NEGOCIO.envioGratisDesde ? 0 : NEGOCIO.envio;
  return { items, unidades, subtotal, envio, total: subtotal + envio };
}

/* ─────────────── mensaje de WhatsApp ─────────────── */

export function buildMessage(extra = {}) {
  const { items, subtotal, envio, total } = totalsOf();
  const L = ['¡Hola Kiosco Conecta! 👋'];

  if (items.length) {
    L.push('', 'Quiero hacer este pedido:');
    items.forEach((l) => L.push(`• ${l.qty} x ${l.nombre} — ${money(l.importe)}`));
    L.push('', `Subtotal: ${money(subtotal)}`);
    L.push(envio === 0 ? 'Envío: ¡gratis! 🎉' : `Envío: ${money(envio)}`);
    L.push(`Total: ${money(total)}`);
  } else {
    L.push('', 'Quería hacerles una consulta.');
  }

  if (extra.nombre) L.push('', `Mi nombre: ${extra.nombre}`);
  if (extra.telefono) L.push(`Teléfono: ${extra.telefono}`);
  if (extra.direccion) L.push(`Dirección de entrega: ${extra.direccion}`);
  if (extra.mensaje) L.push('', `Nota: ${extra.mensaje}`);

  L.push('', '(Enviado desde la web 💜)');
  return L.join('\n');
}

export function waLink(extra) {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(buildMessage(extra))}`;
}

/* ─────────────── toast ─────────────── */

export function toast(text) {
  if (!toastEl) return;
  toastEl.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-check" /></svg><span>${text}</span>`;
  clearTimeout(toastTimer);
  gsap.killTweensOf(toastEl);
  gsap.fromTo(toastEl,
    { y: 90, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.55, ease: 'elastic.out(1, .62)' });
  toastTimer = setTimeout(() => {
    gsap.to(toastEl, { y: 90, opacity: 0, duration: 0.4, ease: 'power3.in' });
  }, 2600);
}

/* ─────────────── mutaciones ─────────────── */

export function add(id, sourceEl) {
  const p = PRODUCTOS.find((x) => x.id === id);
  if (!p) return;

  state.set(id, (state.get(id) || 0) + 1);
  save();

  if (sourceEl) flyToCart(sourceEl, fab);
  setTimeout(() => fabPop(fab), sourceEl ? 620 : 0);
  toast(`${p.nombre} agregado`);
  sync();
}

export function setQty(id, qty) {
  if (qty <= 0) state.delete(id);
  else state.set(id, qty);
  save();
  sync();
  renderDrawer();
}

export function clear() {
  state.clear();
  save();
  sync();
  renderDrawer();
}

/* ─────────────── sincronización de UI ─────────────── */

function sync() {
  const { unidades } = totalsOf();

  const count = document.querySelector('[data-fab-count]');
  if (count) count.textContent = unidades;

  fab.classList.toggle('is-live', unidades > 0);
  if (unidades > 0) {
    gsap.to(fab, { opacity: 1, scale: 1, duration: 0.6, ease: 'elastic.out(1, .5)' });
  } else {
    gsap.to(fab, { opacity: 0, scale: 0.4, duration: 0.35, ease: 'power3.in' });
    closeDrawer();
  }

  document.querySelectorAll('[data-card]').forEach((card) => {
    const qty = state.get(card.dataset.id) || 0;
    card.classList.toggle('is-on', qty > 0);
    const c = card.querySelector('[data-card-count]');
    if (c) c.textContent = qty > 0 ? qty : '';
  });

  document.querySelectorAll('[data-wa]').forEach((a) => { a.href = waLink(); });
  const send = document.querySelector('[data-drawer-send]');
  if (send) send.href = waLink();
}

/* ─────────────── panel ─────────────── */

function renderDrawer() {
  if (!body) return;
  const { items, subtotal, envio, total } = totalsOf();

  if (!items.length) {
    body.innerHTML = `
      <div class="drawer__empty">
        <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-cart" /></svg>
        <p>Todavía no elegiste nada.<br>Tocá los productos para sumarlos acá.</p>
      </div>`;
    totals.innerHTML = '';
    return;
  }

  body.innerHTML = items.map((l) => `
    <div class="dline" data-line="${l.id}">
      <span class="dline__art">${l.img ? `<img src="${l.img}" alt="">` : renderArt(l.art, l.opts)}</span>
      <span>
        <b>${l.nombre}</b>
        <span>${money(l.precio)} c/u · ${money(l.importe)}</span>
      </span>
      <span class="qty">
        <button type="button" data-dec aria-label="Quitar uno">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-minus" /></svg>
        </button>
        <i>${l.qty}</i>
        <button type="button" data-inc aria-label="Sumar uno">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
        </button>
      </span>
    </div>`).join('');

  const falta = NEGOCIO.envioGratisDesde - subtotal;
  totals.innerHTML = `
    <div><span>Subtotal</span><b>${money(subtotal)}</b></div>
    <div><span>Envío</span>${envio === 0 ? '<em>¡Gratis!</em>' : `<b>${money(envio)}</b>`}</div>
    ${falta > 0 ? `<div><span>Te faltan ${money(falta)} para el envío gratis</span></div>` : ''}
    <div class="is-total"><span>Total</span>${money(total)}</div>`;

  gsap.from(body.querySelectorAll('.dline'), {
    y: 14, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out',
  });
}

export function openDrawer() {
  if (!drawer || drawer.classList.contains('is-open')) return;
  renderDrawer();
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  scrim.classList.add('is-on');
  document.getElementById('fabBtn')?.setAttribute('aria-expanded', 'true');
  gsap.to(drawer, { x: 0, duration: 0.65, ease: 'power4.out' });
  gsap.to(scrim, { opacity: 0.62, duration: 0.5 });
  gsap.to(fab, { scale: 0, opacity: 0, duration: 0.3, ease: 'power3.in' });
}

export function closeDrawer() {
  if (!drawer || !drawer.classList.contains('is-open')) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.getElementById('fabBtn')?.setAttribute('aria-expanded', 'false');
  gsap.to(drawer, { x: '102%', duration: 0.5, ease: 'power3.in' });
  gsap.to(scrim, { opacity: 0, duration: 0.4, onComplete: () => scrim.classList.remove('is-on') });
  if (totalsOf().unidades > 0) {
    gsap.to(fab, { scale: 1, opacity: 1, duration: 0.6, delay: 0.15, ease: 'elastic.out(1, .5)' });
  }
}

/* ─────────────── init ─────────────── */

export function initOrder() {
  fab = document.getElementById('fab');
  drawer = document.getElementById('drawer');
  scrim = document.getElementById('scrim');
  body = document.querySelector('[data-drawer-body]');
  totals = document.querySelector('[data-drawer-totals]');
  toastEl = document.getElementById('toast');

  load();

  /* tarjetas de producto */
  document.addEventListener('click', (e) => {
    const card = e.target.closest('[data-card]');
    if (card) {
      add(card.dataset.id, card.querySelector('.art'));
      gsap.fromTo(card,
        { scale: 0.96 },
        { scale: 1, duration: 0.7, ease: 'elastic.out(1, .4)' });
    }
  });

  /* +/- del panel */
  drawer.addEventListener('click', (e) => {
    const line = e.target.closest('[data-line]');
    if (!line) return;
    const id = line.dataset.line;
    const qty = state.get(id) || 0;
    if (e.target.closest('[data-inc]')) setQty(id, qty + 1);
    if (e.target.closest('[data-dec]')) setQty(id, qty - 1);
  });

  document.getElementById('fabBtn').addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

  /* formulario de contacto */
  const form = document.getElementById('form');
  if (form) {
    const hint = form.querySelector('[data-form-hint]');
    const hintText = hint.textContent;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const campo = form.nombre.closest('.field');

      if (!nombre) {
        campo.classList.add('is-error');
        hint.textContent = 'Necesitamos tu nombre para responderte.';
        hint.classList.add('is-error');
        gsap.fromTo(campo, { x: -8 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, .35)' });
        form.nombre.focus();
        return;
      }

      campo.classList.remove('is-error');
      hint.textContent = hintText;
      hint.classList.remove('is-error');

      const url = waLink({
        nombre,
        telefono: form.telefono.value.trim(),
        direccion: form.direccion.value.trim(),
        mensaje: form.mensaje.value.trim(),
      });

      toast('Abriendo WhatsApp...');
      window.open(url, '_blank', 'noopener');
    });
  }

  gooButtons(drawer);
  sync();
  renderDrawer();
}
