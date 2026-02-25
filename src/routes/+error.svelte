<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — Helix</title>
</svelte:head>

<section class="max-w-3xl mx-auto px-6 py-24 text-center">
  <div class="animate-fade-in">
    <div class="text-display-lg text-primary mb-6">404</div>
    <h1 class="text-headline-lg text-on-surface mb-4">Page not found</h1>
    <p class="text-body-lg text-on-surface-variant mb-10 max-w-md mx-auto">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      class="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-inverse-on-surface text-label-lg hover:shadow-m3-2 transition-all duration-200"
    >
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Go home
    </a>
  </div>
</section>
