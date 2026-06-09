export function PillarFooter({ locale = "es" }: { locale?: string }) {
  const pillars =
    locale === "en"
      ? "Loyalty · Honor · Truth · Respect"
      : locale === "ja"
        ? "誠実 · 誇り · 真実 · 敬意"
        : "Lealtad · Honor · Verdad · Respeto";

  return (
    <footer className="border-t border-beige py-8 px-6 text-center">
      <p className="text-sm text-clay tracking-widest uppercase">{pillars}</p>
      <p className="mt-2 text-xs text-mountain-mist">
        SOLTAR / SUELTA — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
