import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <p className="kanji text-5xl mb-6" aria-hidden="true">
        空
      </p>
      <h1 className="font-serif text-2xl text-charcoal-ink mb-3">
        Esta página no existe.
      </h1>
      <p className="text-sm text-clay-dark mb-8">
        Quizás fue movida, o quizás nunca estuvo aquí.
      </p>
      <Link
        href="/"
        className="text-sm text-clay hover:text-clay-dark underline-offset-4 hover:underline"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
