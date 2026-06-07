import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponete en contacto con el equipo de NodoTech.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <span className="w-fit rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
        Contacto
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl">
        Hablemos
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-black/60">
        Estamos preparando esta sección. Muy pronto vas a poder escribirnos directamente desde acá.
      </p>
    </div>
  );
}
