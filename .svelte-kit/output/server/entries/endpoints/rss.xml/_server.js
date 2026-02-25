import { g as getPosts } from "../../../chunks/posts.js";
const prerender = true;
async function GET() {
  const posts = await getPosts();
  const siteUrl = "https://materialblog.dev";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Helix</title>
    <description>A high-performance personal blog built with SvelteKit and Material Design 3.</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
    ${posts.map(
    (post) => `
    <item>
      <title>${escapeXml(post.meta.title)}</title>
      <description>${escapeXml(post.meta.description)}</description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      ${(post.meta.tags ?? []).map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
    </item>`
  ).join("")}
  </channel>
</rss>`;
  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600"
    }
  });
}
function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
export {
  GET,
  prerender
};
