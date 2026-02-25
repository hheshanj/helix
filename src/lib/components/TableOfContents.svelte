<script>
  /** @type {{ headings?: Array<{id: string, text: string, level: number}> }} */
  let { headings = [] } = $props();
</script>

{#if headings.length > 0}
  <nav aria-label="Table of contents" class="hidden xl:block sticky top-24 w-56 shrink-0">
    <span class="text-label-lg text-on-surface mb-4 block">On this page</span>
    <ul class="flex flex-col gap-1 border-l border-outline-variant/20 pl-4">
      {#each headings as heading}
        <li>
          <a
            href="#{heading.id}"
            class="text-body-sm text-on-surface-variant hover:text-primary transition-colors block py-1
                   {heading.level === 3 ? 'pl-3' : ''}"
          >
            {heading.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
