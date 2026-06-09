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
      <main id="main-content" className="max-w-xl mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="font-serif text-3xl text-charcoal-ink mb-2">
            El camino de soltar
          </h1>
          <p className="text-clay-dark text-sm leading-relaxed">
            Cinco pasos. Un mismo camino. Empieza cuando estés lista.
          </p>
        </header>

        <FiveStepPath interactive={true} />

        <div className="mt-10 p-5 bg-linen rounded border border-beige">
          <p className="text-xs text-mountain-mist leading-relaxed">
            No hay orden equivocado. No hay velocidad correcta. Este camino es
            tuyo.
          </p>
        </div>
      </main>
      <PillarFooter />
    </>
  );
}
