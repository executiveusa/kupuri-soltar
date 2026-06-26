"use client";

import { useState } from "react";
import Link from "next/link";
import type { SoltarStep } from "@/content/soltar/steps";

const exampleItems: Record<string, string[]> = {
  ropa: [
    "Abrigo que no has usado en dos años",
    "Ropa de una talla que ya no es la tuya",
    "Uniforme de un trabajo que dejaste",
    "Ropa de una versión de ti que ya no existe",
    "Prendas que guardas por culpa",
  ],
  libros: [
    "Libros que compraste pero nunca abriste",
    "Textos de una carrera que no terminaste",
    "Libros de autoayuda que no aplicaste",
    "Colecciones que alguien más esperaba que tuvieras",
    "Libros que guardas para impresionar, no para leer",
  ],
  papeles: [
    "Manuales de aparatos que ya no tienes",
    "Recibos de más de 3 años",
    "Cartas que no contestaste",
    "Planes de negocios que no ejecutaste",
    "Documentos de proyectos terminados",
  ],
  komono: [
    "Cables sin dispositivo",
    "Adornos que no te gustan pero no sabes tirar",
    "Regalos que nunca usaste",
    "Herramientas de hobbies que abandonaste",
    "Artículos de cocina para recetas que no hiciste",
  ],
  recuerdos: [
    "Fotografías duplicadas o borrosas",
    "Recuerdos de relaciones que terminaron",
    "Premios de logros que ya no significan lo mismo",
    "Objetos heredados que guardas por obligación",
    "Cartas de personas con quienes ya no tienes contacto",
  ],
};

export function ItemDecisionCard({ step }: { step: SoltarStep }) {
  const items = exampleItems[step.id] ?? [];
  const [decisions, setDecisions] = useState<Record<number, "keep" | "release" | null>>(
    Object.fromEntries(items.map((_, i) => [i, null]))
  );

  const decide = (index: number, choice: "keep" | "release") =>
    setDecisions((prev) => ({ ...prev, [index]: choice }));

  const allDecided = items.every((_, i) => decisions[i] !== null);
  const releaseCount = Object.values(decisions).filter((d) => d === "release").length;

  return (
    <div
      className="atmo-screen px-6 py-12 max-w-xl mx-auto"
      style={{ background: "linear-gradient(rgba(30,24,18,0.72), rgba(30,24,18,0.82)), url('/images/soltar/05-step-action-ropa.png') center / cover no-repeat" }}
    >
      <header className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-cream-dim/50 font-sans mb-1">
          {step.es} · Paso {step.order}
        </p>
        <h1 className="font-serif text-display-sm text-cream">
          ¿Conservar o soltar?
        </h1>
        <p className="text-sm text-cream-dim/60 font-sans mt-2">
          Tómate el tiempo que necesites.
        </p>
      </header>

      <ul className="space-y-3" role="list">
        {items.map((item, i) => {
          const d = decisions[i];
          return (
            <li
              key={i}
              className={`rounded-2xl border p-4 transition-colors ${
                d === "keep" ? "border-cream/20 bg-cream/8" :
                d === "release" ? "border-amber/30 bg-amber/8" :
                "border-cream/10 bg-atmo-surface"
              }`}
            >
              <p className="text-sm text-cream-dim font-sans mb-3 leading-relaxed">{item}</p>
              <div className="flex gap-2" role="group" aria-label={`Decisión: ${item}`}>
                <button
                  onClick={() => decide(i, "keep")}
                  className={`flex-1 py-2 px-3 text-xs font-sans rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 ${
                    d === "keep"
                      ? "border-cream/40 bg-cream/15 text-cream"
                      : "border-cream/15 text-cream-dim/60 hover:border-cream/25"
                  }`}
                  aria-pressed={d === "keep"}
                >
                  Conservar
                </button>
                <button
                  onClick={() => decide(i, "release")}
                  className={`flex-1 py-2 px-3 text-xs font-sans rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 ${
                    d === "release"
                      ? "border-amber/50 bg-amber/15 text-amber-glow"
                      : "border-cream/15 text-cream-dim/60 hover:border-amber/25"
                  }`}
                  aria-pressed={d === "release"}
                >
                  Soltar
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {allDecided && (
        <div className="mt-8 p-5 rounded-2xl border border-amber/25 bg-amber/8 text-center animate-rise">
          <p className="font-serif italic text-cream text-base mb-5">
            {releaseCount > 0
              ? `Decidiste soltar ${releaseCount} ${releaseCount === 1 ? "cosa" : "cosas"}. Eso requiere valor.`
              : "Elegiste conservar todo por ahora. Eso también está bien."}
          </p>
          <Link href={`/steps/${step.id}/reflection`} className="pill-btn text-base">
            Continuar a la reflexión
          </Link>
        </div>
      )}

      {!allDecided && (
        <p className="mt-6 text-center text-xs text-cream-dim/40 font-sans tracking-wide">
          Tómate el tiempo que necesites.
        </p>
      )}
    </div>
  );
}
