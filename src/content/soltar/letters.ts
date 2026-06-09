export interface Letter {
  id: string;
  text: string;
  step: string | null;
  publishedAt: string;
}

export const letters: Letter[] = [
  {
    id: "01",
    text: "Guardé el vestido de mi boda durante doce años en una caja que nunca abrí. Cuando por fin lo solté, no lloré. Me sentí más liviana que en años.",
    step: "ropa",
    publishedAt: "2026-01-20",
  },
  {
    id: "02",
    text: "Tenía cien libros que nunca iba a leer, cada uno una promesa que me hice a mí misma. Donarlos fue como perdonarme por no ser esa persona.",
    step: "libros",
    publishedAt: "2026-02-08",
  },
  {
    id: "03",
    text: "Los papeles de mi divorcio los guardé cinco años sin abrirlos. El día que los trituré, abrí una ventana. No sé por qué, pero lo hice.",
    step: "papeles",
    publishedAt: "2026-02-28",
  },
  {
    id: "04",
    text: "Hay objetos que no son de nadie pero de todos en casa. Nadie los usa, nadie los quiere, nadie los tira. Empecé yo.",
    step: "komono",
    publishedAt: "2026-03-15",
  },
  {
    id: "05",
    text: "Mi mamá me dejó una caja de fotos. Tardé tres años en abrirla. Cuando lo hice, elegí diez fotos y solté el resto. Me quedé con lo mejor de ella.",
    step: "recuerdos",
    publishedAt: "2026-04-05",
  },
  {
    id: "06",
    text: "No esperaba que este proceso me hiciera llorar. Pero no fue tristeza — fue alivio. Como cuando termina una lluvia larga.",
    step: null,
    publishedAt: "2026-05-01",
  },
];
