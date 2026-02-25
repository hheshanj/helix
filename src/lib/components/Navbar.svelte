<script>
  import { theme } from '$lib/theme.svelte.js';

  let scrolled = $state(false);
  let menuOpen = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 10;
  }

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<svelte:window onscroll={handleScroll} />

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
    ? 'bg-surface-container/80 backdrop-blur-xl shadow-m3-2 border-b border-outline-variant/20'
    : 'bg-transparent'}"
>
  <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="text-title-lg text-on-surface hover:text-primary transition-colors">
      Helix
    </a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-2">
      <a href="/" class="px-4 py-2 rounded-full text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200">
        Home
      </a>
      <a href="/#posts" class="px-4 py-2 rounded-full text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all duration-200">
        Search
      </a>

      <!-- RSS Feed Link -->
      <a
        href="/rss.xml"
        data-sveltekit-reload
        class="p-2 rounded-full hover:bg-surface-container-high transition-all duration-200 ml-1 text-on-surface-variant hover:text-primary"
        aria-label="RSS Feed"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
        </svg>
      </a>

      <!-- Theme Toggle -->
      <button
        onclick={() => theme.toggle()}
        class="p-2 rounded-full hover:bg-surface-container-high transition-all duration-200 ml-2"
        aria-label="Toggle theme"
      >
        {#if theme.isDark}
          <!-- Sun icon -->
          <svg class="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <path stroke-linecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        {:else}
          <!-- Moon icon -->
          <svg class="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <div class="md:hidden flex items-center gap-1">
      <!-- Theme Toggle (mobile) -->
      <button
        onclick={() => theme.toggle()}
        class="p-2 rounded-full hover:bg-surface-container-high transition-colors"
        aria-label="Toggle theme"
      >
        {#if theme.isDark}
          <svg class="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5" />
            <path stroke-linecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        {:else}
          <svg class="w-5 h-5 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        {/if}
      </button>

      <button
        onclick={toggleMenu}
        class="p-2 rounded-full hover:bg-surface-container-high transition-colors"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <svg class="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          {#if menuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div id="mobile-menu" role="navigation" class="md:hidden bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/20 animate-slide-up">
      <div class="px-6 py-4 flex flex-col gap-2">
        <a href="/" onclick={() => menuOpen = false} class="px-4 py-3 rounded-2xl text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
          Home
        </a>
        <a href="/#posts" onclick={() => menuOpen = false} class="px-4 py-3 rounded-2xl text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors">
          Search
        </a>
        <a href="/rss.xml" data-sveltekit-reload class="px-4 py-3 rounded-2xl text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
          RSS Feed
        </a>
      </div>
    </div>
  {/if}
</nav>
