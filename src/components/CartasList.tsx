"use client";

import { useState } from "react";
import { letters } from "@/content/soltar/letters";

export function CartasList() {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 10) return;
    setSubmitted(true);
    setText("");
    setShowForm(false);
  };

  return (
    <div
      className="atmo-screen px-6 py-12 max-w-2xl mx-auto min-h-screen"
      style={{ background: "linear-gradient(rgba(30,24,18,0.68), rgba(30,24,18,0.78)), url('/images/soltar/09-cartas-de-soltar.png') center / cover no-repeat" }}
    >
      <header className="mb-8">
        <span className="ornament mb-3">✾</span>
        <h1 className="font-serif text-display-sm text-cream mb-2">Cartas de Soltar</h1>
        <p className="text-sm text-cream-dim/60 font-sans leading-relaxed">
          Palabras anónimas de personas en el mismo camino.
          Sin nombres. Sin fotos. Sin conteos.
        </p>
      </header>

      {submitted && (
        <div role="status" className="mb-8 p-4 rounded-2xl border border-amber/25 bg-amber/8 text-sm text-cream-dim font-sans animate-rise">
          Tu carta fue recibida. Gracias por compartir.
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="pill-btn text-base mb-10"
        >
          Escribir una carta
        </button>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-10 p-6 rounded-2xl border border-cream/15 bg-atmo-surface backdrop-blur-sm animate-rise"
        >
          <p className="text-xs text-cream-dim/40 font-sans mb-3">
            Comparte algo que soltaste, o algo que aún cargas. De forma anónima.
          </p>
          <label htmlFor="carta-text" className="sr-only">Tu carta</label>
          <textarea
            id="carta-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-28 px-4 py-3 rounded-xl border border-cream/10 bg-atmo-deep/40 text-cream text-sm leading-relaxed resize-none focus-visible:outline-2 placeholder:text-cream-dim/25 font-sans"
            placeholder="Escribe lo que quieras compartir…"
            required
            minLength={10}
          />
          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              className="pill-btn text-sm"
              disabled={text.trim().length < 10}
            >
              Enviar carta
            </button>
            <button
              type="button"
              onClick={() => { setShowForm(false); setText(""); }}
              className="font-serif italic text-cream-dim/50 hover:text-cream text-sm underline-offset-4 hover:underline transition-colors py-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <ul className="space-y-6" role="list">
        {letters.map((letter) => (
          <li key={letter.id}>
            <blockquote className="border-l-2 border-sakura/30 pl-5 py-1">
              <p className="font-serif italic text-cream text-base leading-relaxed">
                &ldquo;{letter.text}&rdquo;
              </p>
              {letter.step && (
                <footer className="mt-2 text-xs text-cream-dim/40 font-sans capitalize tracking-wide">
                  {letter.step}
                </footer>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
