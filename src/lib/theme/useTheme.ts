import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme-mode";
const DARK_QUERY = "(prefers-color-scheme: dark)";

export function useTheme(): { theme: Theme | null; toggleTheme: () => void } {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const systemQuery = window.matchMedia(DARK_QUERY);
    const sync = () => setTheme(readCurrentTheme());
    sync();
    systemQuery.addEventListener("change", sync);
    return () => systemQuery.removeEventListener("change", sync);
  }, []);

  return {
    theme,
    toggleTheme: () => {
      const next: Theme = readCurrentTheme() === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      storeTheme(next);
      setTheme(next);
    },
  };
}

function readCurrentTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
}

function storeTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    console.warn("Unable to access localStorage, theme preference will not be saved.");
  }
}
