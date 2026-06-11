"use client";

import { useState, useEffect } from "react";
import { localeLabels, type Locale } from "@/content/soltar/i18n";

export function LanguageSettings() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem("soltar_locale") as Locale | null;
    if (saved && saved in localeLabels) setLocale(saved);
  }, []);

  const handleChange = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("soltar_locale", l);
  };

  return (
    <div className="atmo-screen px-6 py-12 max-w-xl mx-auto min-h-screen">
      <header className="mb-10">
        <span className="ornament mb-3">✾</span>
        <h1 className="font-serif text-display-sm text-cream">Ajustes</h1>
      </header>

      <fieldset className="mb-10">
        <legend className="text-xs uppercase tracking-[0.25em] text-cream-dim/50 font-sans mb-4">
          Idioma
        </legend>
        <div className="space-y-3">
          {(Object.entries(localeLabels) as [Locale, string][]).map(([code, label]) => (
            <label
              key={code}
              className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-colors ${
                locale === code
                  ? "border-amber/40 bg-amber/10 text-cream"
                  : "border-cream/12 bg-atmo-surface text-cream-dim/70 hover:border-cream/20"
              }`}
            >
              <input
                type="radio"
                name="locale"
                value={code}
                checked={locale === code}
                onChange={() => handleChange(code)}
                className="accent-amber"
              />
              <span className="font-serif text-lg">{label}</span>
              {locale === code && (
                <span className="ml-auto text-xs text-amber/70 font-sans tracking-wide">Activo</span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="p-5 rounded-2xl border border-cream/10 bg-atmo-surface backdrop-blur-sm">
        <h2 className="text-xs uppercase tracking-[0.25em] text-cream-dim/50 font-sans mb-3">
          Privacidad
        </h2>
        <p className="text-sm text-cream-dim/70 font-sans leading-relaxed">
          Tus reflexiones se guardan solo en este dispositivo. Nada se envía a ningún servidor sin tu permiso.
          No hay cuenta. No hay perfil. No hay seguimiento.
        </p>
      </div>
    </div>
  );
}
