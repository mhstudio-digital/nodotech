import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import AdSlot from "@/components/AdSlot";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Todos los artículos de NodoTech sobre inteligencia artificial, automatización, herramientas digitales y negocios en Costa Rica.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | NodoTech",
    description:
      "Todos los artículos de NodoTech sobre inteligencia artificial, automatización, herramientas digitales y negocios en Costa Rica.",
    url: "/blog",
  },
};

type BlogPageProps = {
  searchParams: Promise<{ categoria?: string }>;
};

const CATEGORY_LABELS: Record<string, string> = {
  ia: "IA",
  negocios: "Negocios",
  herramientas: "Herramientas",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categoria } = await searchParams;
  const allPosts = getAllPosts();
  const activeCategory = categoria ? CATEGORY_LABELS[categoria.toLowerCase()] : undefined;
  const posts = activeCategory
    ? allPosts.filter((post) => post.frontmatter.category.toLowerCase() === activeCategory.toLowerCase())
    : allPosts;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="mb-12 max-w-2xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl">
          {activeCategory ? `Artículos sobre ${activeCategory}` : "El blog de NodoTech"}
        </h1>
        <p className="mt-4 text-lg text-black/60">
          Guías prácticas y análisis sobre tecnología, inteligencia artificial y negocios digitales,
          escritos pensando en el contexto costarricense.
        </p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
          {posts.length === 0 && (
            <p className="text-black/60">Todavía no hay artículos en esta categoría. Vuelve pronto.</p>
          )}
        </div>

        <aside className="flex flex-col gap-6">
          <AdSlot slot="blog-sidebar" format="rectangle" />
          <div className="rounded-2xl border border-black/10 p-6">
            <h2 className="font-display text-lg font-bold text-[#0A0A0A]">Categorías</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a href="/blog" className="text-black/60 transition-colors hover:text-[#2563EB]">
                  Todos los artículos
                </a>
              </li>
              {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
                <li key={slug}>
                  <a href={`/blog?categoria=${slug}`} className="text-black/60 transition-colors hover:text-[#2563EB]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
