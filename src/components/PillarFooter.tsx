export function PillarFooter({ locale = "es", light = false }: { locale?: string; light?: boolean }) {
  const pillars =
    locale === "en" ? "Loyalty · Honor · Truth · Respect" :
    locale === "ja" ? "誠実 · 誇り · 真実 · 敬意" :
    "Lealtad · Honor · Verdad · Respeto";

  return (
    <footer className={`border-t py-6 px-6 text-center ${light ? "border-ink/10" : "border-cream/10"}`}>
      <p className={`text-xs tracking-[0.25em] uppercase ${light ? "text-ink-light" : "text-cream-dim"}`}>
        {pillars}
      </p>
      <p className={`mt-1.5 text-xs opacity-40 font-sans ${light ? "text-ink" : "text-cream"}`}>
        SUELTA · Kupuri Media · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
