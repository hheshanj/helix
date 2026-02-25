<script>
  import { theme } from '$lib/theme.svelte.js';
  import { onMount, untrack } from 'svelte';
  import { page } from '$app/stores';

  let container = $state(null);

  const GISCUS_REPO = 'hheshanj/helix';
  const GISCUS_REPO_ID = 'R_kgDORYgIjg';
  const GISCUS_CATEGORY = 'General';
  const GISCUS_CATEGORY_ID = 'DIC_kwDORYgIjs4C3LMY';

  function loadScript() {
    if (!container) return;
    container.innerHTML = '';
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', GISCUS_REPO);
    script.setAttribute('data-repo-id', GISCUS_REPO_ID);
    script.setAttribute('data-category', GISCUS_CATEGORY);
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', theme.isDark ? 'dark' : 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;
    container.appendChild(script);
  }

  $effect(() => {
    // Re-run loadScript when pathname changes
    $page.url.pathname;
    untrack(() => {
      loadScript();
    });
  });

  // Re-send theme message to iframe when theme toggles without full reload
  $effect(() => {
    const isDark = theme.isDark;
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
      iframe.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: isDark ? 'dark' : 'light' } } },
        'https://giscus.app'
      );
    }
  });
</script>

<section class="mt-12 pt-8 border-t border-outline-variant/20 giscus-container">
  <h2 class="text-headline-sm text-on-surface mb-6">Comments</h2>
  <div class="giscus" bind:this={container}></div>
</section>
