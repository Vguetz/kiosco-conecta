/* ==========================================================================
   Ilustraciones de producto — SVG paramétrico.
   Cada función devuelve markup con viewBox 0 0 120 170 para que todos los
   productos compartan la misma caja óptica dentro de la grilla.
   ========================================================================== */

/* brillo diagonal reutilizable (sin gradientes: evita colisión de ids) */
const gloss = (x, y, w, h, r = 6, op = 0.16) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#fff" opacity="${op}"/>`;

const shadow = () => '<ellipse cx="60" cy="158" rx="34" ry="6" fill="#000" opacity=".28"/>';

/* ---------- BEBIDAS ---------- */

export const bottle = ({ liquid = '#5B2A18', cap = '#E02B2B', label = '#E02B2B', label2 = '#FFFFFF' }) => `
  ${shadow()}
  <path d="M50 16h20v10c0 4 2 6 5 9 8 7 11 14 11 24v72c0 8-6 14-14 14H48c-8 0-14-6-14-14V59c0-10 3-17 11-24 3-3 5-5 5-9V16z"
        fill="${liquid}"/>
  <path d="M50 16h20v10c0 4 2 6 5 9 8 7 11 14 11 24v10H34V59c0-10 3-17 11-24 3-3 5-5 5-9V16z" fill="${liquid}" opacity=".75"/>
  <rect x="46" y="8" width="28" height="14" rx="4" fill="${cap}"/>
  <rect x="34" y="78" width="52" height="42" fill="${label}"/>
  <rect x="34" y="78" width="52" height="42" fill="none" stroke="#00000022" stroke-width="2"/>
  <path d="M42 100c8-9 28-9 36 0" fill="none" stroke="${label2}" stroke-width="4" stroke-linecap="round"/>
  <rect x="40" y="86" width="40" height="7" rx="3.5" fill="${label2}" opacity=".9"/>
  ${gloss(40, 36, 8, 100, 4, 0.22)}
  <path d="M34 132h52" stroke="#00000033" stroke-width="3"/>`;

export const can = ({ body = '#1B4CA8', top = '#C9CDD4', band = '#FFFFFF', accent = '#E02B2B' }) => `
  ${shadow()}
  <path d="M36 34h48v96c0 8-4 14-9 14H45c-5 0-9-6-9-14V34z" fill="${body}"/>
  <ellipse cx="60" cy="34" rx="24" ry="8" fill="${top}"/>
  <ellipse cx="60" cy="32" rx="19" ry="5.5" fill="#9AA1AB"/>
  <path d="M52 30h16" stroke="#7C838D" stroke-width="2.6" stroke-linecap="round"/>
  <rect x="36" y="70" width="48" height="26" fill="${band}"/>
  <path d="M40 84c8-8 32-8 40 0" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="9" fill="${band}" opacity=".85"/>
  ${gloss(41, 40, 7, 96, 3.5, 0.24)}
  ${gloss(75, 40, 4, 96, 2, 0.12)}`;

export const water = () => `
  ${shadow()}
  <path d="M50 18h20v8c0 4 3 6 7 10 7 6 9 13 9 22v66c0 8-6 14-14 14H48c-8 0-14-6-14-14V58c0-9 2-16 9-22 4-4 7-6 7-10v-8z"
        fill="#BFE4F5" opacity=".85"/>
  <rect x="46" y="8" width="28" height="13" rx="4" fill="#2E7FBB"/>
  <path d="M36 66h48M36 84h48M36 102h48" stroke="#FFFFFF" stroke-width="4" opacity=".65"/>
  <rect x="34" y="108" width="52" height="30" fill="#FFFFFF"/>
  <rect x="34" y="108" width="52" height="9" fill="#2E7FBB"/>
  <path d="M60 120c-6 6-9 9-9 13a9 9 0 0 0 18 0c0-4-3-7-9-13z" fill="#2E7FBB"/>
  ${gloss(41, 34, 7, 70, 3.5, 0.5)}`;

