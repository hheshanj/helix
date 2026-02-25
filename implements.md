# Proposed Quality of Life (QoL) Features

## 1. Navigation & Accessibility
- [ ] **Reading Progress Bar**: A sticky horizontal progress bar at the top of the screen during blog post reading to show how far along the user is.
- [ ] **Back to Top Button**: A floating button that appears after scrolling down, allowing users to instantly jump to the top.
- [ ] **Keyboard Shortcuts**: E.g., hitting `Cmd/Ctrl + K` or `/` to instantly snap focus to the search bar on the home page, and `Escape` to close the image lightbox.

## 2. Blog Post Enhancements
- [ ] **Copy Code Button**: A "Copy" button overlaid on code snippets allowing readers to easily copy code blocks to their clipboard.
- [ ] **Social Share Buttons**: "Copy Link", LinkedIn, and Twitter share buttons directly on the post page for easy distribution.
- [ ] **Related Posts Section**: At the end of each post, recommend 2-3 other articles that share the same tags or themes to keep users engaged.
- [ ] **Comments System**: Integrate a lightweight, developer-friendly comment system like Giscus or utteranc.es (powered by GitHub discussions/issues).
- [ ] **Dynamic Code Highlight Theme**: Ensure that the syntax highlighting (if using tools like Shiki or Prism) responds dynamically to the dark/light mode toggle.

## 3. General App Improvements
- [ ] **Pagination or "Load More"**: Implement a "Load More" button or pagination on the home page for when the number of blog posts grows larger to preserve performance.
- [ ] **RSS Feed UI Link**: Add a visible RSS Feed icon in the navigation bar or footer, so users know it is available without having to inspect the page source.
- [ ] **View Transitions**: Enable the View Transitions API or SvelteKit layouts transitions to create smoother, app-like visual transitions between the index page and blog pages.
- [ ] **Image Optimizations**: Add lazy loading (`loading="lazy"`) and a Skeleton screen or blurred placeholder implementation for images to improve perceived performance.
- [ ] **Draft Status**: Support a `draft: true` flag in the markdown frontmatter so posts can be safely worked on and pushed to GitHub without being listed publicly.
