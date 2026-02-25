<script>
  import PostCard from '$lib/components/PostCard.svelte';
  import { getAllTags } from '$lib/posts.js';

  let { data } = $props();

  let activeTag = $state('');
  let searchQuery = $state('');
  let allTags = $derived(getAllTags(data.posts));
  let filteredPosts = $derived(
    data.posts.filter(p => {
      const matchTag = activeTag ? p.meta.tags?.includes(activeTag) : true;
      const q = searchQuery.toLowerCase();
      const matchSearch = q ? (p.meta.title.toLowerCase().includes(q) || p.meta.description.toLowerCase().includes(q)) : true;
      return matchTag && matchSearch;
    })
  );
</script>

<svelte:head>
  <title>Helix — Home</title>
  <meta property="og:title" content="Helix" />
  <meta property="og:description" content="A high-performance personal blog built with SvelteKit and Material Design 3." />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="max-w-3xl mx-auto px-6 py-16">
  <!-- Hero -->
  <div class="mb-16 animate-fade-in">
    <h1 class="text-display-sm md:text-display-md text-on-surface mb-4">
      Hey, I'm <span class="text-primary">Heshan</span>
    </h1>
    <p class="text-headline-sm text-on-surface-variant max-w-lg">
      Welcome to my corner of the internet. I write about code, design, and everything in between.
    </p>
  </div>

  <!-- All Posts & Search -->
  <div id="posts" class="animate-slide-up" style="animation-delay: 150ms; opacity: 0;">
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-headline-md text-on-surface">Explore Posts</h2>
    </div>

    <!-- Search Bar -->
    <div class="mb-8">
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg class="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          bind:value={searchQuery}
          placeholder="Search posts..."
          class="w-full py-4 pl-12 pr-4 bg-surface-container rounded-full text-body-lg text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-outline-variant/20"
        >
      </div>
    </div>

    <!-- Tag Filter -->
    {#if allTags.length > 0}
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          onclick={() => activeTag = ''}
          class="px-4 py-2 rounded-full text-label-lg transition-all duration-200
                 {activeTag === ''
                   ? 'bg-primary text-inverse-on-surface'
                   : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}"
        >
          All
        </button>
        {#each allTags as tag}
          <button
            onclick={() => activeTag = activeTag === tag ? '' : tag}
            class="px-4 py-2 rounded-full text-label-lg transition-all duration-200
                   {activeTag === tag
                     ? 'bg-primary text-inverse-on-surface'
                     : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}"
          >
            #{tag}
          </button>
        {/each}
      </div>
    {/if}

    <!-- Posts List -->
    <div class="flex flex-col gap-4">
      {#each filteredPosts as post}
        <PostCard
          title={post.meta.title}
          description={post.meta.description}
          date={post.meta.date}
          slug={post.slug}
          readingTime={post.readingTime}
          tags={post.meta.tags ?? []}
        />
      {:else}
        <p class="text-body-lg text-on-surface-variant py-8 text-center bg-surface-container rounded-3xl border border-outline-variant/20">No posts found matching your criteria.</p>
      {/each}
    </div>
  </div>
</section>
