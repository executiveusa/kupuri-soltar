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
    <ol
      className="space-y-3"
      aria-label="Los cinco pasos del camino de soltar"
    >
      {soltarSteps.map((step) => {
        const isCompleted = completedSteps.includes(step.id);
        const isCurrent = step.id === currentStep;

        const content = (
          <div
            className={`flex items-center gap-4 p-4 rounded border transition-colors ${
              isCompleted
                ? "border-clay bg-beige/60 text-clay-dark"
                : isCurrent
                  ? "border-clay bg-linen text-charcoal-ink"
                  : "border-beige bg-parchment text-charcoal-ink/60"
            }`}
          >
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium flex-shrink-0 ${
                isCompleted
                  ? "bg-clay text-parchment"
                  : isCurrent
                    ? "bg-clay/30 text-clay-dark"
                    : "bg-beige text-mountain-mist"
              }`}
              aria-hidden="true"
            >
              {isCompleted ? "完" : step.order}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-medium">{step.es}</span>
                <span className="text-xs text-mountain-mist">{step.ja}</span>
              </div>
              <p className="text-xs mt-0.5 text-current opacity-70">
                {step.description.es}
              </p>
            </div>
            {isCurrent && (
              <span
                className="text-xs text-clay-dark flex-shrink-0"
                aria-label="Paso actual"
              >
                →
              </span>
            )}
          </div>
        );

        if (interactive && (isCompleted || isCurrent)) {
          return (
            <li key={step.id}>
              <Link
                href={`/steps/${step.id}/intro`}
                className="block focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
              >
                {content}
              </Link>
            </li>
          );
        }

        return (
          <li key={step.id} aria-current={isCurrent ? "step" : undefined}>
            {content}
          </li>
        );
      })}
    </ol>
  );
}
