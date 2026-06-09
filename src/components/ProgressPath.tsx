import { FiveStepPath } from "./FiveStepPath";
import { QuietButton } from "./QuietButton";

interface ProgressPathProps {
  completedSteps?: string[];
  currentStep?: string;
}

export function ProgressPath({
  completedSteps = [],
  currentStep,
}: ProgressPathProps) {
  const total = 5;
  const done = completedSteps.length;

  return (
    <section
      className="max-w-xl mx-auto px-6 py-12"
      aria-labelledby="progress-heading"
    >
      <header className="mb-8 text-center">
        <h1
          id="progress-heading"
          className="font-serif text-3xl text-charcoal-ink mb-2"
        >
          Mi camino
        </h1>
        <p className="text-sm text-clay-dark">
          Cinco pasos, un mismo camino.
        </p>
      </header>

      {done > 0 && (
        <div
          className="mb-8 p-4 bg-linen rounded border border-clay/20 text-center"
          role="status"
          aria-label={`${done} de ${total} pasos completados`}
        >
          <p className="text-sm text-clay-dark">
            {done === total
              ? "El camino está completo."
              : `${done} de ${total} pasos completados.`}
          </p>
        </div>
      )}

      <FiveStepPath
        completedSteps={completedSteps}
        currentStep={currentStep}
        interactive={true}
      />

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        {currentStep ? (
          <QuietButton href={`/steps/${currentStep}/intro`} variant="primary">
            Continuar mi camino
          </QuietButton>
        ) : done === 0 ? (
          <QuietButton href="/steps/ropa/intro" variant="primary">
            Comenzar el primer paso
          </QuietButton>
        ) : done === total ? (
          <QuietButton href="/closing" variant="primary">
            Ver el cierre
          </QuietButton>
        ) : null}
      </div>
    </section>
  );
}
