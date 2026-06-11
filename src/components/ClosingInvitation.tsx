import Link from "next/link";

export function ClosingInvitation() {
  return (
    <div className="atmo-screen flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
      <span className="ornament text-2xl mb-8 animate-glow">✾</span>

      <div
        className="font-serif text-[6rem] text-cream/25 mb-6 animate-rise leading-none"
        aria-hidden="true"
        style={{ fontWeight: 300 }}
      >
        道
      </div>

      <h1 className="font-serif text-display-sm text-cream mb-4 animate-rise">
        El corazón está ordenado.
      </h1>

      <p className="font-serif italic text-cream-dim text-xl mb-14 animate-rise">
        Volver cuando quieras.
      </p>

      <Link
        href="/"
        className="font-sans text-xs text-cream-dim/60 hover:text-cream/80 tracking-widest uppercase underline-offset-4 hover:underline transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
