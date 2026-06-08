"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { Post } from "@/lib/posts";

type BlogSearchProps = {
  posts: Post[];
};

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredPosts = normalizedQuery
    ? posts.filter(
        (post) =>
          post.frontmatter.title.toLowerCase().includes(normalizedQuery) ||
          post.frontmatter.category.toLowerCase().includes(normalizedQuery)
      )
    : posts;

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar por título o categoría..."
        className="mb-8 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-black/40 focus:border-[#2563EB] focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-black/60">No encontramos artículos que coincidan con tu búsqueda.</p>
        )}
      </div>
    </div>
  );
}
