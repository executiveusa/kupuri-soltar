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
    default: "SOLTAR — No es solo limpiar. Es soltar.",
    template: "%s · SOLTAR",
  },
  description:
    "Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
  applicationName: "SOLTAR",
  metadataBase: new URL("https://kupuri-soltar.vercel.app"),
  openGraph: {
    title: "SOLTAR by Kupuri Media",
    description:
      "Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
    siteName: "SOLTAR",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/soltar/01-hero-soltar.png",
        width: 1600,
        height: 1000,
        alt: "SOLTAR — No es solo limpiar. Es soltar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLTAR by Kupuri Media",
    description:
      "Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
    images: ["/images/soltar/01-hero-soltar.png"],
  },
  keywords: [
    "soltar",
    "bienestar",
    "orden emocional",
    "konmari",
    "kupuri media",
    "mujer",
    "ritual",
    "reflexión",
  ],
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
