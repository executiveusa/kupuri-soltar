"use client";

import { useState } from "react";
import Link from "next/link";
import type { SoltarStep } from "@/content/soltar/steps";

export function ReflectionCard({ step, locale = "es" }: { step: SoltarStep; locale?: "es" | "en" | "ja" }) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);
  const question = step.reflection[locale];

  const handleSave = () => {
    if (typeof window !== "undefined" && text.trim()) {
      localStorage.setItem(
        `soltar_reflection_${step.id}`,
        JSON.stringify({ text: text.trim(), savedAt: new Date().toISOString() })
      );
    }
    setSaved(true);
  };

  return (
    <div className="atmo-screen flex flex-col justify-center px-6 py-16 max-w-xl mx-auto min-h-screen">
      <div className="mb-8 text-center animate-rise">
        <span className="ornament mb-4">✾</span>
        <p className="text-xs uppercase tracking-[0.25em] text-cream-dim/50 font-sans mb-1">
          {step.es} · Reflexión
        </p>
        <h1 className="font-serif text-display-sm text-cream">
          Un momento de reflexión
        </h1>
      </div>

      <div className="rounded-2xl border border-cream/15 bg-atmo-surface backdrop-blur-sm p-6 mb-8 animate-rise">
        <p className="font-serif text-cream text-xl leading-relaxed italic">{question}</p>
      </div>

      {!saved ? (
        <>
          <label htmlFor="reflection-text" className="block text-xs text-cream-dim/60 font-sans mb-2 tracking-wide">
            Tu respuesta — solo tú la ves
          </label>
          <textarea
            id="reflection-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-36 px-4 py-3 rounded-2xl border border-cream/15 bg-atmo-surface text-cream text-sm leading-relaxed resize-none focus-visible:outline-2 focus-visible:outline-offset-2 placeholder:text-cream-dim/30 font-sans backdrop-blur-sm"
            placeholder="Escribe lo que quieras. O no escribas nada."
            aria-describedby="reflection-privacy"
          />
          <p id="reflection-privacy" className="text-xs text-cream-dim/30 font-sans mt-2">
            Guardado solo en este dispositivo. No se comparte.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center animate-rise">
            <button
              onClick={handleSave}
              className="pill-btn text-base"
            >
              {text.trim() ? "Guardar y continuar" : "Continuar sin escribir"}
            </button>
            <Link
              href={`/steps/${step.id}/complete`}
              className="font-serif italic text-cream-dim/60 hover:text-cream text-sm underline-offset-4 hover:underline transition-colors py-2"
            >
              Saltar la reflexión
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center animate-rise">
          <p className="font-serif italic text-cream-dim text-base mb-6">
            {text.trim() ? "Reflexión guardada." : "Seguimos adelante."}
          </p>
          <Link href={`/steps/${step.id}/complete`} className="pill-btn text-base">
            Continuar
          </Link>
        </div>
      )}
    </div>
  );
}
