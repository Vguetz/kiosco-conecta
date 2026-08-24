/* ==========================================================================
   Sprite SVG — logo, iconografía e ilustraciones de Kiosco Conecta.
   Todo dibujado a mano en vectores: nada depende de imágenes externas.
   ========================================================================== */

const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
<defs>

  <!-- ═══════════ LOGO ═══════════ -->
  <g id="logo-mark">
    <circle cx="32" cy="32" r="30" fill="#0B0B0F"/>
    <path d="M32 3a29 29 0 0 1 0 58" fill="none" stroke="#FFC72C" stroke-width="4"/>
    <path d="M32 61a29 29 0 0 1 0-58" fill="none" stroke="#8B4FD6" stroke-width="4"/>
    <circle cx="32" cy="32" r="23" fill="none" stroke="#FFC72C" stroke-width="1.4" opacity=".45"/>
    <g transform="translate(32 30) scale(1.02)">
      <path d="M-13 -8h4.2l3.1 12.4h13.6l3-8.4h-13" fill="none" stroke="#FFC72C" stroke-width="2.6"
            stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="-4.2" cy="8.6" r="2.1" fill="#FFC72C"/>
      <circle cx="6.4" cy="8.6" r="2.1" fill="#FFC72C"/>
      <path d="M9.6 -10.4c1.9-2.2 5.4-1.3 5.4 1.6 0 2.6-3.3 4.6-5.4 6.2-2.1-1.6-5.4-3.6-5.4-6.2 0-2.9 3.5-3.8 5.4-1.6z"
            fill="#8B4FD6"/>
    </g>
    <path d="M12 46q20 7 40 0" fill="none" stroke="#8B4FD6" stroke-width="2.4" stroke-linecap="round" opacity=".8"/>
  </g>

  <!-- ═══════════ ICONOS ═══════════ -->
  <g id="i-wa">
    <path fill="currentColor" d="M12.04 2.5c-5.2 0-9.44 4.2-9.44 9.38 0 1.65.44 3.26 1.27 4.68L2.5 21.5l5.1-1.33a9.5 9.5 0 0 0 4.44 1.11h.01c5.2 0 9.44-4.2 9.44-9.38 0-2.5-.98-4.86-2.76-6.63a9.42 9.42 0 0 0-6.69-2.77zm0 17.2h-.01a7.9 7.9 0 0 1-4-1.09l-.29-.17-2.97.78.79-2.88-.19-.3a7.74 7.74 0 0 1-1.2-4.16c0-4.3 3.53-7.8 7.87-7.8 2.1 0 4.08.82 5.56 2.29a7.75 7.75 0 0 1 2.3 5.52c0 4.3-3.53 7.81-7.86 7.81zm4.32-5.85c-.24-.12-1.4-.68-1.61-.76-.22-.08-.38-.12-.54.12-.16.23-.62.75-.76.91-.14.16-.28.18-.52.06-.24-.12-1-.36-1.9-1.16-.7-.62-1.18-1.39-1.32-1.62-.14-.24-.02-.37.1-.49.11-.1.24-.27.36-.41.12-.14.16-.23.24-.39.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.19-.46-.39-.4-.54-.4l-.46-.01c-.16 0-.42.06-.63.29-.22.23-.83.8-.83 1.96s.85 2.27.97 2.43c.12.16 1.67 2.53 4.05 3.55.57.24 1.01.39 1.35.5.57.18 1.09.15 1.5.09.46-.07 1.4-.57 1.6-1.11.2-.55.2-1.02.14-1.11-.06-.1-.22-.16-.46-.28z"/>
  </g>

  <g id="i-heart">
    <path fill="currentColor" d="M12 20.6s-7.6-4.7-9.2-9.1C1.6 8 3.7 4.6 7 4.6c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.3 0 5.4 3.4 4.2 6.9-1.6 4.4-9.2 9.1-9.2 9.1z"/>
  </g>

  <g id="i-hands">
    <path d="M12 4.6c1.5-1.9 4.7-1.2 4.7 1.4 0 2.2-2.9 4-4.7 5.4-1.8-1.4-4.7-3.2-4.7-5.4 0-2.6 3.2-3.3 4.7-1.4z"
          fill="currentColor"/>
    <path d="M2.6 12.4c1.6-.6 3 .1 4 1.4l2.2 2.8M21.4 12.4c-1.6-.6-3 .1-4 1.4l-2.2 2.8"
          fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M2.6 12.4v3.3c0 2.4 1.9 4.5 4.3 4.7l5.1.4 5.1-.4c2.4-.2 4.3-2.3 4.3-4.7v-3.3"
          fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <g id="i-smile">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <circle cx="9" cy="10" r="1.25" fill="currentColor"/>
    <circle cx="15" cy="10" r="1.25" fill="currentColor"/>
    <path d="M8 14.2c1 1.5 2.4 2.2 4 2.2s3-.7 4-2.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
  </g>

  <g id="i-target">
    <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="12" cy="12" r="4.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    <path d="M12 3.5V1M12 23v-2.5M3.5 12H1M23 12h-2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </g>

  <g id="i-cart">
    <path d="M2.6 3.5h2.7l2.4 11h9.2l2.1-7.6H7.2" fill="none" stroke="currentColor" stroke-width="1.9"
          stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="9.2" cy="19" r="1.7" fill="currentColor"/>
    <circle cx="16.6" cy="19" r="1.7" fill="currentColor"/>
  </g>

  <g id="i-close">
    <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  </g>

  <g id="i-plus">
    <path d="M12 5.4v13.2M5.4 12h13.2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </g>

  <g id="i-minus">
    <path d="M5.4 12h13.2" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </g>

  <g id="i-check">
    <path d="M4.5 12.6 9.6 17.5 19.5 6.8" fill="none" stroke="currentColor" stroke-width="2.4"
          stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <g id="i-pin">
    <path fill="currentColor" d="M12 2.2c-3.9 0-7 3.1-7 6.9 0 5.1 6.3 12 6.6 12.3.2.2.6.2.8 0 .3-.3 6.6-7.2 6.6-12.3 0-3.8-3.1-6.9-7-6.9zm0 9.6a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z"/>
  </g>

  <g id="i-clock">
    <circle cx="12" cy="12" r="8.8" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <path d="M12 6.6V12l3.6 2.2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <g id="i-ig">
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <circle cx="17.1" cy="6.9" r="1.25" fill="currentColor"/>
  </g>

  <g id="i-cup">
    <path d="M4.5 7.5h12v6.2a5 5 0 0 1-5 5H9.5a5 5 0 0 1-5-5V7.5z" fill="none" stroke="currentColor"
          stroke-width="1.9" stroke-linejoin="round"/>
    <path d="M16.5 9.2h1.6a2.4 2.4 0 0 1 0 4.8h-1.6" fill="none" stroke="currentColor" stroke-width="1.9"/>
    <path d="M8 2.6c-.9 1.1-.9 2 0 3.1M12 2.2c-.9 1.1-.9 2 0 3.1" fill="none" stroke="currentColor"
          stroke-width="1.7" stroke-linecap="round" opacity=".75"/>
    <path d="M3 21h15" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
  </g>

  <g id="i-pencil">
    <path d="M15.6 3.6 20.4 8.4 8.8 20H4v-4.8L15.6 3.6z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>
    <path d="M13.6 5.6 18.4 10.4" fill="none" stroke="currentColor" stroke-width="1.9"/>
  </g>

  <g id="i-spark">
    <path fill="currentColor" d="M30 4c2.4 10.6 8 16.2 18.6 18.6C38 25 32.4 30.6 30 41.2 27.6 30.6 22 25 11.4 22.6 22 20.2 27.6 14.6 30 4z"/>
  </g>

  <g id="i-moto">
    <circle cx="26" cy="62" r="14" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="108" cy="62" r="14" fill="none" stroke="currentColor" stroke-width="5"/>
    <path d="M26 62 52 62l14-22h20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M66 40h30l12 22" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="60" y="14" width="30" height="24" rx="4" fill="currentColor"/>
    <path d="M86 24h12l6 10" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    <circle cx="47" cy="20" r="9" fill="currentColor"/>
    <path d="M38 40c2-8 8-12 14-12" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
  </g>

  <!-- ═══════════ BOLSA (HERO) ═══════════ -->
  <g id="bag-art">
    <ellipse cx="180" cy="404" rx="128" ry="17" fill="#000" opacity=".55"/>
    <path d="M120 118c0-34 12-58 60-58s60 24 60 58" fill="none" stroke="#1C1C22" stroke-width="13" stroke-linecap="round"/>
    <path d="M120 118c0-34 12-58 60-58s60 24 60 58" fill="none" stroke="#2E2E38" stroke-width="5" stroke-linecap="round"/>
    <path d="M56 132h248l-16 246a22 22 0 0 1-22 20H94a22 22 0 0 1-22-20L56 132z" fill="#141419"/>
    <path d="M56 132h248l-16 246a22 22 0 0 1-22 20H94a22 22 0 0 1-22-20L56 132z" fill="none" stroke="#2B2B34" stroke-width="3"/>
    <path d="M56 132h248l-4 60H60l-4-60z" fill="#1B1B21"/>
    <g transform="translate(180 268) scale(1.85)">
      <use href="#logo-mark"/>
    </g>
    <path d="M74 178c30 12 60 18 106 18s76-6 106-18" fill="none" stroke="#000" stroke-width="10" opacity=".25"/>
  </g>

  <!-- ═══════════ CAJA DE DONACIONES ═══════════ -->
  <g id="box-art">
    <ellipse cx="170" cy="238" rx="120" ry="14" fill="#000" opacity=".45"/>
    <!-- contenido -->
    <g>
      <rect x="72" y="58" width="46" height="86" rx="5" fill="#2E7D5B"/>
      <rect x="72" y="58" width="46" height="86" rx="5" fill="none" stroke="#1B5A40" stroke-width="2"/>
      <rect x="78" y="76" width="34" height="26" rx="3" fill="#F6F1E7"/>
      <rect x="126" y="42" width="40" height="102" rx="6" fill="#F6F1E7"/>
      <rect x="126" y="42" width="40" height="102" rx="6" fill="none" stroke="#D6CFC0" stroke-width="2"/>
      <rect x="126" y="70" width="40" height="26" fill="#8B4FD6"/>
      <path d="M176 96c14-16 34-20 52-12l-6 60h-52l6-48z" fill="#E2B77A"/>
      <path d="M176 96c14-16 34-20 52-12" fill="none" stroke="#C69456" stroke-width="3"/>
      <g transform="translate(238 52) rotate(9)">
        <rect x="0" y="0" width="9" height="92" rx="3" fill="#FFC72C"/>
        <path d="M0 0h9l-4.5-14z" fill="#F0A500"/>
      </g>
      <g transform="translate(252 56) rotate(-6)">
        <rect x="0" y="0" width="9" height="92" rx="3" fill="#E45B5B"/>
        <path d="M0 0h9l-4.5-14z" fill="#C93F3F"/>
      </g>
      <g transform="translate(266 60) rotate(4)">
        <rect x="0" y="0" width="9" height="88" rx="3" fill="#4FA3E0"/>
        <path d="M0 0h9l-4.5-14z" fill="#2E7FBB"/>
      </g>
    </g>
    <!-- caja -->
    <path d="M42 128h256l-14 104H56L42 128z" fill="#C08A54"/>
    <path d="M42 128h256l-14 104H56L42 128z" fill="none" stroke="#96652F" stroke-width="3"/>
    <path d="M42 128 22 96h296l-20 32H42z" fill="#D9A063"/>
    <path d="M22 96h296l-20 32H42L22 96z" fill="none" stroke="#96652F" stroke-width="3"/>
    <path d="M170 128v104" stroke="#96652F" stroke-width="3" opacity=".6"/>
    <path d="M62 150c34 10 180 10 216 0" fill="none" stroke="#96652F" stroke-width="3" opacity=".35"/>
  </g>

  <!-- ═══════════ MAPA ═══════════ -->
  <g id="map-art">
    <rect width="520" height="300" fill="#EDE7DA"/>
    <g fill="#E2DACB">
      <rect x="20" y="18" width="150" height="86" rx="4"/>
      <rect x="196" y="18" width="120" height="86" rx="4"/>
      <rect x="342" y="18" width="160" height="120" rx="4"/>
      <rect x="20" y="130" width="150" height="70" rx="4"/>
      <rect x="196" y="130" width="120" height="70" rx="4"/>
      <rect x="20" y="226" width="150" height="60" rx="4"/>
      <rect x="196" y="226" width="180" height="60" rx="4"/>
      <rect x="402" y="164" width="100" height="122" rx="4"/>
    </g>
    <g stroke="#F6F1E7" stroke-width="12" stroke-linecap="round">
      <path d="M182 0v300M328 0v300M0 116h520M0 212h520"/>
    </g>
    <path d="M0 264 520 148" stroke="#FFC72C" stroke-width="16" opacity=".85"/>
    <path d="M0 264 520 148" stroke="#F6F1E7" stroke-width="3" stroke-dasharray="14 12"/>
    <g fill="#C9C0AE" font-family="Archivo, sans-serif" font-size="11" font-weight="700" letter-spacing="1">
      <text x="196" y="112" transform="rotate(-12 196 112)">8 DE OCTUBRE</text>
      <text x="196" y="26">J. SECCO ILLA</text>
    </g>
    <g fill="#B9D3A8">
      <circle cx="440" cy="60" r="26"/><circle cx="464" cy="76" r="18"/>
    </g>
  </g>

</defs>
</svg>`;

export function mountSprite() {
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  host.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
  host.innerHTML = SPRITE;
  document.body.prepend(host);
}
