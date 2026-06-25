import type { Metadata } from "next";
import { RitualHero } from "@/components/RitualHero";

export const metadata: Metadata = {
  title: "SOLTAR — No es solo limpiar. Es soltar.",
  description:
    "Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
};

export default function LandingPage() {
  return (
    <main id="main-content">
      <RitualHero imageSrc="/images/soltar/01-hero-soltar.png" />
    </main>
  );
}
