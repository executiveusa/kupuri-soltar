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
    <section
      className="max-w-xl mx-auto px-6 py-16 text-center animate-rise"
      aria-labelledby="completion-heading"
    >
      <div
        className="text-8xl font-serif text-clay mb-8"
        aria-label="Completado"
      >
        {step.completionChar}
      </div>

      <h1
        id="completion-heading"
        className="font-serif text-2xl text-charcoal-ink mb-4"
      >
        {message}
      </h1>

      <p className="text-sm text-clay-dark leading-relaxed mb-12 max-w-sm mx-auto">
        {step.order < 5
          ? "Cuando quieras, el siguiente paso te espera. No hay prisa."
          : "Has recorrido los cinco pasos. El corazón está ordenado."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {nextStep ? (
          <>
            <Link
              href={`/steps/${nextStep.id}/intro`}
              className="px-6 py-3 bg-clay text-parchment text-sm rounded hover:bg-clay-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Siguiente paso: {nextStep.es}
            </Link>
            <Link
              href="/journey"
              className="px-6 py-3 text-clay text-sm hover:text-clay-dark underline-offset-4 hover:underline py-3"
            >
              Ver mi camino
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/closing"
              className="px-6 py-3 bg-clay text-parchment text-sm rounded hover:bg-clay-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Terminar el camino
            </Link>
            <Link
              href="/progress"
              className="px-6 py-3 text-clay text-sm hover:text-clay-dark underline-offset-4 hover:underline py-3"
            >
              Ver mi progreso
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
