export interface Essay {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readingMinutes: number;
  category: string;
  publishedAt: string;
}

export const essays: Essay[] = [
  {
    id: "01",
    slug: "soltar-no-es-olvidar",
    title: "Soltar no es olvidar",
    excerpt:
      "La diferencia entre soltar algo y borrarlo. Soltar es un acto de amor, no de abandono.",
    readingMinutes: 4,
    category: "Reflexión",
    publishedAt: "2026-01-15",
  },
  {
    id: "02",
    slug: "el-peso-de-lo-que-guardamos",
    title: "El peso de lo que guardamos",
    excerpt:
      "Cada objeto que conservamos sin amor sigue costándonos energía. Una conversación sobre por qué acumulamos.",
    readingMinutes: 6,
    category: "Práctica",
    publishedAt: "2026-02-03",
  },
  {
    id: "03",
    slug: "la-ropa-y-la-identidad",
    title: "La ropa y la identidad",
    excerpt:
      "Por qué empezamos con la ropa: es la capa más próxima a quien creemos ser.",
    readingMinutes: 5,
    category: "Los cinco pasos",
    publishedAt: "2026-02-20",
  },
  {
    id: "04",
    slug: "recuerdos-sin-objeto",
    title: "Recuerdos sin objeto",
    excerpt:
      "¿Es posible honrar un recuerdo sin conservar el objeto que lo representa? Sí. Te mostramos cómo.",
    readingMinutes: 7,
    category: "Los cinco pasos",
    publishedAt: "2026-03-10",
  },
  {
    id: "05",
    slug: "la-quietud-como-punto-de-partida",
    title: "La quietud como punto de partida",
    excerpt:
      "Antes de cualquier acción de soltar, hay un momento de pausa. Esa quietud no es inacción — es preparación.",
    readingMinutes: 3,
    category: "Reflexión",
    publishedAt: "2026-04-01",
  },
];
