import { useEffect, useState } from "react";

export type Theme = "light" | "dark";
type ThemeMode = Theme | "system";

const STORAGE_KEY = "theme-mode";
const WARN_MESSAGE = "Unable to access localStorage, theme preference will not be saved.";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [mode, setMode] = useState<ThemeMode>(() => readStoredMode() ?? "system");
  const [systemTheme, setSystemTheme] = useState<Theme>(readSystemTheme);

  useEffect(() => applyMode(mode), [mode]);
  useEffect(() => subscribeToSystemTheme(setSystemTheme), []);

  const theme = mode === "system" ? systemTheme : mode;

  return {
    theme,
    toggleTheme: () => setMode(theme === "dark" ? "light" : "dark"),
  };
}

function applyMode(mode: ThemeMode): void {
  document.documentElement.classList.remove("light", "dark");
  if (mode === "system") {
    clearStoredMode();
  } else {
    document.documentElement.classList.add(mode);
    storeMode(mode);
  }
}

function readSystemTheme(): Theme {
  try {
    return window.matchMedia(LIGHT_QUERY).matches ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function subscribeToSystemTheme(handler: (theme: Theme) => void): () => void {
  try {
    const mq = window.matchMedia(LIGHT_QUERY);
    const listener = (e: MediaQueryListEvent) => handler(e.matches ? "light" : "dark");
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  } catch {
    console.warn("Unable to access matchMedia, system theme changes will not be detected.");
    return () => {};
  }
}

function readStoredMode(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return null;
  } catch {
    console.warn(WARN_MESSAGE);
    return null;
  }
}

function storeMode(mode: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    console.warn(WARN_MESSAGE);
  }
}

function clearStoredMode(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    console.warn(WARN_MESSAGE);
  }
}
