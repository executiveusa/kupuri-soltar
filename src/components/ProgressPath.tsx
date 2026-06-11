import Link from "next/link";
import { FiveStepPath } from "./FiveStepPath";

interface ProgressPathProps {
  completedSteps?: string[];
  currentStep?: string;
}

export function ProgressPath({ completedSteps = [], currentStep }: ProgressPathProps) {
  const done = completedSteps.length;

  return (
    <div className="atmo-screen px-6 py-12 max-w-xl mx-auto min-h-screen">
      <header className="mb-8 text-center">
        <span className="ornament mb-3">✾</span>
        <h1 className="font-serif text-display-sm text-cream mb-2">Mi camino</h1>
        <p className="text-sm text-cream-dim/60 font-sans">Cinco pasos, un mismo camino.</p>
      </header>

      {done > 0 && (
        <div
          className="mb-6 p-4 rounded-2xl border border-amber/20 bg-amber/8 text-center"
          role="status"
        >
          <p className="text-sm text-cream-dim font-sans">
            {done === 5 ? "El camino está completo." : `${done} de 5 pasos completados.`}
          </p>
        </div>
      )}

      <FiveStepPath completedSteps={completedSteps} currentStep={currentStep} interactive />

      <div className="mt-10 flex justify-center">
        {currentStep ? (
          <Link href={`/steps/${currentStep}/intro`} className="pill-btn text-base">
            Continuar mi camino
          </Link>
        ) : done === 0 ? (
          <Link href="/steps/ropa/intro" className="pill-btn text-base">
            Comenzar el primer paso
          </Link>
        ) : done === 5 ? (
          <Link href="/closing" className="pill-btn text-base">
            Ver el cierre
          </Link>
        ) : null}
      </div>
    </div>
  );
}
