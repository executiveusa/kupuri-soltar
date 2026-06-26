import type { Metadata } from "next";
import { ClosingInvitation } from "@/components/ClosingInvitation";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "El corazón está ordenado",
  description: "Volver cuando quieras.",
};

export default function ClosingPage() {
  return (
    <>
      <main id="main-content">
        <ClosingInvitation />
      </main>
      <PillarFooter />
    </>
  );
}
