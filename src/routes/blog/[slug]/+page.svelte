<script>
  import AuthorBio from '$lib/components/AuthorBio.svelte';
  import TableOfContents from '$lib/components/TableOfContents.svelte';

  let { data } = $props();

  let formattedDate = $derived(
    new Date(data.meta.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  );
</script>

<svelte:head>
  <title>{data.meta.title} — Helix</title>
  <meta name="description" content={data.meta.description} />
  <!-- Open Graph -->
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:type" content="article" />
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.meta.title} />
  <meta name="twitter:description" content={data.meta.description} />
  <!-- JSON-LD Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.meta.title,
    description: data.meta.description,
    datePublished: data.meta.date,
    author: { '@type': 'Person', name: 'Heshan' }
  })}</script>`}
</svelte:head>

<div class="max-w-6xl mx-auto px-6 py-12 flex gap-12">
  <!-- Main Article -->
  <article class="max-w-3xl flex-1 min-w-0">
    <!-- Header -->
    <header class="mb-12 text-center">
      <div class="flex items-center justify-center gap-3 text-label-lg text-on-surface-variant mb-4">
        <span>{formattedDate}</span>
        {#if data.readingTime}
          <span class="w-1 h-1 rounded-full bg-outline"></span>
          <span>{data.readingTime}</span>
        {/if}
      </div>
      <h1 class="text-display-sm md:text-display-md text-on-surface mb-4">{data.meta.title}</h1>
      <p class="text-body-lg text-on-surface-variant max-w-xl mx-auto">{data.meta.description}</p>

      <!-- Tags -->
      {#if data.meta.tags?.length}
        <div class="flex flex-wrap justify-center gap-2 mt-6">
          {#each data.meta.tags as tag}
            <a href="/#posts" class="px-3 py-1 text-label-sm bg-surface-container text-on-surface-variant rounded-full hover:bg-surface-container-high transition-colors">
              #{tag}
            </a>
          {/each}
        </div>
      {/if}

      <div class="w-16 h-1 bg-primary rounded-full mx-auto mt-8"></div>
    </header>

    <!-- Markdown Body -->
    <div class="prose">
      <data.content />
    </div>

    <!-- Author Bio -->
    <div class="mt-16 pt-8 border-t border-outline-variant/20">
      <AuthorBio name="Heshan" github="heshanJ" twitter="" />
    </div>

    <!-- Back link -->
    <div class="mt-8">
      <a
        href="/#posts"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200"
      >
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to blog
      </a>
    </div>
  </article>

  <!-- Table of Contents -->
  <TableOfContents headings={data.headings ?? []} />
</div>
