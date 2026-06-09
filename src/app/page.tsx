import type { Metadata } from "next";
import { RitualHero } from "@/components/RitualHero";
import { PillarFooter } from "@/components/PillarFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "SOLTAR — Un camino tranquilo para soltar",
  description:
    "No es solo limpiar. Es soltar. Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
};

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <RitualHero
          headline={"No es solo limpiar.\nEs soltar."}
          subheadline={
            "Un camino tranquilo para ordenar afuera\ny hacer espacio adentro."
          }
          ctaLabel="Comenzar mi camino"
          ctaHref="/welcome"
          ctaSecondaryLabel="Tomar un respiro"
          ctaSecondaryHref="/welcome"
          imageSrc="/images/soltar/01-hero-soltar.png"
          imageAlt="Una mujer sostiene ropa doblada con calma, en un ambiente de luz cálida y textura natural"
        />
      </main>
      <PillarFooter />
    </>
  );
}
