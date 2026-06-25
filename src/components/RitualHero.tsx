import Image from "next/image";
import Link from "next/link";

interface RitualHeroProps {
  imageSrc: string;
  ctaHref?: string;
}

export function RitualHero({
  imageSrc,
  ctaHref = "/welcome",
}: RitualHeroProps) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-atmo-deep"
      aria-label="SOLTAR — inicio"
    >
      <Image
        src={imageSrc}
        alt="SOLTAR — No es solo limpiar. Es soltar. Mujer sosteniendo ropa doblada con calma, en un ambiente de luz cálida y flor de cerezo."
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Screen-reader accessible content for baked-in image text */}
      <div className="sr-only">
        <h1>SOLTAR</h1>
        <p>No es solo limpiar. Es soltar.</p>
        <p>Un camino tranquilo para ordenar afuera y hacer espacio adentro.</p>
        <p>Un ritual japonés para dejar ir y renacer.</p>
      </div>

      {/* Transparent clickable overlay over the baked-in CTA area */}
      <Link
        href={ctaHref}
        aria-label="Comenzar mi camino — SOLTAR"
        className="absolute left-[5%] bottom-[12%] h-[56px] w-[72%] max-w-[320px] rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sakura sm:left-[12%] sm:bottom-[18%]"
      />

      {/* Visible mobile CTA below image for accessibility on small screens */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-5 sm:hidden">
        <Link
          href={ctaHref}
          className="pill-btn text-base"
          aria-label="Comenzar mi camino"
        >
          Comenzar mi camino
        </Link>
      </div>
    </section>
  );
}
