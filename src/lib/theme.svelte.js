/**
 * Svelte 5 runes-based theme store.
 * Manages light/dark mode via the `dark` class on <html>.
 * Persists preference to localStorage.
 */

class ThemeStore {
  /** @type {'light' | 'dark'} */
  current = $state("dark");

  constructor() {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      this.current = saved === "light" ? "light" : "dark";
      this.#apply();
    }
  }

  get isDark() {
    return this.current === "dark";
  }

  toggle() {
    this.current = this.current === "dark" ? "light" : "dark";
    this.#apply();
  }

  #apply() {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    if (this.current === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", this.current);
  }
}

export const theme = new ThemeStore();
