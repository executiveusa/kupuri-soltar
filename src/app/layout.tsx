import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SOLTAR — Un camino tranquilo para soltar",
    template: "%s · SOLTAR",
  },
  description:
    "Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
  metadataBase: new URL("https://kupuri-soltar.vercel.app"),
  openGraph: {
    title: "SOLTAR",
    description:
      "No es solo limpiar. Es soltar. Un camino tranquilo para ordenar afuera y hacer espacio adentro.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
