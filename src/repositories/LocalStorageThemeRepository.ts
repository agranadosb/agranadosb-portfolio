import type { ThemeRepository } from "@/repositories/ThemeRepository";

const STORAGE_KEY = "theme-mode";
const WARN_MESSAGE = "Unable to access localStorage, theme preference will not be saved.";

export class LocalStorageThemeRepository implements ThemeRepository {
  getMode(): "light" | "dark" | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark") return stored;
      return null;
    } catch {
      console.warn(WARN_MESSAGE);
      return null;
    }
  }

  setMode(mode: "light" | "dark"): void {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      console.warn(WARN_MESSAGE);
    }
  }

  clearMode(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      console.warn(WARN_MESSAGE);
    }
  }
}
