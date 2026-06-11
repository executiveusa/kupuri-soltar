import Link from "next/link";

export function WelcomePause() {
  return (
    <div className="atmo-screen flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
      <span className="ornament text-xl mb-6 animate-glow">✾</span>

      <h1 className="font-serif text-display-sm text-cream leading-snug whitespace-pre-line mb-6 animate-rise max-w-sm">
        {"Antes de soltar,\nvamos a tomar\nun respiro…"}
      </h1>

      <p className="font-sans text-cream-dim text-sm leading-relaxed mb-12 max-w-xs animate-rise">
        Este camino es tuyo. No hay prisa. Puedes avanzar a tu ritmo, pausar cuando necesites, y volver cuando quieras.
      </p>

      <Link href="/journey" className="pill-btn text-lg animate-rise">
        Estoy lista
      </Link>
    </div>
  );
}
