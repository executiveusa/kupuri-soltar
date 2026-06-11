import type { Metadata } from "next";
import { WelcomePause } from "@/components/WelcomePause";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "Un respiro antes de comenzar",
  description: "Antes de soltar, vamos a tomar un respiro.",
};

export default function WelcomePage() {
  return (
    <>
      <main id="main-content">
        <WelcomePause />
      </main>
      <PillarFooter />
    </>
  );
}
