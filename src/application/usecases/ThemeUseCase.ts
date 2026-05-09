import type { ThemeListener } from "@/application/ports/ThemeListener";
import type { ThemeRepository } from "@/application/ports/ThemeRepository";
import type { ThemeMode } from "@/domain/theme/Theme";

export class ThemeUseCase {
  private readonly systemListener: ThemeListener;
  private readonly themeRepository: ThemeRepository;

  constructor(systemListener: ThemeListener, themeRepository: ThemeRepository) {
    this.systemListener = systemListener;
    this.themeRepository = themeRepository;
  }

  getInitialMode(): ThemeMode {
    return this.themeRepository.getMode() ?? "system";
  }

  getSystemTheme(): "light" | "dark" {
    return this.systemListener.getTheme();
  }

  persistMode(mode: ThemeMode): void {
    if (mode === "system") {
      this.themeRepository.clearMode();
    } else {
      this.themeRepository.setMode(mode);
    }
  }

  getNextMode(current: ThemeMode): "light" | "dark" {
    const effective = current === "system" ? this.systemListener.getTheme() : current;
    return effective === "dark" ? "light" : "dark";
  }

  subscribeToSystemChanges(handler: (theme: "light" | "dark") => void): () => void {
    return this.systemListener.subscribe(handler);
  }
}
