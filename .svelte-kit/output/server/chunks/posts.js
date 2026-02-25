import { _ as __vite_glob_2_1, a as __vite_glob_2_0 } from "./oled-dark-mode2.js";
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/content/hello-world.md": () => import("./hello-world.js"), "/src/lib/content/oled-dark-mode.md": () => import("./oled-dark-mode.js") });
  const rawFiles = /* @__PURE__ */ Object.assign({ "/src/lib/content/hello-world.md": __vite_glob_2_0, "/src/lib/content/oled-dark-mode.md": __vite_glob_2_1 });
  const posts = [];
  for (const [path, resolver] of Object.entries(modules)) {
    const { metadata } = await resolver();
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";
    const raw = rawFiles[path] ?? "";
    posts.push({
      slug,
      meta: (
        /** @type {PostMeta} */
        metadata
      ),
      readingTime: estimateReadingTime(typeof raw === "string" ? raw : "")
    });
  }
  posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return posts;
}
function getAllTags(posts) {
  const tagSet = /* @__PURE__ */ new Set();
  for (const post of posts) {
    if (post.meta.tags) {
      for (const tag of post.meta.tags) {
        tagSet.add(tag);
      }
    }
  }
  return (
    /** @type {string[]} */
    [...tagSet].sort()
  );
}
export {
  getAllTags as a,
  getPosts as g
};