export const juiceBox = ({ c1 = '#F07A1E', c2 = '#FFC72C' }) => `
  ${shadow()}
  <path d="M34 40h52v100H34z" fill="${c1}"/>
  <path d="M34 40h52l-8-14H42l-8 14z" fill="${c1}" opacity=".8"/>
  <rect x="60" y="14" width="5" height="30" rx="2.5" fill="#F6F1E7" transform="rotate(14 62 28)"/>
  <rect x="40" y="66" width="40" height="34" rx="4" fill="#F6F1E7"/>
  <circle cx="60" cy="83" r="11" fill="${c2}"/>
  <path d="M60 76c5 3 6 9 0 14-6-5-5-11 0-14z" fill="${c1}"/>
  <rect x="40" y="110" width="40" height="6" rx="3" fill="#F6F1E7" opacity=".8"/>
  ${gloss(38, 44, 7, 92, 3, 0.18)}`;

/* ---------- GOLOSINAS ---------- */

export const alfajor = () => `
  ${shadow()}
  <circle cx="60" cy="86" r="44" fill="#3A2318"/>
  <circle cx="60" cy="86" r="44" fill="none" stroke="#241109" stroke-width="4"/>
  <path d="M22 78c16-12 60-12 76 0" fill="none" stroke="#5A3826" stroke-width="4" opacity=".7"/>
  <path d="M28 100c14 10 50 10 64 0" fill="none" stroke="#241109" stroke-width="5" opacity=".55"/>
  <circle cx="60" cy="86" r="24" fill="#4A2B1C" opacity=".55"/>
  <path d="M46 74c9-5 19-5 28 0" fill="none" stroke="#F6F1E7" stroke-width="3" opacity=".5" stroke-linecap="round"/>
  <path d="M60 44a44 44 0 0 1 34 18" fill="none" stroke="#fff" stroke-width="5" opacity=".18" stroke-linecap="round"/>`;

export const chocoBar = ({ c1 = '#5A2E15', c2 = '#8B4FD6' }) => `
  ${shadow()}
  <rect x="24" y="46" width="72" height="86" rx="6" fill="${c2}"/>
  <rect x="24" y="46" width="72" height="86" rx="6" fill="none" stroke="#00000033" stroke-width="2"/>
  <path d="M24 62h72M24 116h72" stroke="#FFC72C" stroke-width="5"/>
  <rect x="36" y="72" width="48" height="34" rx="4" fill="${c1}"/>
  <path d="M36 89h48M60 72v34" stroke="#3D1D0C" stroke-width="2.5"/>
  <path d="M30 46l-8-12h76l-8 12z" fill="${c2}" opacity=".75"/>
  <path d="M30 132l-8 12h76l-8-12z" fill="${c2}" opacity=".75"/>
  ${gloss(30, 50, 6, 78, 3, 0.2)}`;

export const gum = ({ c1 = '#1FA9A0', c2 = '#F6F1E7' }) => `
  ${shadow()}
  <rect x="30" y="52" width="60" height="80" rx="10" fill="${c1}"/>
  <rect x="30" y="52" width="60" height="80" rx="10" fill="none" stroke="#00000030" stroke-width="2"/>
  <rect x="30" y="52" width="60" height="20" rx="10" fill="${c2}" opacity=".22"/>
  <ellipse cx="60" cy="92" rx="21" ry="15" fill="${c2}"/>
  <path d="M48 92c6-7 18-7 24 0" fill="none" stroke="${c1}" stroke-width="4" stroke-linecap="round"/>
  <rect x="42" y="114" width="36" height="6" rx="3" fill="${c2}" opacity=".75"/>
  ${gloss(36, 58, 6, 68, 3, 0.22)}`;

export const candyBag = ({ c1 = '#E0398C', c2 = '#FFC72C' }) => `
  ${shadow()}
  <path d="M28 54c14-8 50-8 64 0l6 82c-24 10-52 10-76 0l6-82z" fill="${c1}"/>
  <path d="M28 54c14-8 50-8 64 0l6 82c-24 10-52 10-76 0l6-82z" fill="none" stroke="#00000028" stroke-width="2"/>
  <path d="M30 44c12 10 48 10 60 0l2 10c-14 8-50 8-64 0l2-10z" fill="${c1}" opacity=".7"/>
  <g>
    <circle cx="48" cy="92" r="11" fill="${c2}"/>
    <circle cx="72" cy="86" r="9" fill="#F6F1E7"/>
    <circle cx="61" cy="110" r="10" fill="#6FCF6A"/>
  </g>
  <path d="M24 128c22 9 48 9 72 0" fill="none" stroke="#00000022" stroke-width="4"/>
  ${gloss(34, 60, 6, 68, 3, 0.2)}`;

