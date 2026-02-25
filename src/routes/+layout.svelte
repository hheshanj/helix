<script>
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  let { children } = $props();

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
</script>

<svelte:head>
  <title>Helix</title>
  <meta name="description" content="A high-performance personal blog built with SvelteKit and Material Design 3." />
  <link rel="alternate" type="application/rss+xml" title="Helix RSS" href="/rss.xml" />
</svelte:head>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="min-h-screen bg-surface text-on-surface flex flex-col" onclick={handleClick}>
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
