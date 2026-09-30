// Recursos reales de NEWBODY proporcionados por el cliente.
// Centralizados para reemplazar fácilmente desde Base44.

const BASE = "https://media.base44.com/images/public/user_69327d8b7c62b31b68fc2d1e";
const VBASE = "https://media.base44.com/videos/public/user_69327d8b7c62b31b68fc2d1e";

// Números de WhatsApp por sede (sin prefijo, formato Colombia)
export const WHATSAPP_NUMBERS = {
  MEDELLÍN: "3018968125",
  BOGOTÁ: "3018968104",
  CALI: "3018668591",
  BARRANQUILLA: "3018663786",
};

export function getWhatsAppLink(city, message) {
  const number = WHATSAPP_NUMBERS[city] || WHATSAPP_NUMBERS["MEDELLÍN"];
  const text = encodeURIComponent(
    message || "Hola NEWBODY, acabo de enviar mi solicitud y quiero continuar el proceso."
  );
  return `https://wa.me/57${number}?text=${text}`;
}

export const NEWBODY = {
  logo: `https://media.base44.com/images/public/6a888192f1a611293568fc37/3453d8e4a_CopyofANTESYDESPUESNEWBODY2.png`,
  cities: ["BOGOTÁ", "MEDELLÍN", "CALI", "BARRANQUILLA"],
  compliance: "Tecnología avalada por la FDA y el INVIMA",
};

// Antes / Después — Mujeres (primeras 5 imágenes)
export const RESULTS_WOMEN = [
  { img: `${BASE}/47c49deb6_CapturadePantalla2026-08-21alas114454am.png`, sessions: 24, zone: "Espalda y cintura" },
  { img: `${BASE}/604321708_CapturadePantalla2026-08-21alas114532am.png`, sessions: 12, zone: "Espalda baja" },
  { img: `${BASE}/a3e44f1d1_CapturadePantalla2026-08-21alas114704am.png`, sessions: 24, zone: "Glúteos y cadera" },
  { img: `${BASE}/4a0b8d785_CapturadePantalla2026-08-21alas114909am.png`, sessions: 24, zone: "Glúteos (perfil)" },
  { img: `${BASE}/63e453b81_CapturadePantalla2026-08-21alas114941am.png`, sessions: 12, zone: "Glúteos (perfil)" },
];

// Antes / Después — Hombres (5 imágenes siguientes)
export const RESULTS_MEN = [
  { img: `${BASE}/2eb0aeab1_CapturadePantalla2026-08-21alas115157am.png`, sessions: 12, zone: "Abdomen" },
  { img: `${BASE}/50e1739d6_CapturadePantalla2026-08-21alas115244am.png`, sessions: 12, zone: "Abdomen (perfil)" },
  { img: `${BASE}/db9c403fb_CapturadePantalla2026-08-21alas115348am.png`, sessions: 36, zone: "Abdomen" },
  { img: `${BASE}/e358312bc_CapturadePantalla2026-08-21alas115420am.png`, sessions: 24, zone: "Abdomen" },
  { img: `${BASE}/b07ee97ab_CapturadePantalla2026-08-21alas115557am.png`, sessions: 24, zone: "Abdomen (progresión)" },
];

// Testimonios en video
export const VIDEO_TESTIMONIALS = [
  { src: "https://media.base44.com/videos/public/6a888192f1a611293568fc37/9fee51acd_JUANCAMILOCOMPRESS.mp4", quote: "Bajé 14 kilos en dos meses" },
  { src: "https://media.base44.com/videos/public/6a888192f1a611293568fc37/0d90218c7_CV_Tiempo_de_consentir.mp4", quote: "La barriguita después del embarazo, ya no está" },
  { src: "https://media.base44.com/videos/public/6a888192f1a611293568fc37/a3c800fa0_webpagewill.mp4", quote: "Lo que más me motiva son los resultados, perdí 8 kilos en un mes" },
  { src: "https://media.base44.com/videos/public/6a888192f1a611293568fc37/59af21ae5_CDLINDA7ANOS_COMPRESS.mp4", quote: "7 años con NEWBODY" },
];

// Tecnología diseñada para diferentes objetivos — galería de equipos.
// Cada objeto = una tarjeta. El campo `img` es la fotografía real del equipo
// (utilizar exclusivamente la correspondencia indicada por el cliente).
const TECH_IMG = "https://media.base44.com/images/public/6a888192f1a611293568fc37";
export const TECHNOLOGY = [
  {
    objective: "Quemar grasa localizada",
    equipo: "VANQUISH",
    img: `${TECH_IMG}/cac82bfc2_Vanquishpng.png`,
    video: "https://media.base44.com/videos/public/6a888192f1a611293568fc37/e6761a59d_VanquishLP.mp4",
    que: "Trabaja zonas con grasa localizada favoreciendo la definición corporal, sin invasión.",
    como: "Radiofrecuencia selectiva que calienta el tejido adiposo de forma controlada.",
    ideal: ["Grasa localizada", "Remodelación corporal"],
  },
  {
    objective: "Definición muscular",
    equipo: "HYPERSCULPT",
    img: `${TECH_IMG}/e396ece61_HyperSculpt.png`,
    que: "Esculpe y redefine el contorno corporal de manera personalizada.",
    como: "Electroestimulación avanzada que trabaja la musculatura y el tono.",
    ideal: ["Remodelación corporal", "Tonificación"],
  },
  {
    objective: "Tensado de piel",
    equipo: "EXILIS",
    img: `${TECH_IMG}/3e93233cd_ExilisPNG.png`,
    que: "Firma y tensa la piel en zonas con flacidez.",
    como: "Radiofrecuencia monopolar que estimula el colágeno y tensa los tejidos.",
    ideal: ["Flacidez", "Tonificación"],
  },
  {
    objective: "Reducción de celulitis",
    equipo: "X-WAVE",
    img: `${TECH_IMG}/efce96711_HyperSculpt1.png`,
    que: "Mejora la apariencia de la piel con celulitis y la textura corporal.",
    como: "Ondas acústicas que estimulan la circulación y la regeneración del tejido.",
    ideal: ["Celulitis", "Tonificación"],
  },
];