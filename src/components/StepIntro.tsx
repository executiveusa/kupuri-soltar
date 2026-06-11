import type { SoltarStep } from "@/content/soltar/steps";
import Link from "next/link";

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
      className="atmo-screen flex flex-col justify-center px-6 py-16 max-w-xl mx-auto"
      aria-labelledby={`step-${step.id}-heading`}
    >
      <div className="mb-8 text-center animate-rise">
        <p className="text-xs uppercase tracking-[0.25em] text-cream-dim opacity-50 font-sans mb-3">
          Paso {step.order} de 5
        </p>
        <div className="kanji mb-3" aria-label={step.ja}>{step.ja}</div>
        <h1
          id={`step-${step.id}-heading`}
          className="font-serif text-display-sm text-cream"
        >
          {stepName}
        </h1>
        <p className="mt-2 text-sakura text-sm font-sans italic">{description}</p>
      </div>

      <hr className="divider" />

      <p className="font-serif text-cream-dim text-lg leading-relaxed animate-rise">
        {intro}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center animate-rise">
        <Link href={`/steps/${step.id}/action`} className="pill-btn text-base">
          Comenzar este paso
        </Link>
        <Link
          href="/journey"
          className="font-serif text-cream-dim hover:text-cream italic text-sm underline-offset-4 hover:underline py-2 transition-colors"
        >
          Volver al camino
        </Link>
      </div>
    </article>
  );
}
