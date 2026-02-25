import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter } from 'shiki';

let highlighterPromise;

function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ['github-dark-default'],
            langs: ['javascript', 'typescript', 'html', 'css', 'svelte', 'json', 'bash', 'markdown', 'python']
        });
    }
    return highlighterPromise;
}

const config = defineConfig({
    extensions: ['.md', '.svx'],
    smartypants: {
        dashes: 'oldschool'
    },
    highlight: {
        highlighter: async (code, lang) => {
            const highlighter = await getHighlighter();
            const html = highlighter.codeToHtml(code, {
                lang: lang || 'text',
                theme: 'github-dark-default'
            });
            // Strip the outer <pre> wrapper that Shiki adds, because mdsvex wraps it in its own <pre>
            return `{@html \`${html.replace(/`/g, '\\`')}\`}`;
        }
    },
    remarkPlugins: [],
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ]
});

export default config;
