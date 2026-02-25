<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ReadingProgress from '$lib/components/ReadingProgress.svelte';
  import BackToTop from '$lib/components/BackToTop.svelte';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { onNavigate } from '$app/navigation';

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let isBlogPost = $derived($page.url.pathname.startsWith('/blog/'));

  // Lightbox state
  let lightboxSrc = $state('');
  let lightboxOpen = $state(false);

  function handleClick(e) {
    const target = e.target;
    if (target?.tagName === 'IMG' && target.closest('.prose')) {
      lightboxSrc = target.src;
      lightboxOpen = true;
    }
  }

  function closeLightbox() {
    lightboxOpen = false;
    lightboxSrc = '';
  }

  function handleKeydown(e) {
    if (e.key === 'Escape' && lightboxOpen) closeLightbox();
  }

  // Lazy image handler: sets loading=lazy and the .loaded class for shimmer skeleton
  function setupLazyImages(root = document) {
    root.querySelectorAll('.prose img').forEach((img) => {
      if (!(img instanceof HTMLImageElement)) return;
      img.loading = 'lazy';
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      }
    });
  }

  onMount(() => {
    setupLazyImages();
    // Watch for dynamically added content (e.g. after navigation)
    const observer = new MutationObserver(() => setupLazyImages());
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>Helix</title>
  <meta name="description" content="A high-performance personal blog built with SvelteKit and Material Design 3." />
  <link rel="alternate" type="application/rss+xml" title="Helix RSS" href="/rss.xml" />
</svelte:head>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="min-h-screen bg-surface text-on-surface flex flex-col" onclick={handleClick}>
  {#if isBlogPost}<ReadingProgress />{/if}
  <BackToTop />
  <Navbar />
  <main class="pt-20 page-transition flex-1">
    {@render children()}
  </main>
  <Footer />
</div>

<!-- Lightbox -->
{#if lightboxOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="lightbox-overlay" onclick={closeLightbox}>
    <img src={lightboxSrc} alt="Enlarged view" />
  </div>
{/if}
