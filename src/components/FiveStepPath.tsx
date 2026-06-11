import Link from "next/link";
import { soltarSteps } from "@/content/soltar/steps";

interface FiveStepPathProps {
  completedSteps?: string[];
  currentStep?: string;
  interactive?: boolean;
}

export function FiveStepPath({
  completedSteps = [],
  currentStep,
  interactive = true,
}: FiveStepPathProps) {
  return (
    <ol className="space-y-3" aria-label="Los cinco pasos del camino de soltar">
      {soltarSteps.map((step) => {
        const isCompleted = completedSteps.includes(step.id);
        const isCurrent = step.id === currentStep;

        const inner = (
          <div
            className={`step-row ${isCompleted ? "done" : ""} ${isCurrent ? "active" : ""}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-serif ${
                isCompleted
                  ? "bg-cream/20 text-cream"
                  : isCurrent
                    ? "bg-amber/30 text-amber-glow"
                    : "bg-cream/8 text-cream-dim opacity-50"
              }`}
              aria-hidden="true"
            >
              {isCompleted ? "完" : step.order}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className={`font-serif text-lg ${isCurrent || isCompleted ? "text-cream" : "text-cream-dim opacity-60"}`}>
                  {step.es}
                </span>
                <span className={`text-xs font-sans ${isCurrent ? "text-sakura" : "text-cream-dim opacity-40"}`}>
                  {step.ja}
                </span>
              </div>
              <p className={`text-xs font-sans mt-0.5 ${isCurrent || isCompleted ? "text-cream-dim" : "text-cream-dim opacity-40"}`}>
                {step.description.es}
              </p>
            </div>
            {isCurrent && (
              <span className="text-xs text-amber opacity-80 flex-shrink-0" aria-label="Paso actual">→</span>
            )}
            {isCompleted && (
              <span className="text-xs text-cream-dim opacity-50 flex-shrink-0 font-sans">
                {step.order === 5 ? "道" : "↓"}
              </span>
            )}
          </div>
        );

        if (interactive && (isCompleted || isCurrent || true)) {
          return (
            <li key={step.id}>
              <Link
                href={`/steps/${step.id}/intro`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 rounded-full"
              >
                {inner}
              </Link>
            </li>
          );
        }

        return (
          <li key={step.id} aria-current={isCurrent ? "step" : undefined}>
            {inner}
          </li>
        );
      })}
    </ol>
  );
}
