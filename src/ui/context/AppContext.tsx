import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import type { Language } from "@/domain/language/Language";
import { createAppContextValue } from "@/ui/context/createAppContextValue";
import type { AboutPresenter } from "@/ui/presenters/AboutPresenter";
import type { EducationPresenter } from "@/ui/presenters/EducationPresenter";
import type { HonorsPresenter } from "@/ui/presenters/HonorsPresenter";
import type { JobsPresenter } from "@/ui/presenters/JobsPresenter";
import type { LanguagePresenter } from "@/ui/presenters/LanguagePresenter";
import type { ProfilePresenter } from "@/ui/presenters/ProfilePresenter";
import type { SkillsPresenter } from "@/ui/presenters/SkillsPresenter";
import type { ThemePresenter } from "@/ui/presenters/ThemePresenter";
import type { UIStringsPresenter } from "@/ui/presenters/UIStringsPresenter";

export interface AppContextValue {
  language: Language;
  profilePresenter: ProfilePresenter;
  aboutPresenter: AboutPresenter;
  jobsPresenter: JobsPresenter;
  educationPresenter: EducationPresenter;
  skillsPresenter: SkillsPresenter;
  honorsPresenter: HonorsPresenter;
  themePresenter: ThemePresenter;
  languagePresenter: LanguagePresenter;
  uiStringsPresenter: UIStringsPresenter;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("language");
      if (stored === "en" || stored === "es") return stored;
    } catch {
      console.warn("Could not access localStorage to get language");
    }
    try {
      return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    } catch {
      console.warn("Could not access navigator to get language");
      return "en";
    }
  });

  const contextValue = useMemo(() => createAppContextValue(language, setLanguage), [language]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (ctx === null) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
