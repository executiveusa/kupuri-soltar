"use client";

import { useState, useEffect } from "react";
import { localeLabels, type Locale } from "@/content/soltar/i18n";

const STORAGE_KEY = "soltar_locale";

export function LanguageSettings() {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && saved in localeLabels) {
      setLocale(saved);
    }
  }, []);

  const handleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  return (
    <section
      className="max-w-xl mx-auto px-6 py-12"
      aria-labelledby="settings-heading"
    >
      <h1
        id="settings-heading"
        className="font-serif text-3xl text-charcoal-ink mb-8"
      >
        Ajustes
      </h1>

      <div className="mb-10">
        <fieldset>
          <legend className="text-sm font-medium text-charcoal-ink mb-4">
            Idioma
          </legend>
          <div className="space-y-3">
            {(Object.entries(localeLabels) as [Locale, string][]).map(
              ([code, label]) => (
                <label
                  key={code}
                  className={`flex items-center gap-3 p-4 rounded border cursor-pointer transition-colors ${
                    locale === code
                      ? "border-clay bg-linen"
                      : "border-beige hover:border-clay/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="locale"
                    value={code}
                    checked={locale === code}
                    onChange={() => handleChange(code)}
                    className="accent-clay-dark"
                  />
                  <span className="text-charcoal-ink">{label}</span>
                  {locale === code && (
                    <span
                      className="ml-auto text-xs text-clay"
                      aria-hidden="true"
                    >
                      Activo
                    </span>
                  )}
                </label>
              )
            )}
          </div>
        </fieldset>
      </div>

      <div className="p-5 bg-linen rounded border border-beige">
        <h2 className="text-sm font-medium text-charcoal-ink mb-2">
          Privacidad
        </h2>
        <p className="text-sm text-clay-dark leading-relaxed">
          Tus reflexiones se guardan solo en este dispositivo. Nada se envía a
          ningún servidor sin tu permiso. No hay cuenta, no hay perfil, no hay
          seguimiento.
        </p>
      </div>
    </section>
  );
}
