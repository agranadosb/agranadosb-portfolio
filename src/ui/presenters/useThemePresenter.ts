import { useEffect, useState } from "react";
import { ThemeUseCase } from "@/application/usecases/ThemeUseCase";
import type { ThemeMode } from "@/domain/theme/Theme";
import { BrowserThemeListener } from "@/infrastructure/theme/BrowserThemeListener";
import { LocalStorageThemeRepository } from "@/infrastructure/theme/LocalStorageThemeRepository";

const themeUseCase = new ThemeUseCase(
  new BrowserThemeListener(),
  new LocalStorageThemeRepository(),
);

export function useThemePresenter() {
  const [mode, setMode] = useState<ThemeMode>(() => themeUseCase.getInitialMode());
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    themeUseCase.getSystemTheme(),
  );

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    if (mode !== "system") document.documentElement.classList.add(mode);
    themeUseCase.persistMode(mode);
  }, [mode]);

  useEffect(() => {
    return themeUseCase.subscribeToSystemChanges(setSystemTheme);
  }, []);

  const effectiveTheme = mode === "system" ? systemTheme : mode;
  const toggle = () => setMode((current) => themeUseCase.getNextMode(current));

  return { theme: effectiveTheme, toggle };
}
