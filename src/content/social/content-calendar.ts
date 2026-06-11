import { quotes } from "./quotes";

export type Platform = "instagram" | "tiktok" | "threads";
export type PostFormat = "quote_card" | "editorial_photo" | "story_pause" | "carousel_cartas" | "tiktok_cover" | "tiktok_tutorial";

export interface ScheduledPost {
  id: string;
  platform: Platform;
  format: PostFormat;
  scheduledAt: string; // ISO date string
  quoteId?: string;
  caption: string;
  hashtags: string[];
  imageRef: string;
  status: "draft" | "scheduled" | "published";
}

const HASHTAGS_BASE = [
  "#suelta", "#soltar", "#kupurimedia", "#bienestar",
  "#mujer", "#orden", "#konmari", "#dejarir", "#ritual",
];
const HASHTAGS_ES = [...HASHTAGS_BASE, "#vidaplena", "#interiores", "#mindfulness"];
const HASHTAGS_JA = [...HASHTAGS_BASE, "#手放す", "#片付け", "#ミニマリスト"];

function isoDate(weeksFromNow: number, dayOfWeek: number, hour = 9): string {
  const d = new Date();
  d.setDate(d.getDate() + weeksFromNow * 7);
  const current = d.getDay();
  const diff = dayOfWeek - current;
  d.setDate(d.getDate() + diff);
  d.setHours(hour, 0, 0, 0);
  return d.toISOString();
}

