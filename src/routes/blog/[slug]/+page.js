/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  const modules = import.meta.glob("/src/lib/content/*.md");
  return Object.keys(modules).map((path) => ({
    slug: path.split("/").pop()?.replace(".md", "") ?? "",
  }));
}

/**
 * Estimates reading time from raw markdown text.
 * @param {string} content
 * @returns {string}
 */
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

/**
 * Extract headings from markdown for Table of Contents.
 * @param {string} content
 * @returns {Array<{id: string, text: string, level: number}>}
 */
function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

import { getPosts } from "$lib/posts.js";

/**
 * Get related posts by matching tags, excluding the current slug.
 * @param {string} currentSlug
 * @param {string[]} tags
 */
async function getRelatedPosts(currentSlug, tags) {
  if (!tags.length) return [];
  const all = await getPosts();
  return all
    .filter(
      (p) =>
        p.slug !== currentSlug && p.meta.tags?.some((t) => tags.includes(t)),
    )
    .slice(0, 3);
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../../../lib/content/${params.slug}.md`);

  // Get raw content for reading time and headings
  const rawModules = import.meta.glob("/src/lib/content/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });
  const rawKey = `/src/lib/content/${params.slug}.md`;
  const rawContent =
    typeof rawModules[rawKey] === "string" ? rawModules[rawKey] : "";

  return {
    content: post.default,
    meta: post.metadata,
    readingTime: estimateReadingTime(rawContent),
    headings: extractHeadings(rawContent),
    relatedPosts: await getRelatedPosts(params.slug, post.metadata.tags ?? []),
  };
}

export const prerender = true;
