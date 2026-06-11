import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { FiveStepPath } from "@/components/FiveStepPath";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "El camino de soltar",
  description: "Cinco pasos para soltar con calma y estructura.",
};

export default function JourneyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="atmo-screen px-6 py-12 max-w-xl mx-auto min-h-screen">
        <header className="mb-10">
          <span className="ornament mb-3">✾</span>
          <h1 className="font-serif text-display-sm text-cream mb-2">El camino de soltar</h1>
          <p className="text-cream-dim/60 text-sm font-sans leading-relaxed">
            Cinco pasos. Un mismo camino. Empieza cuando estés lista.
          </p>
        </header>

        <FiveStepPath interactive={true} />

        <div className="mt-10 p-5 rounded-2xl border border-cream/10 bg-atmo-surface backdrop-blur-sm">
          <p className="text-xs text-cream-dim/40 font-sans leading-relaxed">
            No hay orden equivocado. No hay velocidad correcta. Este camino es tuyo.
          </p>
        </div>
      </main>
      <PillarFooter />
    </>
  );
}
