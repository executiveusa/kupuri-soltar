"use client";

import { useState } from "react";
import Link from "next/link";
import type { SoltarStep } from "@/content/soltar/steps";

interface ItemDecisionCardProps {
  step: SoltarStep;
}

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
    "Artículos de cocina que compraste para recetas que no hiciste",
  ],
  recuerdos: [
    "Fotografías duplicadas o borrosas",
    "Recuerdos de relaciones que terminaron",
    "Premios de logros que ya no significan lo mismo",
    "Objetos heredados que guardas por obligación",
    "Cartas de personas con quienes ya no tienes contacto",
  ],
};

export function ItemDecisionCard({ step }: ItemDecisionCardProps) {
  const items = exampleItems[step.id] ?? [];
  const [decisions, setDecisions] = useState<Record<number, "keep" | "release" | null>>(
    Object.fromEntries(items.map((_, i) => [i, null]))
  );

  const decide = (index: number, choice: "keep" | "release") => {
    setDecisions((prev) => ({ ...prev, [index]: choice }));
  };

  const allDecided = items.every((_, i) => decisions[i] !== null);
  const releaseCount = Object.values(decisions).filter((d) => d === "release").length;

  return (
    <section
      className="max-w-xl mx-auto px-6 py-12"
      aria-labelledby="decision-heading"
    >
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-mountain-mist mb-1">
          Paso {step.order} — {step.es}
        </p>
        <h1
          id="decision-heading"
          className="font-serif text-2xl text-charcoal-ink"
        >
          ¿Qué conservas, qué sueltas?
        </h1>
        <p className="mt-2 text-sm text-clay-dark">
          Tómate el tiempo que necesites con cada uno.
        </p>
      </div>

      <ul className="space-y-4" role="list">
        {items.map((item, i) => {
          const decision = decisions[i];
          return (
            <li
              key={i}
              className={`p-4 rounded border transition-colors ${
                decision === "keep"
                  ? "border-mountain-mist bg-beige/40"
                  : decision === "release"
                    ? "border-clay bg-linen"
                    : "border-beige bg-parchment"
              }`}
            >
              <p className="text-sm text-charcoal-ink mb-3">{item}</p>
              <div className="flex gap-3" role="group" aria-label={`Decisión para: ${item}`}>
                <button
                  onClick={() => decide(i, "keep")}
                  className={`flex-1 py-2 px-3 text-xs rounded border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    decision === "keep"
                      ? "border-mountain-mist bg-mountain-mist/20 text-charcoal-ink"
                      : "border-beige hover:border-mountain-mist text-clay-dark"
                  }`}
                  aria-pressed={decision === "keep"}
                >
                  Conservar
                </button>
                <button
                  onClick={() => decide(i, "release")}
                  className={`flex-1 py-2 px-3 text-xs rounded border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    decision === "release"
                      ? "border-clay bg-clay/10 text-clay-dark"
                      : "border-beige hover:border-clay text-clay-dark"
                  }`}
                  aria-pressed={decision === "release"}
                >
                  Soltar
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {allDecided && (
        <div className="mt-8 p-4 bg-linen rounded border border-clay/30 text-center animate-rise">
          <p className="text-sm text-clay-dark">
            {releaseCount > 0
              ? `Decidiste soltar ${releaseCount} ${releaseCount === 1 ? "cosa" : "cosas"}. Eso requiere valor.`
              : "Elegiste conservar todo por ahora. Eso también está bien."}
          </p>
          <div className="mt-4">
            <Link
              href={`/steps/${step.id}/reflection`}
              className="inline-block px-6 py-3 bg-clay text-parchment text-sm rounded transition-colors hover:bg-clay-dark focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Continuar a la reflexión
            </Link>
          </div>
        </div>
      )}

      {!allDecided && (
        <p className="mt-6 text-center text-xs text-mountain-mist">
          Tómate el tiempo que necesites.
        </p>
      )}
    </section>
  );
}
