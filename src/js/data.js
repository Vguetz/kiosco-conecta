/* ==========================================================================
   Datos del kiosco. Todo el contenido editable vive acá.
   ========================================================================== */

export const NEGOCIO = {
  nombre: "Kiosco Conecta",
  /* Número en formato internacional, sin + ni espacios (Uruguay = 598) */
  whatsapp: "59891234567",
  whatsappVisible: "091 234 567",
  instagram: "kioscoconecta",
  direccion: "Joaquín Secco Illa y 8 de Octubre, Montevideo",
  envio: 60,
  envioGratisDesde: 300,
};

export const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "bebidas", nombre: "Bebidas" },
  { id: "golosinas", nombre: "Golosinas" },
  { id: "snacks", nombre: "Snacks" },
  { id: "papeleria", nombre: "Papelería" },
  { id: "cuidado", nombre: "Cuidado personal" },
];

export const PRODUCTOS = [
  /* ---------- BEBIDAS ---------- */
  {
    id: "cola-15",
    nombre: "Refresco cola 1,5 L",
    cat: "bebidas",
    precio: 135,
    tag: "El clásico",
    art: "bottle",
    opts: { liquid: "#4A2214", cap: "#E02B2B", label: "#E02B2B" },
  },
  {
    id: "lata-cola",
    nombre: "Lata de refresco 354 ml",
    cat: "bebidas",
    precio: 70,
    art: "can",
    opts: { body: "#D32222", band: "#FFFFFF", accent: "#D32222" },
  },
  {
    id: "lata-lima",
    nombre: "Lata lima-limón 354 ml",
    cat: "bebidas",
    precio: 70,
    art: "can",
    opts: { body: "#2E8B57", band: "#F6F1E7", accent: "#2E8B57" },
  },
  {
    id: "agua",
    nombre: "Agua mineral 600 ml",
    cat: "bebidas",
    precio: 55,
    tag: "Fría",
    art: "water",
    opts: {},
  },
  {
    id: "jugo",
    nombre: "Jugo en caja 200 ml",
    cat: "bebidas",
    precio: 45,
    art: "juiceBox",
    opts: { c1: "#F07A1E", c2: "#FFC72C" },
  },
  {
    id: "energizante",
    nombre: "Energizante 250 ml",
    cat: "bebidas",
    precio: 150,
    art: "can",
    opts: { body: "#1B1B33", band: "#FFC72C", accent: "#1B1B33" },
  },

  /* ---------- GOLOSINAS ---------- */
  {
    id: "alfajor",
    nombre: "Alfajor de chocolate",
    cat: "golosinas",
    precio: 75,
    tag: "Más pedido",
    art: "alfajor",
    opts: {},
  },
  {
    id: "chocolate",
    nombre: "Barra de chocolate 90 g",
    cat: "golosinas",
    precio: 130,
    art: "chocoBar",
    opts: { c1: "#5A2E15", c2: "#8B4FD6" },
  },
  {
    id: "chicles",
    nombre: "Chicles sin azúcar",
    cat: "golosinas",
    precio: 55,
    art: "gum",
    opts: { c1: "#1FA9A0" },
  },
  {
    id: "caramelos",
    nombre: "Caramelos surtidos 100 g",
    cat: "golosinas",
    precio: 80,
    art: "candyBag",
    opts: { c1: "#E0398C", c2: "#FFC72C" },
  },
  {
    id: "galletitas",
    nombre: "Galletitas dulces",
    cat: "golosinas",
    precio: 90,
    art: "cookiePack",
    opts: { c1: "#1B3E8B", c2: "#FFC72C" },
  },
  {
    id: "obleas",
    nombre: "Obleas rellenas",
    cat: "golosinas",
    precio: 65,
    art: "chocoBar",
    opts: { c1: "#C98A46", c2: "#E02B2B" },
  },

  /* ---------- SNACKS ---------- */
  {
    id: "papas",
    nombre: "Papas fritas 90 g",
    cat: "snacks",
    precio: 145,
    tag: "Destacado",
    art: "chipsBag",
    opts: { c1: "#E0A800", c2: "#E02B2B", chip: "#F6C453" },
  },
  {
    id: "nachos",
    nombre: "Nachos de maíz 85 g",
    cat: "snacks",
    precio: 150,
    art: "chipsBag",
    opts: { c1: "#D6522A", c2: "#1B3E8B", chip: "#F0B040" },
  },
  {
    id: "palitos",
    nombre: "Palitos salados 100 g",
    cat: "snacks",
    precio: 85,
    art: "chipsBag",
    opts: { c1: "#F2A33C", c2: "#2E7D5B", chip: "#E9D9A8" },
  },
  {
    id: "mani",
    nombre: "Maní salado 100 g",
    cat: "snacks",
    precio: 75,
    art: "peanutPack",
    opts: { c1: "#8B4FD6" },
  },

  /* ---------- PAPELERÍA ---------- */
  {
    id: "cuaderno",
    nombre: "Cuaderno A4 80 hojas",
    cat: "papeleria",
    precio: 190,
    tag: "Para clase",
    art: "notebook",
    opts: { c1: "#8B4FD6" },
  },
  {
    id: "biromes",
    nombre: "Pack de biromes x4",
    cat: "papeleria",
    precio: 110,
    art: "pens",
    opts: {},
  },
  {
    id: "marcadores",
    nombre: "Marcadores de color x5",
    cat: "papeleria",
    precio: 220,
    art: "markers",
    opts: {},
  },
  {
    id: "repuesto",
    nombre: "Repuesto de hojas x48",
    cat: "papeleria",
    precio: 95,
    art: "notebook",
    opts: { c1: "#FFC72C" },
  },

  /* ---------- CUIDADO PERSONAL ---------- */
  {
    id: "gel",
    nombre: "Alcohol en gel 250 ml",
    cat: "cuidado",
    precio: 120,
    art: "gelBottle",
    opts: {},
  },
  {
    id: "panuelos",
    nombre: "Pañuelos descartables",
    cat: "cuidado",
    precio: 50,
    art: "tissues",
    opts: {},
  },
  {
    id: "jabon",
    nombre: "Jabón de tocador",
    cat: "cuidado",
    precio: 70,
    art: "soap",
    opts: {},
  },
];

export const SOCIAS = [
  {
    nombre: "Candela",
    rol: "Compras y proveedores",
    frase:
      "Elijo cada producto pensando en lo que el barrio realmente necesita.",
    art: {
      skin: "#E9BE9B",
      hair: "#3B2418",
      top: "#8B4FD6",
      bg: "#EFE3FA",
      style: "long",
    },
  },
  {
    nombre: "Nicole",
    rol: "Redes y comunicación",
    frase: "Contamos lo que hacemos para que cada compra tenga sentido.",
    art: {
      skin: "#C98A63",
      hair: "#1F1310",
      top: "#FFC72C",
      bg: "#FBF0D8",
      style: "wavy",
    },
  },
  {
    nombre: "Avril",
    rol: "Envíos y logística",
    frase: "Si está a menos de quince cuadras, te llega calentito.",
    art: {
      skin: "#F0D0B4",
      hair: "#7B4A22",
      top: "#2E7D5B",
      bg: "#E2F1E8",
      style: "bun",
    },
  },
  {
    nombre: "Sintia",
    rol: "Causa solidaria",
    frase:
      "Cada mes armamos los desayunos que se reparten en el Instituto Superior de Comercio La Blanqueada.",
    art: {
      skin: "#8D5A3C",
      hair: "#160F0C",
      top: "#E0398C",
      bg: "#FBE3EF",
      style: "short",
    },
  },
];
