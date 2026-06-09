import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ItemDecisionCard } from "@/components/ItemDecisionCard";
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
    title: `${step.es} — Conservar o soltar`,
    description: `Decide qué conservas y qué sueltas en tu ${step.es.toLowerCase()}.`,
  };
}

export default function StepActionPage({ params }: Props) {
  const step = getStep(params.step);
  if (!step) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ItemDecisionCard step={step} />
      </main>
      <PillarFooter />
    </>
  );
}
