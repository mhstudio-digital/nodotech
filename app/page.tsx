import Link from "next/link";
import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Noticias, guías y análisis sobre inteligencia artificial, automatización y herramientas digitales para negocios en Costa Rica y Latinoamérica.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;
  const gridPosts = rest.slice(0, 6);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
            Tecnología sin tecnicismos
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl">
            Entendé la IA, la automatización y las herramientas que están cambiando los negocios.
          </h1>
          <p className="max-w-xl text-lg text-black/60">
            NodoTech traduce las tendencias tecnológicas globales al contexto de Costa Rica y Latinoamérica:
            guías prácticas, análisis claros y recomendaciones que podés aplicar desde hoy.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Explorar el blog
            </Link>
            <Link
              href="/sobre-nosotros"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
            >
              Conocer NodoTech
            </Link>
          </div>
        </div>
        {featured && (
          <div className="lg:justify-self-end lg:max-w-md">
            <ArticleCard post={featured} />
          </div>
        )}
      </section>

      <AdSlot slot="home-banner" format="horizontal" className="mb-16" />

      <section className="pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold text-[#0A0A0A] sm:text-3xl">Últimos artículos</h2>
          <Link href="/blog" className="text-sm font-semibold text-[#2563EB] hover:underline">
            Ver todos →
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
