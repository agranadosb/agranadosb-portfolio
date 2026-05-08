import { useEffect, useState } from "react";
import { LocalStorageThemeRepository } from "@/repositories/LocalStorageThemeRepository";
import { BrowserThemeListener } from "@/repositories/ThemeListener";
import { type ThemeMode, ThemeUseCase } from "@/usecases/ThemeUseCase";

const themeUseCase = new ThemeUseCase(
  new BrowserThemeListener(),
  new LocalStorageThemeRepository(),
);

export function useTheme() {
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
