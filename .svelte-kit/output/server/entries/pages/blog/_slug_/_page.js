import { _ as __vite_glob_2_1, b as __vite_glob_2_0, g as getPosts } from "../../../../chunks/posts.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
async function entries() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/content/hello-world.md": () => import("../../../../chunks/hello-world.js"), "/src/lib/content/oled-dark-mode.md": () => import("../../../../chunks/oled-dark-mode.js") });
  return Object.keys(modules).map((path) => ({
    slug: path.split("/").pop()?.replace(".md", "") ?? ""
  }));
}
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
function extractHeadings(content) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*/g, "").trim();
    const id = text.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}
async function getRelatedPosts(currentSlug, tags) {
  if (!tags.length) return [];
  const all = await getPosts();
  return all.filter((p) => p.slug !== currentSlug && p.meta.tags?.some((t) => tags.includes(t))).slice(0, 3);
}
async function load({ params }) {
  const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/content/hello-world.md": () => import("../../../../chunks/hello-world.js"), "../../../lib/content/oled-dark-mode.md": () => import("../../../../chunks/oled-dark-mode.js") }), `../../../lib/content/${params.slug}.md`, 6);
  const rawModules = /* @__PURE__ */ Object.assign({ "/src/lib/content/hello-world.md": __vite_glob_2_0, "/src/lib/content/oled-dark-mode.md": __vite_glob_2_1 });
  const rawKey = `/src/lib/content/${params.slug}.md`;
  const rawContent = typeof rawModules[rawKey] === "string" ? rawModules[rawKey] : "";
  return {
    content: post.default,
    meta: post.metadata,
    readingTime: estimateReadingTime(rawContent),
    headings: extractHeadings(rawContent),
    relatedPosts: await getRelatedPosts(params.slug, post.metadata.tags ?? [])
  };
}
const prerender = true;
export {
  entries,
  load,
  prerender
};
