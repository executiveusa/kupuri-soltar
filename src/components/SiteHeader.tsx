import Link from "next/link";
import { SueltaLogo } from "./SueltaLogo";
import { SiteNav } from "./SiteNav";

export function SiteHeader({ light = false }: { light?: boolean }) {
  const textColor = light ? "text-ink" : "text-cream";
  const borderColor = light ? "border-ink/10 bg-parchment/90" : "border-cream/10 bg-atmo-deep/80";

  return (
    <header
      className={`border-b sticky top-0 z-40 backdrop-blur-sm ${borderColor}`}
    >
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className={`transition-opacity hover:opacity-70 ${textColor}`}
          aria-label="SUELTA — Inicio"
        >
          <SueltaLogo size={28} showWordmark={true} />
        </Link>
        <div className={textColor}>
          <SiteNav light={light} />
        </div>
        <Link
          href="/settings"
          className={`text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity font-sans ${textColor}`}
          aria-label="Ajustes"
        >
          ⊙
        </Link>
      </div>
    </header>
  );
}
