import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { CartasList } from "@/components/CartasList";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "Cartas de Soltar",
  description:
    "Palabras anónimas de personas en el mismo camino. Sin nombres. Sin fotos. Sin conteos.",
};

export default function CartasPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <CartasList />
      </main>
      <PillarFooter />
    </>
  );
}
