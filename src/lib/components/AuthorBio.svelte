<script>
  let { name = 'Heshan', bio = 'Developer, designer, and writer. I build things for the web and write about the process.', github = '', twitter = '' } = $props();
</script>

<aside class="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-surface-container rounded-3xl border border-outline-variant/20">
  <!-- Avatar placeholder -->
  {#if github}
    <img src="https://github.com/{github}.png" alt="{name}'s avatar" class="w-16 h-16 rounded-full bg-primary-container shrink-0 object-cover shadow-sm border border-outline-variant/20" />
  {:else}
    <div class="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-headline-md text-primary shrink-0">
      {name.charAt(0)}
    </div>
  {/if}

  <div class="flex flex-col gap-2">
    <span class="text-title-md text-on-surface font-semibold">Written by {name}</span>
    <p class="text-body-md text-on-surface-variant">{bio}</p>
    {#if github || twitter}
      <div class="flex items-center gap-3 mt-1">
        {#if github}
          <a href="https://github.com/{github}" target="_blank" rel="noopener noreferrer" class="text-label-lg text-primary hover:underline underline-offset-4">GitHub</a>
        {/if}
        {#if twitter}
          <a href="https://x.com/{twitter}" target="_blank" rel="noopener noreferrer" class="text-label-lg text-primary hover:underline underline-offset-4">X / Twitter</a>
        {/if}
      </div>
    {/if}
  </div>
</aside>
