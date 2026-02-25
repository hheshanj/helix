const __vite_glob_2_0 = '---\r\ntitle: "Hello World: SvelteKit + Material You"\r\ndescription: "Welcome to my blog built with SvelteKit, Tailwind CSS, and Material Design 3 aesthetics. Fast, modern, and beautifully dark."\r\ndate: "2026-02-24"\r\ntags: ["sveltekit", "design", "web"]\r\n---\r\n\r\n# Building a Modern Blog\r\n\r\nThis is the inaugural post on a blog built with **SvelteKit** and styled using a custom **Material Design 3** system on top of Tailwind CSS.\r\n\r\n## Why SvelteKit?\r\n\r\nSvelteKit is an exceptional framework for building fast, content-heavy websites:\r\n\r\n- **Zero runtime overhead** — Svelte compiles your components to vanilla JS at build time\r\n- **Static Site Generation** — with `adapter-static`, the entire site ships as pure HTML\r\n- **File-based routing** — pages live where you\'d expect them\r\n- **Markdown support** — via `mdsvex`, writing content is as simple as creating a `.md` file\r\n\r\n## Why Material Design 3?\r\n\r\nMaterial You (M3) brings a refined design language with:\r\n\r\n- **Tonal surfaces** — subtle elevation through color rather than heavy shadows\r\n- **Dynamic palettes** — a cohesive color system built from a single seed color\r\n- **High border radii** — everything feels soft and approachable\r\n\r\n> The combination of SvelteKit\'s performance and M3\'s aesthetics creates something that\'s both fast and beautiful.\r\n\r\n## What\'s Next?\r\n\r\nI\'ll be writing about web development, design systems, and the tools I use daily. Stay tuned!\r\n';
const __vite_glob_2_1 = '---\r\ntitle: "Optimizing for OLED: The Case for True Black"\r\ndescription: "Why #000000 matters for OLED screens and how to build a dark theme that takes full advantage of pixel-off black."\r\ndate: "2026-02-23"\r\ntags: ["design", "css", "performance"]\r\n---\r\n\r\n# The OLED Advantage\r\n\r\nOn an OLED display, black pixels are literally **turned off**. This means a true `#000000` background:\r\n\r\n- Uses zero power for those pixels\r\n- Creates infinite contrast ratios\r\n- Makes colors appear more vibrant\r\n\r\n## Designing with Tonal Surfaces\r\n\r\nMaterial Design 3 introduces the concept of **tonal containers** — instead of using drop shadows to show elevation, you use progressively lighter surface colors:\r\n\r\n- `surface` — `#000000` (OLED black)\r\n- `surface-container` — `#1c1b1f`\r\n- `surface-container-high` — `#252529`\r\n- `surface-container-highest` — `#302f33`\r\n\r\nThis creates a subtle sense of depth without relying on shadows that disappear on dark backgrounds.\r\n\r\n## Typography Matters\r\n\r\nUsing `Roboto Flex` with its variable font axes gives us fine-grained control over:\r\n\r\n- **Weight** — from 100 to 1000\r\n- **Width** — condensed to expanded\r\n- **Optical sizing** — automatic adjustments for readability at any scale\r\n\r\nThe result is typography that looks crisp on any screen density.\r\n';
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
  return posts.filter((p) => !p.meta.draft);
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
  __vite_glob_2_1 as _,
  getAllTags as a,
  __vite_glob_2_0 as b,
  getPosts as g
};
