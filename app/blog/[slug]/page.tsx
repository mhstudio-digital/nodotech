import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import AdSlot from "@/components/AdSlot";
import ShareButtons from "@/components/ShareButtons";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

const SITE_URL = "https://nodotech.vercel.app";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) {
    return {};
  }

  const { frontmatter } = getPostBySlug(slug);

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: `/blog/${slug}`,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      images: [
        {
          url: frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: [frontmatter.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) {
    notFound();
  }

  const { frontmatter, content } = getPostBySlug(slug);
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("es-CR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const otherPosts = getAllPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, 2);

  const [firstParagraph, ...restOfContent] = content.split(/\n{2,}/);
  const remainder = restOfContent.join("\n\n");
  const mdxComponents = { AdSlot };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <header className="mb-8 flex flex-col gap-4">
        <span className="w-fit rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
          {frontmatter.category}
        </span>
        <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#0A0A0A] sm:text-5xl">
          {frontmatter.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-black/50">
          <span>{frontmatter.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={frontmatter.date}>{formattedDate}</time>
          <span aria-hidden="true">·</span>
          <span>{frontmatter.readTime}</span>
        </div>
      </header>

      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={firstParagraph} components={mdxComponents} />
      </div>

      <AdSlot slot="article-after-intro" format="horizontal" className="my-10" />

      <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline">
        <MDXRemote source={remainder} components={mdxComponents} />
      </div>

      <div className="mt-10">
        <ShareButtons title={frontmatter.title} url={`${SITE_URL}/blog/${slug}`} />
      </div>

      {otherPosts.length > 0 && (
        <footer className="mt-16 border-t border-black/10 pt-10">
          <h2 className="font-display text-xl font-bold text-[#0A0A0A]">Seguí leyendo</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {otherPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="font-medium text-[#2563EB] hover:underline">
                  {post.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  );
}
