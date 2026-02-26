/**
 * Theme store — always dark mode.
 */

class ThemeStore {
  current = $state("dark");

  get isDark() {
    return true;
  }

  constructor() {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }
}

export const theme = new ThemeStore();
