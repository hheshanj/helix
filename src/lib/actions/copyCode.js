/**
 * Svelte action: injects a "Copy" button into every <pre> inside the target element.
 * Usage: <div use:copyCode>...</div>
 * @param {HTMLElement} node
 */
export function copyCode(node) {
  /** @type {HTMLElement[]} */
  const buttons = [];

  function setup() {
    node.querySelectorAll("pre").forEach((pre) => {
      // Avoid double-injecting
      if (pre.querySelector(".copy-btn")) return;

      // Wrap pre in a relative container if not already
      pre.style.position = "relative";

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.setAttribute("aria-label", "Copy code");
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>`;

      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const code = pre.querySelector("code")?.innerText ?? pre.innerText;
        try {
          await navigator.clipboard.writeText(code);
          btn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>`;
          btn.classList.add("copied");
          setTimeout(() => {
            btn.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>`;
            btn.classList.remove("copied");
          }, 2000);
        } catch {
          const span = btn.querySelector("span");
          if (span) span.textContent = "Failed";
        }
      });

      pre.appendChild(btn);
      buttons.push(btn);
    });
  }

  // Run after mount; use a short timeout to allow mdsvex to render
  setTimeout(setup, 50);

  return {
    destroy() {
      buttons.forEach((btn) => btn.remove());
    },
  };
}
