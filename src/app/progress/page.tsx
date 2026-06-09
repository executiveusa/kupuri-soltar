import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ProgressPath } from "@/components/ProgressPath";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "Mi progreso",
  description: "Cinco pasos, un mismo camino.",
};

export default function ProgressPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ProgressPath />
      </main>
      <PillarFooter />
    </>
  );
}
