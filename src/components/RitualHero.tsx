import Image from "next/image";
import Link from "next/link";

interface RitualHeroProps {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function RitualHero({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  imageSrc,
  imageAlt,
}: RitualHeroProps) {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-atmo-deep/80 via-atmo-deep/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-atmo-deep/70 via-transparent to-atmo-deep/20" />
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 w-full">
        <div className="max-w-md animate-rise">
          {/* Ornament */}
          <span className="ornament mb-4">✾</span>

          <h1
            id="hero-heading"
            className="font-serif text-display text-cream leading-tight whitespace-pre-line mb-5"
          >
            {headline}
          </h1>

          <p className="font-sans text-cream-dim text-base leading-relaxed whitespace-pre-line mb-2">
            {subheadline}
          </p>

          <p className="font-serif italic text-sakura text-sm mb-10 tracking-wide">
            Un ritual japonés para dejar ir y renacer.
          </p>

          {/* Step icons row */}
          <div className="flex gap-6 mb-10 text-cream-dim text-xs font-sans tracking-wide opacity-70">
            <span>衣 Ropa</span>
            <span>本 Libros</span>
            <span>思 Recuerdos</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link href={ctaHref} className="pill-btn text-lg">
              {ctaLabel}
            </Link>
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                className="font-serif text-cream-dim hover:text-cream underline-offset-4 hover:underline text-base italic py-3 transition-colors"
              >
                {ctaSecondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
