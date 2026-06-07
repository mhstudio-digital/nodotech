import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/posts";

type ArticleCardProps = {
  post: Post;
  featured?: boolean;
};

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const { slug, frontmatter } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("es-CR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-lg hover:shadow-black/5 ${
        featured ? "sm:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] sm:w-1/2" : "aspect-[16/10]"}`}>
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          sizes={featured ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col gap-3 p-6 ${featured ? "sm:justify-center sm:p-8" : ""}`}>
        <span className="w-fit rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
          {frontmatter.category}
        </span>
        <h3 className={`font-display font-bold leading-tight text-[#0A0A0A] ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {frontmatter.title}
        </h3>
        <p className="line-clamp-2 text-sm text-black/60">{frontmatter.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 text-xs text-black/50">
          <span>{frontmatter.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={frontmatter.date}>{formattedDate}</time>
          <span aria-hidden="true">·</span>
          <span>{frontmatter.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
