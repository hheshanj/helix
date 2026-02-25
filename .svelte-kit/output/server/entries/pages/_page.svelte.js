import { h as head, b as attr, a as attr_class, i as ensure_array_like, e as escape_html, f as derived, c as stringify } from "../../chunks/index.js";
import { P as PostCard } from "../../chunks/PostCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let activeTag = "";
    let searchQuery = "";
    let allTags = derived(() => data.allTags);
    let filteredPosts = derived(() => data.posts.filter((p) => {
      const matchTag = true;
      const q = searchQuery.toLowerCase();
      const matchSearch = q ? p.meta.title.toLowerCase().includes(q) || p.meta.description.toLowerCase().includes(q) : true;
      return matchTag && matchSearch;
    }));
    const PAGE_SIZE = 5;
    let visibleCount = PAGE_SIZE;
    let visiblePosts = derived(() => filteredPosts().slice(0, visibleCount));
    let hasMore = derived(() => visibleCount < filteredPosts().length);
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Helix — Home</title>`);
      });
      $$renderer3.push(`<meta property="og:title" content="Helix"/> <meta property="og:description" content="A high-performance personal blog built with SvelteKit and Material Design 3."/> <meta property="og:type" content="website"/>`);
    });
    $$renderer2.push(`<section class="max-w-3xl mx-auto px-6 py-16"><div class="mb-16 animate-fade-in"><h1 class="text-display-sm md:text-display-md text-on-surface mb-4">Hey, I'm <span class="text-primary">Heshan</span></h1> <p class="text-headline-sm text-on-surface-variant max-w-lg">Welcome to my corner of the internet. I write about code, design, and everything in between.</p></div> <div id="posts" class="animate-slide-up" style="animation-delay: 150ms; opacity: 0;"><div class="flex items-center justify-between mb-8"><h2 class="text-headline-md text-on-surface">Explore Posts</h2></div> <div class="mb-8"><div class="relative w-full"><div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"><svg class="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div> <input id="search-input" type="search"${attr("value", searchQuery)} placeholder="Search posts... (press / to focus)" class="w-full py-4 pl-12 pr-4 bg-surface-container rounded-full text-body-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-outline-variant/20"/></div></div> `);
    if (allTags().length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-wrap gap-2 mb-10"><button${attr_class(`px-4 py-2 rounded-full text-label-lg transition-all duration-200 ${stringify(
        "bg-primary text-inverse-on-surface"
      )}`)}>All</button> <!--[-->`);
      const each_array = ensure_array_like(allTags());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<button${attr_class(`px-4 py-2 rounded-full text-label-lg transition-all duration-200 ${stringify(activeTag === tag ? "bg-primary text-inverse-on-surface" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high")}`)}>#${escape_html(tag)}</button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-col gap-4">`);
    const each_array_1 = ensure_array_like(visiblePosts());
    if (each_array_1.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array_1[$$index_1];
        PostCard($$renderer2, {
          title: post.meta.title,
          description: post.meta.description,
          date: post.meta.date,
          slug: post.slug,
          readingTime: post.readingTime,
          tags: post.meta.tags ?? []
        });
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-body-lg text-on-surface-variant py-8 text-center bg-surface-container rounded-3xl border border-outline-variant/20">No posts found matching your criteria.</p>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (hasMore()) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex justify-center mt-8"><button class="px-8 py-3 rounded-full bg-surface-container border border-outline-variant/20 text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200">Load more (${escape_html(filteredPosts().length - visibleCount)} remaining)</button></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  _page as default
};
