<script>
  let progress = $state(0);

  function handleScroll() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Use the Giscus comment section as the endpoint if present
    const commentsEl = document.querySelector('.giscus-container');
    let endPoint;

    if (commentsEl) {
      // 100% when the top of the comments section reaches the viewport
      endPoint = commentsEl.getBoundingClientRect().top + scrollTop - viewportHeight;
    } else {
      endPoint = document.documentElement.scrollHeight - viewportHeight;
    }

    progress = endPoint > 0 ? Math.min(100, (scrollTop / endPoint) * 100) : 0;
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


