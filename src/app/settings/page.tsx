import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { LanguageSettings } from "@/components/LanguageSettings";
import { PillarFooter } from "@/components/PillarFooter";

export const metadata: Metadata = {
  title: "Ajustes",
  description: "Configuración de idioma y privacidad.",
};

export default function SettingsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <LanguageSettings />
      </main>
      <PillarFooter />
    </>
  );
}
