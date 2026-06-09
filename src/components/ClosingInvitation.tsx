import Link from "next/link";

export function ClosingInvitation() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center max-w-xl mx-auto"
      aria-labelledby="closing-heading"
    >
      <div
        className="text-7xl font-serif text-clay mb-8 animate-rise"
        aria-hidden="true"
      >
        道
      </div>

      <h1
        id="closing-heading"
        className="font-serif text-3xl text-charcoal-ink mb-4 animate-rise"
      >
        El corazón está ordenado.
      </h1>

      <p className="text-clay-dark text-base leading-relaxed mb-12 max-w-sm animate-rise">
        Volver cuando quieras.
      </p>

      <Link
        href="/"
        className="text-sm text-clay hover:text-clay-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
