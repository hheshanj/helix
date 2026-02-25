<script>
  let visible = $state(false);

  function handleScroll() {
    visible = window.scrollY > 300;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window onscroll={handleScroll} />

{#if visible}
  <button
    onclick={scrollToTop}
    class="back-to-top"
    aria-label="Back to top"
  >
    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>
{/if}


