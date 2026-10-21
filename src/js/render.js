/* ==========================================================================
   RENDER — construye equipo, filtros, grilla de productos y flotantes del hero
   ========================================================================== */

import { PRODUCTOS, CATEGORIAS, SOCIAS } from "./data.js";
import { renderArt, avatar } from "./art.js";

export const money = (n) => "$" + n.toLocaleString("es-UY");

/* ─────────────── NOSOTRAS ─────────────── */

export function renderTeam() {
  const host = document.querySelector("[data-team]");
  if (!host) return;

  host.innerHTML = SOCIAS.map(
    (s) => `
    <article class="socia" data-socia>
      <img class="socia__avatar" src="${s.avatar}" alt="${s.nombre}">
      <span class="socia__nombre">${s.nombre}</span>
      <span class="socia__rol">${s.rol}</span>
      <p class="socia__frase">${s.frase}</p>
    </article>
  `,
  ).join("");
}

/* ─────────────── FILTROS ─────────────── */

export function renderFilters() {
  const host = document.querySelector("[data-filters]");
  if (!host) return;

  const pill = host.querySelector("[data-filter-pill]");
  host.innerHTML = "";
  if (pill) host.appendChild(pill);

  CATEGORIAS.forEach((c, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (i === 0 ? " is-on" : "");
    b.dataset.cat = c.id;
    b.textContent = c.nombre;
    host.appendChild(b);
  });
}

/* ─────────────── PRODUCTOS ─────────────── */

export function cardMarkup(p) {
  const cat = CATEGORIAS.find((c) => c.id === p.cat);
  return `
    <button type="button" class="card" data-card data-id="${p.id}" data-cat="${p.cat}"
            aria-label="Agregar ${p.nombre} al pedido">
      ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
      <span class="card__art">${
        p.img
          ? `<img class="card__photo" src="${p.img}" alt="" loading="lazy" decoding="async">`
          : renderArt(p.art, p.opts)
      }</span>
      <span>
        <span class="card__cat">${cat ? cat.nombre : ""}</span>
        <span class="card__name">${p.nombre}</span>
      </span>
      <span class="card__foot">
        <span class="card__price">${money(p.precio)}</span>
        <span class="card__add">
          <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-plus" /></svg>
          <span class="card__count" data-card-count></span>
        </span>
      </span>
    </button>`;
}

export function renderGrid() {
  const host = document.querySelector("[data-grid]");
  if (!host) return;
  host.innerHTML = PRODUCTOS.map(cardMarkup).join("");
}

/* ─────────────── FLOTANTES DEL HERO ─────────────── */

const FLOAT_SPOTS = [
  { top: "2%", left: "2%", rot: -12 },
  { top: "-2%", right: "14%", rot: 10 },
  { top: "34%", left: "-8%", rot: 8 },
  { top: "40%", right: "0%", rot: -9 },
  { bottom: "6%", left: "6%", rot: 14 },
];

const FLOAT_IDS = ["lata-cola", "papas", "agua", "alfajor", "biromes"];

export function renderFloaters() {
  const host = document.querySelector("[data-floaters]");
  if (!host) return;

  host.innerHTML = FLOAT_IDS.map((id, i) => {
    const p = PRODUCTOS.find((x) => x.id === id);
    if (!p) return "";
    const s = FLOAT_SPOTS[i];
    const pos = Object.entries(s)
      .filter(([k]) => k !== "rot")
      .map(([k, v]) => `${k}:${v}`)
      .join(";");
    return `<span class="floater" data-floater style="${pos};transform:rotate(${s.rot}deg)">
      ${renderArt(p.art, p.opts)}
    </span>`;
  }).join("");
}

/* ─────────────── PRODUCTOS QUE ASOMAN DE LA BOLSA ─────────────── */

const PEEK = [
  { id: "cola-15", style: "left:10%;top:3%;width:28%", rot: -12 },
  { id: "papas", style: "left:34%;top:-6%;width:32%", rot: 3 },
  { id: "galletitas", style: "left:57%;top:7%;width:31%", rot: 13 },
];

export function renderPeek() {
  const host = document.querySelector("[data-peek]");
  if (!host) return;

  host.innerHTML = PEEK.map((s) => {
    const p = PRODUCTOS.find((x) => x.id === s.id);
    if (!p) return "";
    return `<span class="peek" style="${s.style};transform:rotate(${s.rot}deg)">
      ${renderArt(p.art, p.opts)}
    </span>`;
  }).join("");
}
