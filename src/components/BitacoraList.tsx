import Link from "next/link";
import { essays } from "@/content/soltar/essays";

export function BitacoraList() {
  return (
    <div className="atmo-screen px-6 py-12 max-w-2xl mx-auto min-h-screen">
      <header className="mb-10">
        <span className="ornament mb-3">✾</span>
        <h1 className="font-serif text-display-sm text-cream mb-2">Bitácora</h1>
        <p className="text-sm text-cream-dim/60 font-sans">
          Lecturas para acompañar el camino de soltar.
        </p>
      </header>

      <ul className="space-y-8" role="list">
        {essays.map((essay) => (
          <li key={essay.id}>
            <article className="border-b border-cream/10 pb-8" aria-labelledby={`essay-${essay.id}`}>
              <p className="text-xs text-cream-dim/40 font-sans uppercase tracking-widest mb-2">
                {essay.category} · {essay.readingMinutes} min
              </p>
              <h2 id={`essay-${essay.id}`} className="font-serif text-2xl text-cream mb-3">
                {essay.title}
              </h2>
              <p className="text-sm text-cream-dim/70 font-sans leading-relaxed mb-4">
                {essay.excerpt}
              </p>
              <Link
                href={`/bitacora/${essay.slug}`}
                className="font-serif italic text-sakura hover:text-cream text-sm underline-offset-4 hover:underline transition-colors"
                aria-label={`Leer: ${essay.title}`}
              >
                Leer más →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
