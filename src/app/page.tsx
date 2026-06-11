import type { Metadata } from "next";
import { RitualHero } from "@/components/RitualHero";
import { PillarFooter } from "@/components/PillarFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "SUELTA — No es solo limpiar. Es soltar.",
  description:
    "Un ritual japonés para dejar ir y renacer. Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <RitualHero
          headline={"No es solo\nlimpiar.\nEs soltar."}
          subheadline={"Un camino tranquilo para ordenar\nafuera y hacer espacio adentro."}
          ctaLabel="Comenzar mi camino"
          ctaHref="/welcome"
          ctaSecondaryLabel="Tomar un respiro"
          ctaSecondaryHref="/welcome"
          imageSrc="/images/soltar/01-hero-soltar.png"
          imageAlt="Mujer sosteniendo ropa doblada con calma, en un ambiente de luz cálida y flor de cerezo"
        />
      </main>
      <PillarFooter />
    </>
  );
}
