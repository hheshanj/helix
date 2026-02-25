import { e as escape_html, b as attr, s as stringify, a2 as ensure_array_like, a as attr_class, h as head, a1 as derived } from "../../../../chunks/index.js";
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
    $$renderer2.push(`<aside class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-surface-container rounded-3xl border border-outline-variant/20"><div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-headline-md text-primary shrink-0">${escape_html(name.charAt(0))}</div> <div class="flex flex-col gap-2"><span class="text-title-md text-on-surface font-semibold">Written by ${escape_html(name)}</span> <p class="text-body-md text-on-surface-variant">${escape_html(bio)}</p> `);
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
    $$renderer2.push(`<!--]--> <div class="w-16 h-1 bg-primary rounded-full mx-auto mt-8"></div></header> <div class="prose">`);
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
    $$renderer2.push(`<!----></div> <div class="mt-8"><a href="/#posts" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg> Back to blog</a></div></article> `);
    TableOfContents($$renderer2, { headings: data.headings ?? [] });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
