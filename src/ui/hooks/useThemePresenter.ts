import { useEffect, useState } from "react";
import type { ThemeMode } from "@/domain/theme/Theme";
import { useAppContext } from "@/ui/context/AppContext";

export function useThemePresenter() {
  const { themePresenter } = useAppContext();

  const [mode, setMode] = useState<ThemeMode>(() => themePresenter.resolveInitialMode());
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    themePresenter.resolveInitialSystemTheme(),
  );

  useEffect(() => themePresenter.applyModeToDocument(mode), [mode, themePresenter]);
  useEffect(() => themePresenter.subscribeToSystemThemeChanges(setSystemTheme), [themePresenter]);

  return {
    theme: themePresenter.resolveEffectiveTheme(mode, systemTheme),
    toggle: () => setMode((current) => themePresenter.resolveNextMode(current)),
  };
}
