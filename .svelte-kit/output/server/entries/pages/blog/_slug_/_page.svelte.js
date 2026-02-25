import { b as attr, e as escape_html, c as stringify, i as ensure_array_like, a as attr_class, f as derived, g as store_get, u as unsubscribe_stores, h as head } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { P as PostCard } from "../../../../chunks/PostCard.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function AuthorBio($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      name = "Heshan",
      bio = "Developer, designer, and writer. I build things for the web and write about the process.",
      github = "",
      twitter = ""
    } = $$props;
    $$renderer2.push(`<aside class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-surface-container rounded-3xl border border-outline-variant/20">`);
    if (github) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", `https://github.com/${stringify(github)}.png`)}${attr("alt", `${stringify(name)}'s avatar`)} class="w-16 h-16 rounded-full bg-primary-container shrink-0 object-cover shadow-sm border border-outline-variant/20"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-headline-md text-primary shrink-0">${escape_html(name.charAt(0))}</div>`);
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-col gap-2"><span class="text-title-md text-on-surface font-semibold">Written by ${escape_html(name)}</span> <p class="text-body-md text-on-surface-variant">${escape_html(bio)}</p> `);
    if (github || twitter) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center gap-3 mt-1">`);
      if (github) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", `https://github.com/${stringify(github)}`)} target="_blank" rel="noopener noreferrer" class="text-label-lg text-primary hover:underline underline-offset-4">GitHub</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (twitter) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", `https://x.com/${stringify(twitter)}`)} target="_blank" rel="noopener noreferrer" class="text-label-lg text-primary hover:underline underline-offset-4">X / Twitter</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></aside>`);
  });
}
function TableOfContents($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { headings = [] } = $$props;
    if (headings.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<nav aria-label="Table of contents" class="hidden xl:block sticky top-24 w-56 shrink-0"><span class="text-label-lg text-on-surface mb-4 block">On this page</span> <ul class="flex flex-col gap-1 border-l border-outline-variant/20 pl-4"><!--[-->`);
      const each_array = ensure_array_like(headings);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let heading = each_array[$$index];
        $$renderer2.push(`<li><a${attr("href", `#${stringify(heading.id)}`)}${attr_class(`text-body-sm text-on-surface-variant hover:text-primary transition-colors block py-1 ${stringify(heading.level === 3 ? "pl-3" : "")}`)}>${escape_html(heading.text)}</a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></nav>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function ShareButtons($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { title } = $$props;
    let twitterUrl = derived(() => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(store_get($$store_subs ??= {}, "$page", page).url.href)}`);
    let linkedInUrl = derived(() => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(store_get($$store_subs ??= {}, "$page", page).url.href)}`);
    $$renderer2.push(`<div class="share-strip"><span class="text-label-sm text-on-surface-variant uppercase tracking-wider">Share</span> <button class="share-btn" aria-label="Copy link">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> <span>Copy link</span>`);
    }
    $$renderer2.push(`<!--]--></button> <a${attr("href", twitterUrl())} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Share on X (Twitter)"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg> <span>Tweet</span></a> <a${attr("href", linkedInUrl())} target="_blank" rel="noopener noreferrer" class="share-btn" aria-label="Share on LinkedIn"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 23.2 22.271V1.729C23.2.774 23.2 0 22.222 0h.003z"></path></svg> <span>LinkedIn</span></a></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Giscus($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="mt-12 pt-8 border-t border-outline-variant/20 giscus-container"><h2 class="text-headline-sm text-on-surface mb-6">Comments</h2> <div class="giscus"></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let formattedDate = derived(() => new Date(data.meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }));
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} — Helix</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.meta.description)}/> <meta property="og:title"${attr("content", data.meta.title)}/> <meta property="og:description"${attr("content", data.meta.description)}/> <meta property="og:type" content="article"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", data.meta.title)}/> <meta name="twitter:description"${attr("content", data.meta.description)}/> ${html(`<script type="application/ld+json">${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.meta.title,
        description: data.meta.description,
        datePublished: data.meta.date,
        author: { "@type": "Person", name: "Heshan" }
      })}<\/script>`)}`);
    });
    $$renderer2.push(`<div class="max-w-6xl mx-auto px-6 py-12 flex gap-12"><article class="max-w-3xl flex-1 min-w-0"><header class="mb-12 text-center"><div class="flex items-center justify-center gap-3 text-label-lg text-on-surface-variant mb-4"><span>${escape_html(formattedDate())}</span> `);
    if (data.readingTime) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="w-1 h-1 rounded-full bg-outline"></span> <span>${escape_html(data.readingTime)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="text-display-sm md:text-display-md text-on-surface mb-4">${escape_html(data.meta.title)}</h1> <p class="text-body-lg text-on-surface-variant max-w-xl mx-auto">${escape_html(data.meta.description)}</p> `);
    if (data.meta.tags?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex flex-wrap justify-center gap-2 mt-6"><!--[-->`);
      const each_array = ensure_array_like(data.meta.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<a href="/#posts" class="px-3 py-1 text-label-sm bg-surface-container text-on-surface-variant rounded-full hover:bg-surface-container-high transition-colors">#${escape_html(tag)}</a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="w-16 h-1 bg-primary rounded-full mx-auto mt-8"></div> `);
    ShareButtons($$renderer2, { title: data.meta.title });
    $$renderer2.push(`<!----></header> <div class="prose">`);
    if (data.content) {
      $$renderer2.push("<!--[-->");
      data.content($$renderer2, {});
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</div> <div class="mt-16 pt-8 border-t border-outline-variant/20">`);
    AuthorBio($$renderer2, { name: "Heshan", github: "heshanJ", twitter: "" });
    $$renderer2.push(`<!----></div> `);
    if (data.relatedPosts?.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-12 pt-8 border-t border-outline-variant/20"><h2 class="text-headline-sm text-on-surface mb-6">Related Posts</h2> <div class="flex flex-col gap-4"><!--[-->`);
      const each_array_1 = ensure_array_like(data.relatedPosts);
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
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="mt-8"><a href="/#posts" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg> Back to blog</a></div> `);
    Giscus($$renderer2);
    $$renderer2.push(`<!----></article> `);
    TableOfContents($$renderer2, { headings: data.headings ?? [] });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
