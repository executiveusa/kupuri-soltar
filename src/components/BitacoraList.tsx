import Link from "next/link";
import { essays } from "@/content/soltar/essays";

export function BitacoraList() {
  return (
    <section
      className="max-w-2xl mx-auto px-6 py-12"
      aria-labelledby="bitacora-heading"
    >
      <header className="mb-10">
        <h1
          id="bitacora-heading"
          className="font-serif text-3xl text-charcoal-ink mb-2"
        >
          Bitácora
        </h1>
        <p className="text-clay-dark text-sm">
          Lecturas para acompañar el camino de soltar.
        </p>
      </header>

      <ul className="space-y-8" role="list">
        {essays.map((essay) => (
          <li key={essay.id}>
            <article
              className="border-b border-beige pb-8"
              aria-labelledby={`essay-${essay.id}-title`}
            >
              <p className="text-xs text-mountain-mist uppercase tracking-widest mb-2">
                {essay.category} · {essay.readingMinutes} min de lectura
              </p>
              <h2
                id={`essay-${essay.id}-title`}
                className="font-serif text-xl text-charcoal-ink mb-3"
              >
                {essay.title}
              </h2>
              <p className="text-sm text-clay-dark leading-relaxed mb-4">
                {essay.excerpt}
              </p>
              <Link
                href={`/bitacora/${essay.slug}`}
                className="text-sm text-clay hover:text-clay-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={`Leer más sobre: ${essay.title}`}
              >
                Leer más →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
