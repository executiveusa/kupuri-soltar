import Image from "next/image";
import { QuietButton } from "./QuietButton";

interface WelcomePauseProps {
  imageSrc?: string;
}

export function WelcomePause({ imageSrc }: WelcomePauseProps) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-xl mx-auto text-center"
      aria-labelledby="welcome-heading"
    >
      {imageSrc && (
        <div className="relative w-full max-w-xs aspect-[4/3] rounded mb-10 overflow-hidden bg-beige">
          <Image
            src={imageSrc}
            alt="Un espacio tranquilo para comenzar"
            fill
            className="object-cover"
          />
        </div>
      )}

      {!imageSrc && (
        <div
          className="w-24 h-24 rounded-full bg-linen border border-clay/20 flex items-center justify-center mb-10"
          aria-hidden="true"
        >
          <span className="kanji text-3xl">息</span>
        </div>
      )}

      <h1
        id="welcome-heading"
        className="font-serif text-3xl md:text-4xl text-charcoal-ink leading-snug whitespace-pre-line mb-6 animate-rise"
      >
        {"Antes de soltar,\nvamos a tomar un respiro."}
      </h1>

      <p className="text-clay-dark text-base leading-relaxed mb-10 max-w-sm animate-rise">
        Este camino es tuyo. No hay prisa. Puedes avanzar a tu ritmo, pausar
        cuando necesites, y volver cuando quieras. Nadie está mirando. No hay
        tiempo límite.
      </p>

      <QuietButton href="/journey" variant="primary" className="animate-rise">
        Estoy lista
      </QuietButton>
    </section>
  );
}
