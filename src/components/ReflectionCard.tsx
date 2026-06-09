"use client";

import { useState } from "react";
import Link from "next/link";
import type { SoltarStep } from "@/content/soltar/steps";

interface ReflectionCardProps {
  step: SoltarStep;
  locale?: "es" | "en" | "ja";
}

export function ReflectionCard({ step, locale = "es" }: ReflectionCardProps) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const question = step.reflection[locale];

  const handleSave = () => {
    if (typeof window !== "undefined" && text.trim()) {
      const key = `soltar_reflection_${step.id}`;
      const entry = { text: text.trim(), savedAt: new Date().toISOString() };
      localStorage.setItem(key, JSON.stringify(entry));
    }
    setSaved(true);
  };

  return (
    <section
      className="max-w-xl mx-auto px-6 py-16 animate-rise"
      aria-labelledby="reflection-heading"
    >
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-widest text-mountain-mist mb-1">
          {step.es} · Reflexión
        </p>
        <h1
          id="reflection-heading"
          className="font-serif text-2xl text-charcoal-ink leading-snug"
        >
          Un momento de reflexión
        </h1>
      </div>

      <div className="p-6 bg-linen rounded border border-clay/20 mb-8">
        <p className="text-charcoal-ink text-base leading-relaxed">{question}</p>
      </div>

      {!saved ? (
        <>
          <label htmlFor="reflection-text" className="block text-sm text-clay-dark mb-2">
            Tu respuesta (opcional, solo tú la ves)
          </label>
          <textarea
            id="reflection-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-36 px-4 py-3 rounded border border-beige bg-parchment text-charcoal-ink text-sm leading-relaxed resize-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-dark placeholder:text-mountain-mist"
            placeholder="Escribe lo que quieras. O no escribas nada."
            aria-describedby="reflection-privacy-note"
          />
          <p id="reflection-privacy-note" className="text-xs text-mountain-mist mt-2">
            Guardado solo en este dispositivo. No se comparte con nadie.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-clay text-parchment text-sm rounded hover:bg-clay-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {text.trim() ? "Guardar y continuar" : "Continuar sin escribir"}
            </button>
            <Link
              href={`/steps/${step.id}/complete`}
              className="text-sm text-clay hover:text-clay-dark underline-offset-4 hover:underline text-center sm:text-left py-3"
            >
              Saltarme la reflexión
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center animate-rise">
          <p className="text-sm text-clay-dark mb-6">
            {text.trim() ? "Reflexión guardada." : "Seguimos adelante."}
          </p>
          <Link
            href={`/steps/${step.id}/complete`}
            className="inline-block px-6 py-3 bg-clay text-parchment text-sm rounded hover:bg-clay-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Continuar
          </Link>
        </div>
      )}
    </section>
  );
}
