export interface ThemeListener {
  getTheme(): "light" | "dark";
  subscribe(handler: (theme: "light" | "dark") => void): () => void;
}