export const cookiePack = ({ c1 = '#1B3E8B', c2 = '#FFC72C' }) => `
  ${shadow()}
  <rect x="22" y="58" width="76" height="66" rx="8" fill="${c1}"/>
  <rect x="22" y="58" width="76" height="66" rx="8" fill="none" stroke="#00000033" stroke-width="2"/>
  <path d="M22 74h76" stroke="${c2}" stroke-width="5"/>
  <circle cx="46" cy="98" r="15" fill="#C98A46"/>
  <circle cx="46" cy="98" r="15" fill="none" stroke="#9E6630" stroke-width="2"/>
  <g fill="#6B4020"><circle cx="42" cy="94" r="2"/><circle cx="51" cy="99" r="2"/><circle cx="44" cy="104" r="2"/></g>
  <rect x="66" y="88" width="26" height="7" rx="3.5" fill="#F6F1E7"/>
  <rect x="66" y="100" width="18" height="6" rx="3" fill="${c2}"/>
  <path d="M22 66l-8-8M98 66l8-8" stroke="${c1}" stroke-width="7" stroke-linecap="round"/>
  ${gloss(28, 64, 6, 54, 3, 0.18)}`;

/* ---------- SNACKS ---------- */

export const chipsBag = ({ c1 = '#E0A800', c2 = '#E02B2B', chip = '#F6C453' }) => `
  ${shadow()}
  <path d="M30 40c14-7 46-7 60 0 4 2 6 5 5 9l-8 84c-1 6-6 10-12 10H45c-6 0-11-4-12-10l-8-84c-1-4 1-7 5-9z" fill="${c1}"/>
  <path d="M30 40c14-7 46-7 60 0 4 2 6 5 5 9l-8 84c-1 6-6 10-12 10H45c-6 0-11-4-12-10l-8-84c-1-4 1-7 5-9z"
        fill="none" stroke="#00000028" stroke-width="2"/>
  <path d="M26 46c18 8 50 8 68 0" fill="none" stroke="#ffffff" stroke-width="4" opacity=".3"/>
  <rect x="34" y="62" width="52" height="22" rx="6" fill="${c2}"/>
  <path d="M42 73c6-6 30-6 36 0" fill="none" stroke="#F6F1E7" stroke-width="4" stroke-linecap="round"/>
  <g>
    <path d="M44 104c8-8 18-6 20 2s-10 14-18 10-8-8-2-12z" fill="${chip}"/>
    <path d="M66 112c7-6 16-4 17 3s-9 11-16 8-6-8-1-11z" fill="${chip}" opacity=".85"/>
  </g>
  ${gloss(36, 48, 6, 84, 3, 0.2)}`;

export const peanutPack = ({ c1 = '#8B4FD6' }) => `
  ${shadow()}
  <path d="M34 48h52c4 0 7 3 6 7l-9 76c-1 5-5 9-10 9H47c-5 0-9-4-10-9l-9-76c-1-4 2-7 6-7z" fill="${c1}"/>
  <path d="M28 48c16 7 48 7 64 0l-2-8c-18 6-42 6-60 0l-2 8z" fill="${c1}" opacity=".7"/>
  <rect x="38" y="66" width="44" height="18" rx="5" fill="#FFC72C"/>
  <g fill="#D9A063">
    <ellipse cx="50" cy="104" rx="9" ry="7" transform="rotate(-18 50 104)"/>
    <ellipse cx="68" cy="112" rx="9" ry="7" transform="rotate(12 68 112)"/>
    <ellipse cx="58" cy="122" rx="8" ry="6" transform="rotate(-6 58 122)"/>
  </g>
  ${gloss(38, 54, 6, 76, 3, 0.18)}`;

/* ---------- PAPELERÍA ---------- */

export const notebook = ({ c1 = '#8B4FD6', c2 = '#F6F1E7' }) => `
  ${shadow()}
  <rect x="30" y="28" width="62" height="118" rx="5" fill="${c2}"/>
  <rect x="30" y="28" width="62" height="118" rx="5" fill="none" stroke="#D6CFC0" stroke-width="2"/>
  <rect x="26" y="26" width="58" height="118" rx="5" fill="${c1}"/>
  <rect x="26" y="26" width="14" height="118" fill="#00000022"/>
  <g stroke="#FFC72C" stroke-width="3">
    <path d="M46 46h26M46 58h26M46 70h18"/>
  </g>
  <rect x="46" y="92" width="26" height="26" rx="4" fill="#FFC72C" opacity=".9"/>
  <g stroke="#F6F1E7" stroke-width="3" stroke-linecap="round" opacity=".9">
    ${Array.from({ length: 7 }, (_, i) => `<path d="M24 ${36 + i * 16}h18"/>`).join('')}
  </g>`;

