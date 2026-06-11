import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SUELTA — No es solo limpiar. Es soltar.",
    template: "%s · SUELTA",
  },
  description:
    "Un camino tranquilo para ordenar afuera y hacer espacio adentro. Un ritual japonés para dejar ir y renacer.",
  metadataBase: new URL("https://kupuri-soltar.vercel.app"),
  openGraph: {
    title: "SUELTA by Kupuri Media",
    description:
      "No es solo limpiar. Es soltar. Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
    locale: "es_MX",
    type: "website",
    images: ["/images/soltar/01-hero-soltar.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SUELTA by Kupuri Media",
    description: "No es solo limpiar. Es soltar.",
    images: ["/images/soltar/01-hero-soltar.png"],
  },
  keywords: ["soltar", "suelta", "bienestar", "konmari", "kupuri media", "ritual japonés", "mujer", "orden"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
