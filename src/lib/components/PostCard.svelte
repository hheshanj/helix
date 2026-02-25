<script>
  /** @type {{ title: string, description: string, date: string, slug: string, readingTime?: string, tags?: string[] }} */
  let { title, description, date, slug, readingTime = '', tags = [] } = $props();

  let formattedDate = $derived(
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  );
</script>

<a
  href="/blog/{slug}"
  class="group block bg-surface-container rounded-3xl border border-outline-variant/20 p-6
         hover:bg-surface-container-high hover:shadow-m3-2 hover:-translate-y-1
         transition-all duration-300 ease-out"
>
  <div class="flex flex-col gap-3">
    <!-- Date & Reading Time -->
    <div class="flex items-center gap-3 text-label-md text-on-surface-variant">
      <span>{formattedDate}</span>
      {#if readingTime}
        <span class="w-1 h-1 rounded-full bg-outline"></span>
        <span>{readingTime}</span>
      {/if}
    </div>

    <!-- Title -->
    <h2 class="text-title-lg text-on-surface group-hover:text-primary transition-colors duration-200">
      {title}
    </h2>

    <!-- Description -->
    <p class="text-body-md text-on-surface-variant line-clamp-2">
      {description}
    </p>

    <!-- Tags -->
    {#if tags.length > 0}
      <div class="flex flex-wrap gap-2 mt-1">
        {#each tags as tag}
          <span class="px-3 py-1 text-label-sm bg-surface-container-high text-on-surface-variant rounded-full">
            #{tag}
          </span>
        {/each}
      </div>
    {/if}

    <!-- Read more indicator -->
    <div class="flex items-center gap-1 text-label-lg text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
      <span>Read more</span>
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</a>
