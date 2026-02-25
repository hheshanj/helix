import "clsx";
const metadata = {
  "title": "Hello World: SvelteKit + Material You",
  "description": "Welcome to my blog built with SvelteKit, Tailwind CSS, and Material Design 3 aesthetics. Fast, modern, and beautifully dark.",
  "date": "2026-02-24",
  "tags": ["sveltekit", "design", "web"]
};
const { title, description, date, tags } = metadata;
function Hello_world_md($$renderer) {
  $$renderer.push(`<h1 id="building-a-modern-blog"><a href="#building-a-modern-blog">Building a Modern Blog</a></h1> <p>This is the inaugural post on a blog built with <strong>SvelteKit</strong> and styled using a custom <strong>Material Design 3</strong> system on top of Tailwind CSS.</p> <h2 id="why-sveltekit"><a href="#why-sveltekit">Why SvelteKit?</a></h2> <p>SvelteKit is an exceptional framework for building fast, content-heavy websites:</p> <ul><li><strong>Zero runtime overhead</strong> — Svelte compiles your components to vanilla JS at build time</li> <li><strong>Static Site Generation</strong> — with <code>adapter-static</code>, the entire site ships as pure HTML</li> <li><strong>File-based routing</strong> — pages live where you’d expect them</li> <li><strong>Markdown support</strong> — via <code>mdsvex</code>, writing content is as simple as creating a <code>.md</code> file</li></ul> <h2 id="why-material-design-3"><a href="#why-material-design-3">Why Material Design 3?</a></h2> <p>Material You (M3) brings a refined design language with:</p> <ul><li><strong>Tonal surfaces</strong> — subtle elevation through color rather than heavy shadows</li> <li><strong>Dynamic palettes</strong> — a cohesive color system built from a single seed color</li> <li><strong>High border radii</strong> — everything feels soft and approachable</li></ul> <blockquote><p>The combination of SvelteKit’s performance and M3’s aesthetics creates something that’s both fast and beautiful.</p></blockquote> <h2 id="whats-next"><a href="#whats-next">What’s Next?</a></h2> <p>I’ll be writing about web development, design systems, and the tools I use daily. Stay tuned!</p>`);
}
export {
  Hello_world_md as default,
  metadata
};
