import type { SoltarStep } from "@/content/soltar/steps";
import { QuietButton } from "./QuietButton";

interface StepIntroProps {
  step: SoltarStep;
  locale?: "es" | "en" | "ja";
}

export function StepIntro({ step, locale = "es" }: StepIntroProps) {
  const stepName = locale === "en" ? step.en : locale === "ja" ? step.ja : step.es;
  const description = step.description[locale];
  const intro = step.intro[locale];

  return (
    <article
      className="max-w-xl mx-auto px-6 py-16 animate-rise"
      aria-labelledby={`step-${step.id}-heading`}
    >
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-mountain-mist mb-2">
          Paso {step.order} de 5
        </p>
        <div className="kanji mb-4" aria-label={step.ja}>
          {step.ja}
        </div>
        <h1
          id={`step-${step.id}-heading`}
          className="font-serif text-3xl text-charcoal-ink"
        >
          {stepName}
        </h1>
        <p className="mt-3 text-clay-dark text-sm">{description}</p>
      </div>

      <hr className="divider" />

      <p className="text-charcoal-ink leading-relaxed text-base">{intro}</p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <QuietButton href={`/steps/${step.id}/action`} variant="primary">
          Comenzar este paso
        </QuietButton>
        <QuietButton href="/journey" variant="ghost">
          Volver al camino
        </QuietButton>
      </div>
    </article>
  );
}
