import { useEffect, useRef, useState } from "react";
import type { ThemeUseCase } from "@/application/usecases/ThemeUseCase";
import type { ThemeMode } from "@/domain/theme/Theme";
import { useAppContext } from "@/ui/context/AppContext";

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

export function useThemePresenter() {
  const { themeUseCase } = useAppContext();
  const presenterRef = useRef<ThemePresenter | null>(null);
  if (presenterRef.current === null) presenterRef.current = new ThemePresenter(themeUseCase);
  const presenter = presenterRef.current;

  const [mode, setMode] = useState<ThemeMode>(() => presenter.resolveInitialMode());
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    presenter.resolveInitialSystemTheme(),
  );

  useEffect(() => presenter.applyModeToDocument(mode), [mode, presenter]);
  useEffect(() => presenter.subscribeToSystemThemeChanges(setSystemTheme), [presenter]);

  return {
    theme: presenter.resolveEffectiveTheme(mode, systemTheme),
    toggle: () => setMode((current) => presenter.resolveNextMode(current)),
  };
}
