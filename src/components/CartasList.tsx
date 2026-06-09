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
    <section
      className="max-w-2xl mx-auto px-6 py-12"
      aria-labelledby="cartas-heading"
    >
      <header className="mb-8">
        <h1
          id="cartas-heading"
          className="font-serif text-3xl text-charcoal-ink mb-2"
        >
          Cartas de Soltar
        </h1>
        <p className="text-sm text-clay-dark leading-relaxed">
          Palabras anónimas de personas en el mismo camino. Sin nombres. Sin
          fotos. Sin conteos.
        </p>
      </header>

      {submitted && (
        <div
          role="status"
          className="mb-8 p-4 bg-linen rounded border border-clay/30 text-sm text-clay-dark animate-rise"
        >
          Tu carta fue recibida. Gracias por compartir.
        </div>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="mb-10 px-5 py-2.5 border border-clay text-clay-dark text-sm rounded hover:bg-beige transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Escribir una carta
        </button>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mb-10 p-6 bg-linen rounded border border-clay/20 animate-rise"
          aria-label="Escribir una carta anónima"
        >
          <p className="text-xs text-mountain-mist mb-3">
            Comparte algo que soltaste, o algo que aún cargas. De forma
            anónima.
          </p>
          <label htmlFor="carta-text" className="sr-only">
            Tu carta
          </label>
          <textarea
            id="carta-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-32 px-4 py-3 rounded border border-beige bg-parchment text-charcoal-ink text-sm leading-relaxed resize-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-dark placeholder:text-mountain-mist"
            placeholder="Escribe lo que quieras compartir..."
            required
            minLength={10}
            aria-required="true"
          />
          <div className="mt-4 flex gap-3">
            <button
              type="submit"
              className="px-5 py-2.5 bg-clay text-parchment text-sm rounded hover:bg-clay-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled={text.trim().length < 10}
            >
              Enviar carta
            </button>
            <button
              type="button"
              onClick={() => { setShowForm(false); setText(""); }}
              className="px-5 py-2.5 text-clay text-sm hover:text-clay-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <ul className="space-y-6" role="list">
        {letters.map((letter) => (
          <li key={letter.id}>
            <blockquote
              className="border-l-2 border-clay/30 pl-5 py-1"
            >
              <p className="text-charcoal-ink text-sm leading-relaxed italic">
                &ldquo;{letter.text}&rdquo;
              </p>
              {letter.step && (
                <footer className="mt-2 text-xs text-mountain-mist capitalize">
                  {letter.step}
                </footer>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
