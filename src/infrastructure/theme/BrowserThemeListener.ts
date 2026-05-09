import type { ThemeListener } from "@/application/ports/ThemeListener";

const LIGHT_QUERY = "(prefers-color-scheme: light)";

export class BrowserThemeListener implements ThemeListener {
  getTheme(): "light" | "dark" {
    try {
      return window.matchMedia(LIGHT_QUERY).matches ? "light" : "dark";
    } catch {
      return "dark";
    }
  }

  subscribe(handler: (theme: "light" | "dark") => void): () => void {
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
}
