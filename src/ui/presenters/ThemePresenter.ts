import type { ThemeUseCase } from "@/application/usecases/ThemeUseCase";
import type { ThemeMode } from "@/domain/theme/Theme";

export class ThemePresenter {
  private readonly useCase: ThemeUseCase;

  constructor(useCase: ThemeUseCase) {
    this.useCase = useCase;
  }

  resolveInitialMode(): ThemeMode {
    return this.useCase.getInitialMode();
  }

  resolveInitialSystemTheme(): "light" | "dark" {
    return this.useCase.getSystemTheme();
  }

  applyModeToDocument(mode: ThemeMode): void {
    document.documentElement.classList.remove("light", "dark");
    if (mode !== "system") document.documentElement.classList.add(mode);
    this.useCase.persistMode(mode);
  }

  subscribeToSystemThemeChanges(handler: (theme: "light" | "dark") => void): () => void {
    return this.useCase.subscribeToSystemChanges(handler);
  }

  resolveEffectiveTheme(mode: ThemeMode, systemTheme: "light" | "dark"): "light" | "dark" {
    return mode === "system" ? systemTheme : mode;
  }

  resolveNextMode(current: ThemeMode): ThemeMode {
    return this.useCase.getNextMode(current);
  }
}
