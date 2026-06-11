import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { BitacoraList } from "@/components/BitacoraList";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "Bitácora",
  description: "Lecturas para acompañar el camino de soltar.",
};

export default function BitacoraPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <BitacoraList />
      </main>
      <PillarFooter />
    </>
  );
}
