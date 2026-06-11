import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { StepIntro } from "@/components/StepIntro";
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
    title: `Paso ${step.order}: ${step.es}`,
    description: step.description.es,
  };
}

export default function StepIntroPage({ params }: Props) {
  const step = getStep(params.step);
  if (!step) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <StepIntro step={step} />
      </main>
      <PillarFooter />
    </>
  );
}
