import Link from "next/link";
import type { SoltarStep } from "@/content/soltar/steps";
import { getNextStep } from "@/content/soltar/steps";

interface CompletionCardProps {
  step: SoltarStep;
  locale?: "es" | "en" | "ja";
}

export function CompletionCard({ step, locale = "es" }: CompletionCardProps) {
  const message = step.completionMessage[locale];
  const nextStep = getNextStep(step.id);

  return (
    <div className="atmo-screen flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
      <div
        className="font-serif text-9xl text-cream/40 mb-6 animate-rise leading-none"
        aria-label="Completado"
        style={{ fontWeight: 300 }}
      >
        {step.completionChar}
      </div>

      <h1
        className="font-serif text-display-sm text-cream mb-4 animate-rise"
        tabIndex={-1}
      >
        {message}
      </h1>

      {step.order === 1 && (
        <p className="font-serif italic text-cream-dim text-base mb-12 max-w-sm animate-rise">
          La ropa se ha ordenado. La mente se ha aclarado.
        </p>
      )}
      {step.order > 1 && step.order < 5 && (
        <p className="font-sans text-cream-dim text-sm mb-12 max-w-sm animate-rise">
          Cuando quieras, el siguiente paso te espera. No hay prisa.
        </p>
      )}
      {step.order === 5 && (
        <p className="font-serif italic text-sakura text-base mb-12 max-w-sm animate-rise">
          El corazón está ordenado.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-center animate-rise">
        {nextStep ? (
          <>
            <Link href={`/steps/${nextStep.id}/intro`} className="pill-btn text-base">
              Siguiente: {nextStep.es}
            </Link>
            <Link
              href="/journey"
              className="font-serif italic text-cream-dim hover:text-cream text-sm underline-offset-4 hover:underline transition-colors py-2"
            >
              Ver mi camino
            </Link>
          </>
        ) : (
          <>
            <Link href="/closing" className="pill-btn text-base">
              Terminar el camino
            </Link>
            <Link
              href="/progress"
              className="font-serif italic text-cream-dim hover:text-cream text-sm underline-offset-4 hover:underline transition-colors py-2"
            >
              Ver mi progreso
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