export const contentCalendar: ScheduledPost[] = [
  // ── WEEK 1 ────────────────────────────────────────────────
  {
    id: "w1-mon-quote",
    platform: "instagram",
    format: "quote_card",
    scheduledAt: isoDate(0, 1, 9),
    quoteId: "q01",
    caption: `${quotes.find(q => q.id === "q01")!.es}\n\nUn ritual japonés para dejar ir y renacer. ✾\n\n${quotes.find(q => q.id === "q01")!.ja}`,
    hashtags: HASHTAGS_ES,
    imageRef: "ig-01-brand-manifesto",
    status: "draft",
  },
  {
    id: "w1-wed-editorial",
    platform: "instagram",
    format: "editorial_photo",
    scheduledAt: isoDate(0, 3, 11),
    caption: "No es solo limpiar. Es soltar.\n\nComienza con lo que tienes más cerca: tu ropa. Cada prenda que ya no usas sigue costándote energía.\n\nEl primer paso del camino te espera. → Link en bio.",
    hashtags: HASHTAGS_ES,
    imageRef: "ig-02-ritual-still",
    status: "draft",
  },
  {
    id: "w1-thu-story",
    platform: "instagram",
    format: "story_pause",
    scheduledAt: isoDate(0, 4, 18),
    caption: "Espera, respira… suelta.",
    hashtags: [],
    imageRef: "tt-02-intro-slate",
    status: "draft",
  },
  {
    id: "w1-sat-carousel",
    platform: "instagram",
    format: "carousel_cartas",
    scheduledAt: isoDate(0, 6, 10),
    caption: "Cartas anónimas de personas en el mismo camino. Sin nombres. Sin juicios. Solo palabras honestas. →→\n\n¿Tienes una carta? La app te espera.",
    hashtags: HASHTAGS_ES,
    imageRef: "ig-01-brand-manifesto",
    status: "draft",
  },

  // ── WEEK 1 — TikTok ──────────────────────────────────────
  {
    id: "w1-tue-tiktok-cover",
    platform: "tiktok",
    format: "tiktok_cover",
    scheduledAt: isoDate(0, 2, 19),
    caption: "¿Cómo empiezo a soltar? El ritual japonés que lo cambia todo. #suelta #konmari #soltar",
    hashtags: ["#suelta", "#konmari", "#soltar", "#kupurimedia"],
    imageRef: "tt-01-cover",
    status: "draft",
  },
  {
    id: "w1-fri-tiktok-tutorial",
    platform: "tiktok",
    format: "tiktok_tutorial",
    scheduledAt: isoDate(0, 5, 20),
    caption: "Tres pasos para soltar. No es lo que crees. #suelta #bienestar #mujer",
    hashtags: ["#suelta", "#bienestar", "#mujer", "#kupurimedialatam"],
    imageRef: "tt-02-intro-slate",
    status: "draft",
  },

  // ── WEEK 2 ────────────────────────────────────────────────
  {
    id: "w2-mon-quote",
    platform: "instagram",
    format: "quote_card",
    scheduledAt: isoDate(1, 1, 9),
    quoteId: "q02",
    caption: `${quotes.find(q => q.id === "q02")!.es}\n\n✾ SUELTA · Kupuri Media`,
    hashtags: HASHTAGS_ES,
    imageRef: "ig-02-ritual-still",
    status: "draft",
  },
  {
    id: "w2-wed-editorial",
    platform: "instagram",
    format: "editorial_photo",
    scheduledAt: isoDate(1, 3, 11),
    caption: "どんな女性になりたいか？\n¿Qué tipo de mujer deseas ser?\n\nSUELTA nació para acompañar a mujeres en la transición más íntima: la de soltar lo que ya no las representa.\n\nKupuri Media · link en bio",
    hashtags: [...HASHTAGS_ES, ...HASHTAGS_JA],
    imageRef: "ig-05-three-women",
    status: "draft",
  },
  {
    id: "w2-thu-story",
    platform: "instagram",
    format: "story_pause",
    scheduledAt: isoDate(1, 4, 18),
    caption: "Escucha… suelta.",
    hashtags: [],
    imageRef: "tt-02-intro-slate",
    status: "draft",
  },
  {
    id: "w2-sat-carousel",
    platform: "instagram",
    format: "carousel_cartas",
    scheduledAt: isoDate(1, 6, 10),
    caption: "Paso del Día → Ropa.\n\nEmpieza con lo que vive más cerca del cuerpo. Cada prenda que ya no usas sigue diciendo algo sobre quien eras. ¿Aún es verdad eso?",
    hashtags: HASHTAGS_ES,
    imageRef: "ig-06-paso-del-dia",
    status: "draft",
  },

  // ── WEEK 3 ────────────────────────────────────────────────
  {
    id: "w3-mon-quote",
    platform: "instagram",
    format: "quote_card",
    scheduledAt: isoDate(2, 1, 9),
    quoteId: "q03",
    caption: `${quotes.find(q => q.id === "q03")!.es}\n\n${quotes.find(q => q.id === "q03")!.en}\n\n✾`,
    hashtags: HASHTAGS_ES,
    imageRef: "ig-03-path-infocard",
    status: "draft",
  },
  {
    id: "w3-wed-editorial",
    platform: "instagram",
    format: "editorial_photo",
    scheduledAt: isoDate(2, 3, 11),
    caption: "La ropa no es solo tela.\n\nEs la identidad que usamos cada mañana. Cuando la ordenamos, ordenamos también algo adentro.\n\nSUELTA · Paso 1: Ropa · App en bio",
    hashtags: HASHTAGS_ES,
    imageRef: "ig-02-ritual-still",
    status: "draft",
  },
  {
    id: "w3-thu-story",
    platform: "instagram",
    format: "story_pause",
    scheduledAt: isoDate(2, 4, 18),
    caption: "La paciencia florece. Suelta.",
    hashtags: [],
    imageRef: "tt-02-intro-slate",
    status: "draft",
  },

  // ── WEEK 4 ────────────────────────────────────────────────
  {
    id: "w4-mon-quote",
    platform: "instagram",
    format: "quote_card",
    scheduledAt: isoDate(3, 1, 9),
    quoteId: "q04",
    caption: `${quotes.find(q => q.id === "q04")!.es}\n\n✾ SUELTA`,
    hashtags: HASHTAGS_ES,
    imageRef: "ig-04-manifesto-dark",
    status: "draft",
  },
  {
    id: "w4-wed-editorial",
    platform: "instagram",
    format: "editorial_photo",
    scheduledAt: isoDate(3, 3, 11),
    caption: "No es solo limpiar. Es soltar.\n片付けるだけではない。手放すこと。\nIt's not just cleaning. It's letting go.\n\n✾ SUELTA · Kupuri Media",
    hashtags: [...HASHTAGS_ES, ...HASHTAGS_JA],
    imageRef: "ig-04-manifesto-dark",
    status: "draft",
  },
  {
    id: "w4-thu-story",
    platform: "instagram",
    format: "story_pause",
    scheduledAt: isoDate(3, 4, 18),
    caption: "Respira y observa. Desapégate.",
    hashtags: [],
    imageRef: "tt-02-intro-slate",
    status: "draft",
  },

  // ── WEEK 5 ────────────────────────────────────────────────
  {
    id: "w5-mon-quote",
    platform: "instagram",
    format: "quote_card",
    scheduledAt: isoDate(4, 1, 9),
    quoteId: "q11",
    caption: `${quotes.find(q => q.id === "q11")!.es}\n\n${quotes.find(q => q.id === "q11")!.ja}\n\n✾ SUELTA`,
    hashtags: HASHTAGS_JA,
    imageRef: "ig-01-brand-manifesto",
    status: "draft",
  },
  {
    id: "w5-wed-editorial",
    platform: "instagram",
    format: "editorial_photo",
    scheduledAt: isoDate(4, 3, 11),
    caption: "Cinco pasos. Un mismo camino.\n\nRopa → Libros → Papeles → Komono → Recuerdos.\n\nCada uno te lleva más adentro. El último, los recuerdos, se deja para cuando ya tienes práctica de soltar.\n\nSUELTA · Kupuri Media · link en bio",
    hashtags: HASHTAGS_ES,
    imageRef: "ig-06-paso-del-dia",
    status: "draft",
  },
];

export function getPostsByPlatform(platform: Platform): ScheduledPost[] {
  return contentCalendar.filter((p) => p.platform === platform);
}

export function getDraftPosts(): ScheduledPost[] {
  return contentCalendar.filter((p) => p.status === "draft");
}
