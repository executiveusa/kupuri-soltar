import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { PillarFooter } from "@/components/PillarFooter";
import { essays } from "@/content/soltar/essays";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const essay = essays.find((e) => e.slug === params.slug);
  if (!essay) return {};
  return {
    title: essay.title,
    description: essay.excerpt,
  };
}

export default function EssayPage({ params }: Props) {
  const essay = essays.find((e) => e.slug === params.slug);
  if (!essay) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <article className="atmo-screen px-6 py-16 max-w-2xl mx-auto min-h-screen">
          <header className="mb-10">
            <Link
              href="/bitacora"
              className="text-xs text-cream-dim/50 font-sans tracking-widest uppercase hover:text-cream transition-colors"
            >
              ← Bitácora
            </Link>
            <p className="mt-6 text-xs text-cream-dim/40 font-sans uppercase tracking-widest mb-2">
              {essay.category} · {essay.readingMinutes} min
            </p>
            <h1 className="font-serif text-display-sm text-cream leading-tight">
              {essay.title}
            </h1>
          </header>

          <hr className="divider" />

          <p className="font-serif text-cream-dim text-xl leading-relaxed italic mt-8 mb-8">
            {essay.excerpt}
          </p>

          <p className="font-sans text-cream-dim/60 text-sm leading-relaxed">
            Este ensayo está en preparación. Vuelve pronto.
          </p>

          <div className="mt-16 text-center">
            <span className="ornament">✾</span>
            <div className="mt-6">
              <Link href="/bitacora" className="pill-btn text-base">
                Volver a Bitácora
              </Link>
            </div>
          </div>
        </article>
      </main>
      <PillarFooter />
    </>
  );
}
