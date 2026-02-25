<script>
  let progress = $state(0);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  }
</script>

<svelte:window onscroll={handleScroll} />

<div
  class="reading-progress-bar"
  style="width: {progress}%"
  role="progressbar"
  aria-valuenow={Math.round(progress)}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Reading progress"
></div>


