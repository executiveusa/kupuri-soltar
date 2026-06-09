import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="border-b border-beige bg-parchment/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-charcoal-ink font-serif text-lg tracking-wide hover:text-clay-dark transition-colors"
          aria-label="SOLTAR — Inicio"
        >
          SOLTAR
        </Link>
        <SiteNav />
        <Link
          href="/settings"
          className="text-sm text-clay hover:text-clay-dark transition-colors"
          aria-label="Ajustes de idioma y privacidad"
        >
          Ajustes
        </Link>
      </div>
    </header>
  );
}
