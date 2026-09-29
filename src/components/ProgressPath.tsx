"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { FiveStepPath } from "./FiveStepPath";
import { soltarSteps } from "@/content/soltar/steps";

const subscribe = (listener: () => void) => {
  window.addEventListener("storage", listener);
  window.addEventListener("focus", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("focus", listener);
  };
};
const getProgressSnapshot = () => soltarSteps.map((s) =>
  localStorage.getItem(`soltar_reflection_${s.id}`) !== null ? "1" : "0"
).join("");
const getServerProgressSnapshot = () => "";

export function ProgressPath() {
  // Empty snapshot is a stable server/hydration placeholder; the client reads
  // localStorage only after hydration, then updates on storage/focus events.
  const snapshot = useSyncExternalStore(subscribe, getProgressSnapshot, getServerProgressSnapshot);
  const ready = snapshot.length === soltarSteps.length;
  const completedSteps = ready ? soltarSteps.filter((_, i) => snapshot[i] === "1").map(s => s.id) : [];
  const next = ready ? soltarSteps.find(s => !completedSteps.includes(s.id)) : undefined;
  const currentStep = next?.id;
  const done = completedSteps.length;

  if (!ready) {
    return (
      <div className="atmo-screen px-6 py-12 max-w-xl mx-auto min-h-screen flex items-center justify-center">
        <span className="ornament animate-glow">✾</span>
      </div>
    );
  }

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

      {done === 0 && (
        <div className="mb-6 p-4 rounded-2xl border border-cream/10 bg-atmo-surface text-center">
          <p className="text-sm text-cream-dim/60 font-sans">
            Tu camino comienza cuando estés lista.
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
