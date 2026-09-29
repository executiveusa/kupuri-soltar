import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ReflectionCard } from "@/components/ReflectionCard";
import { PillarFooter } from "@/components/PillarFooter";
import { getStep, soltarSteps } from "@/content/soltar/steps";

interface Props {
  params: Promise<{ step: string }>;
}

export function generateStaticParams() {
  return soltarSteps.map((s) => ({ step: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { step: stepId } = await params;
  const step = getStep(stepId);
  if (!step) return {};
  return {
    title: `${step.es} — Reflexión`,
    description: `Un momento de reflexión después de trabajar con tu ${step.es.toLowerCase()}.`,
  };
}

export default async function StepReflectionPage({ params }: Props) {
  const { step: stepId } = await params;
  const step = getStep(stepId);
  if (!step) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ReflectionCard step={step} />
      </main>
      <PillarFooter />
    </>
  );
}
