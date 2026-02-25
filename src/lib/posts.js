/**
 * Fetches all blog posts from /src/lib/content/*.md using Vite's import.meta.glob.
 * Returns them sorted by date descending. Includes reading time and tags.
 *
 * @typedef {{ title: string, description: string, date: string, tags?: string[] }} PostMeta
 * @typedef {{ slug: string, meta: PostMeta, readingTime: string }} Post
 */

/**
 * Estimates reading time from raw markdown text.
 * @param {string} content
 * @returns {string}
 */
function estimateReadingTime(content) {
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}

/** @returns {Promise<Post[]>} */
export async function getPosts() {
    /** @type {Record<string, () => Promise<{ metadata: PostMeta, default: any }>>} */
    const modules = import.meta.glob('/src/lib/content/*.md', { eager: false });

    /** @type {Record<string, string>} */
    const rawFiles = import.meta.glob('/src/lib/content/*.md', { eager: true, query: '?raw', import: 'default' });

    /** @type {Post[]} */
    const posts = [];

    for (const [path, resolver] of Object.entries(modules)) {
        const { metadata } = await resolver();
        const slug = path.split('/').pop()?.replace('.md', '') ?? '';
        const raw = rawFiles[path] ?? '';

        posts.push({
            slug,
            meta: /** @type {PostMeta} */ (metadata),
            readingTime: estimateReadingTime(typeof raw === 'string' ? raw : '')
        });
    }

    posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

    return posts;
}

/**
 * Gets all unique tags from posts.
 * @param {Post[]} posts
 * @returns {string[]}
 */
export function getAllTags(posts) {
    const tagSet = new Set();
    for (const post of posts) {
        if (post.meta.tags) {
            for (const tag of post.meta.tags) {
                tagSet.add(tag);
            }
        }
    }
    return /** @type {string[]} */ ([...tagSet].sort());
}
