import Image from "next/image";
import { QuietButton } from "./QuietButton";

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
      className="min-h-[85vh] flex flex-col justify-center px-6 py-16 max-w-3xl mx-auto"
      aria-labelledby="hero-heading"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-rise">
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl leading-tight text-charcoal-ink whitespace-pre-line mb-6"
          >
            {headline}
          </h1>
          <p className="text-clay-dark text-lg leading-relaxed whitespace-pre-line mb-10">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <QuietButton href={ctaHref} variant="primary">
              {ctaLabel}
            </QuietButton>
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <QuietButton href={ctaSecondaryHref} variant="ghost">
                {ctaSecondaryLabel}
              </QuietButton>
            )}
          </div>
        </div>

        {imageSrc && (
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-beige">
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {!imageSrc && (
          <div
            className="aspect-[4/5] rounded-sm bg-beige flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="kanji text-6xl">松</span>
          </div>
        )}
      </div>
    </section>
  );
}