export const pens = () => `
  ${shadow()}
  <rect x="28" y="44" width="64" height="96" rx="8" fill="#F6F1E7" opacity=".22"/>
  <rect x="28" y="44" width="64" height="96" rx="8" fill="none" stroke="#F6F1E7" stroke-width="2" opacity=".5"/>
  ${['#1B4CA8', '#E02B2B', '#2E7D5B', '#111116']
    .map(
      (c, i) => `<g transform="translate(${36 + i * 14} 52)">
        <rect x="0" y="8" width="9" height="74" rx="4.5" fill="${c}"/>
        <path d="M0 8h9l-4.5-10z" fill="${c}"/>
        <rect x="0" y="20" width="9" height="6" fill="#F6F1E7" opacity=".7"/>
        <rect x="3" y="0" width="3" height="12" rx="1.5" fill="${c}"/>
      </g>`
    )
    .join('')}
  <rect x="28" y="44" width="64" height="14" rx="6" fill="#FFC72C"/>`;

export const markers = () => `
  ${shadow()}
  ${['#E0398C', '#FFC72C', '#2E7FBB', '#6FCF6A', '#F07A1E']
    .map(
      (c, i) => `<g transform="translate(${30 + i * 13} ${52 + (i % 2) * 6})">
        <rect x="0" y="0" width="11" height="76" rx="5" fill="${c}"/>
        <rect x="0" y="0" width="11" height="18" rx="5" fill="#00000030"/>
        <path d="M1.5 76h8l-4 12z" fill="#3A3A44"/>
      </g>`
    )
    .join('')}
  <rect x="26" y="118" width="70" height="18" rx="6" fill="#F6F1E7" opacity=".9"/>
  <rect x="34" y="124" width="40" height="5" rx="2.5" fill="#8B4FD6"/>`;

/* ---------- CUIDADO PERSONAL ---------- */

export const gelBottle = () => `
  ${shadow()}
  <rect x="40" y="40" width="40" height="100" rx="12" fill="#DCEFF7" opacity=".9"/>
  <rect x="40" y="40" width="40" height="100" rx="12" fill="none" stroke="#B7D6E4" stroke-width="2"/>
  <rect x="50" y="20" width="20" height="22" rx="5" fill="#3A3A44"/>
  <path d="M52 20h16v-6c0-3-3-5-8-5s-8 2-8 5v6z" fill="#5A5A66"/>
  <rect x="42" y="76" width="36" height="34" rx="4" fill="#F6F1E7"/>
  <path d="M60 84c-5 6-8 9-8 13a8 8 0 0 0 16 0c0-4-3-7-8-13z" fill="#6FCF6A"/>
  <rect x="46" y="104" width="28" height="4" rx="2" fill="#8B4FD6"/>
  ${gloss(45, 50, 6, 80, 3, 0.55)}`;

export const tissues = () => `
  ${shadow()}
  <rect x="26" y="60" width="68" height="72" rx="8" fill="#4FA3E0"/>
  <rect x="26" y="60" width="68" height="72" rx="8" fill="none" stroke="#00000028" stroke-width="2"/>
  <path d="M26 84h68" stroke="#F6F1E7" stroke-width="5"/>
  <path d="M50 60c4-14 16-14 20 0" fill="#F6F1E7"/>
  <path d="M54 58c3-9 9-9 12 0" fill="#E6EEF3"/>
  <rect x="38" y="98" width="44" height="8" rx="4" fill="#F6F1E7" opacity=".9"/>
  <rect x="38" y="112" width="26" height="6" rx="3" fill="#FFC72C"/>
  ${gloss(32, 66, 6, 58, 3, 0.2)}`;

export const soap = () => `
  ${shadow()}
  <rect x="26" y="62" width="68" height="60" rx="10" fill="#F0C9DC"/>
  <rect x="26" y="62" width="68" height="60" rx="10" fill="none" stroke="#D9A8C0" stroke-width="2"/>
  <rect x="34" y="72" width="52" height="40" rx="7" fill="#F6F1E7" opacity=".6"/>
  <path d="M60 78c-6 7-10 11-10 16a10 10 0 0 0 20 0c0-5-4-9-10-16z" fill="#E0398C" opacity=".8"/>
  <path d="M34 118h52" stroke="#D9A8C0" stroke-width="3"/>
  ${gloss(32, 68, 6, 46, 3, 0.35)}`;

