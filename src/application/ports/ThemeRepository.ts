export interface ThemeRepository {
  getMode(): "light" | "dark" | null;
  setMode(mode: "light" | "dark"): void;
  clearMode(): void;
}
