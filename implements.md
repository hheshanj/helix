# Proposed Quality of Life (QoL) Features

## 1. Navigation & Accessibility
- [x] **Reading Progress Bar**: A sticky horizontal progress bar at the top of the screen during blog post reading. → `ReadingProgress.svelte`
- [x] **Back to Top Button**: A floating button that appears after scrolling down, allowing users to instantly jump to the top. → `BackToTop.svelte`
- [x] **Keyboard Shortcuts**: `/` or `Cmd/Ctrl+K` focuses the search bar. `Escape` closes the image lightbox. → `+page.svelte`, `+layout.svelte`

## 2. Blog Post Enhancements
- [x] **Copy Code Button**: A "Copy" button overlaid on code snippets using a Svelte action. → `src/lib/actions/copyCode.js`
- [x] **Social Share Buttons**: Copy Link, Twitter, and LinkedIn share buttons on the post page. → `ShareButtons.svelte`
- [x] **Related Posts Section**: 2–3 tag-matched posts shown at the end of each post. → `blog/[slug]/+page.js` + `+page.svelte`
- [x] **Comments System**: Giscus integration (placeholder config — fill in values from [giscus.app](https://giscus.app)). → `Giscus.svelte`
- [x] **Dynamic Code Highlight Theme**: Code block theming responds to dark/light mode toggle via CSS variables + Giscus postMessage.

## 3. General App Improvements
- [x] **Pagination / "Load More"**: Shows 5 posts at a time with a "Load More" button on the home page. → `+page.svelte`
- [x] **RSS Feed UI Link**: RSS icon added to the navbar (desktop + mobile). → `Navbar.svelte`
- [x] **View Transitions**: Native View Transitions API enabled via `onNavigate` in `+layout.js` + CSS fade animations.
- [x] **Image Optimizations**: `loading="lazy"` + shimmer skeleton via CSS + JS MutationObserver. → `app.css`, `+layout.svelte`
- [x] **Draft Status**: Posts with `draft: true` in frontmatter are filtered out from public listing. → `posts.js`

> [!IMPORTANT]
> **Giscus setup required**: Open `src/lib/components/Giscus.svelte` and replace the placeholder `GISCUS_REPO`, `GISCUS_REPO_ID`, `GISCUS_CATEGORY`, and `GISCUS_CATEGORY_ID` values with your own from [giscus.app](https://giscus.app). Your GitHub repository must be public and have Discussions enabled with the Giscus app installed.