/* ---------- registro ---------- */
export const ART = {
  bottle, can, water, juiceBox,
  alfajor, chocoBar, gum, candyBag, cookiePack,
  chipsBag, peanutPack,
  notebook, pens, markers,
  gelBottle, tissues, soap,
};

export function renderArt(kind, opts = {}) {
  const fn = ART[kind];
  if (!fn) return '';
  return `<svg viewBox="0 0 120 170" class="art" role="img" aria-hidden="true">${fn(opts)}</svg>`;
}

/* ==========================================================================
   Retratos de las socias — ilustración vectorial (viewBox 0 0 140 140).
   ========================================================================== */

export function avatar({ skin = '#E9BE9B', hair = '#3B2418', top = '#8B4FD6', bg = '#F0E7F8', style = 'long' }) {
  const hairBack = {
    long: `<path d="M32 74c0-26 16-44 38-44s38 18 38 44c0 18-4 34-8 44H40c-4-10-8-26-8-44z" fill="${hair}"/>`,
    wavy: `<path d="M30 78c0-28 18-48 40-48s40 20 40 48c0 16-6 28-10 40l-8-10-8 10-8-10-8 10-8-10-8 10c-4-12-22-24-22-40z" fill="${hair}"/>`,
    bun: `<circle cx="70" cy="24" r="13" fill="${hair}"/><path d="M36 76c0-24 15-42 34-42s34 18 34 42c0 14-3 26-6 34H42c-3-8-6-20-6-34z" fill="${hair}"/>`,
    short: `<path d="M36 72c0-24 15-40 34-40s34 16 34 40c0 10-2 18-4 24H40c-2-6-4-14-4-24z" fill="${hair}"/>`,
  }[style];

  const fringe = {
    long: `<path d="M42 62c4-16 16-24 28-24s24 8 28 24c-6-8-16-12-28-12s-22 4-28 12z" fill="${hair}"/>`,
    wavy: `<path d="M42 64c2-18 14-26 28-26 12 0 22 8 26 22-8-8-18-10-28-8-8 2-18 6-26 12z" fill="${hair}"/>`,
    bun: `<path d="M44 60c2-14 12-22 26-22s24 8 26 22c-8-6-16-9-26-9s-18 3-26 9z" fill="${hair}"/>`,
    short: `<path d="M40 62c6-12 16-18 30-18s24 6 30 18c-8-10-18-14-30-14s-22 4-30 14z" fill="${hair}"/>`,
  }[style];

  return `<svg viewBox="0 0 140 140" class="avatar__art" aria-hidden="true">
    <circle cx="70" cy="70" r="70" fill="${bg}"/>
    <path d="M70 96c22 0 38 14 42 34l2 10H26l2-10c4-20 20-34 42-34z" fill="${top}"/>
    ${hairBack}
    <path d="M52 84h36v20c0 8-8 12-18 12s-18-4-18-12V84z" fill="${skin}"/>
    <path d="M52 90c8 8 28 8 36 0v-8H52v8z" fill="#00000018"/>
    <ellipse cx="70" cy="70" rx="26" ry="30" fill="${skin}"/>
    <ellipse cx="44" cy="72" rx="5" ry="8" fill="${skin}"/>
    <ellipse cx="96" cy="72" rx="5" ry="8" fill="${skin}"/>
    ${fringe}
    <g fill="#2A1C14">
      <ellipse cx="60" cy="70" rx="2.6" ry="3.2"/>
      <ellipse cx="80" cy="70" rx="2.6" ry="3.2"/>
    </g>
    <g stroke="#2A1C14" stroke-width="2.2" stroke-linecap="round" fill="none">
      <path d="M54 62c3-2.5 8-2.5 11 0"/>
      <path d="M75 62c3-2.5 8-2.5 11 0"/>
    </g>
    <path d="M62 82c3 3.5 13 3.5 16 0" stroke="#B4635A" stroke-width="2.6" fill="none" stroke-linecap="round"/>
    <g fill="#E8907F" opacity=".5">
      <ellipse cx="53" cy="76" rx="5" ry="3.4"/>
      <ellipse cx="87" cy="76" rx="5" ry="3.4"/>
    </g>
  </svg>`;
}
