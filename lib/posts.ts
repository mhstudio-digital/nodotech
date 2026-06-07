import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author: string;
  coverImage: string;
  readTime: string;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter: PostFrontmatter = {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    category: data.category,
    author: data.author,
    coverImage: data.coverImage,
    readTime: data.readTime ?? readingTime(content).text,
  };

  return { slug, frontmatter, content };
}

export function getAllPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (a.frontmatter.date > b.frontmatter.date ? -1 : 1));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (post) => post.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}
