import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { CompletionCard } from "@/components/CompletionCard";
import { PillarFooter } from "@/components/PillarFooter";
import { getStep, soltarSteps } from "@/content/soltar/steps";

interface Props {
  params: { step: string };
}

export function generateStaticParams() {
  return soltarSteps.map((s) => ({ step: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const step = getStep(params.step);
  if (!step) return {};
  return {
    title: `${step.es} completado`,
    description: step.completionMessage.es,
  };
}

export default function StepCompletePage({ params }: Props) {
  const step = getStep(params.step);
  if (!step) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <CompletionCard step={step} />
      </main>
      <PillarFooter />
    </>
  );
}
