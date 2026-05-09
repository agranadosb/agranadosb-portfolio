import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type { AboutPresenter } from "@/ui/presenters/AboutPresenter";
import type { EducationPresenter } from "@/ui/presenters/EducationPresenter";
import type { HonorsPresenter } from "@/ui/presenters/HonorsPresenter";
import type { JobsPresenter } from "@/ui/presenters/JobsPresenter";
import type { ProfilePresenter } from "@/ui/presenters/ProfilePresenter";
import type { SkillsPresenter } from "@/ui/presenters/SkillsPresenter";
import type { ThemePresenter } from "@/ui/presenters/ThemePresenter";

export interface AppContextValue {
  profilePresenter: ProfilePresenter;
  aboutPresenter: AboutPresenter;
  jobsPresenter: JobsPresenter;
  educationPresenter: EducationPresenter;
  skillsPresenter: SkillsPresenter;
  honorsPresenter: HonorsPresenter;
  themePresenter: ThemePresenter;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children, value }: { children: ReactNode; value: AppContextValue }) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (ctx === null) throw new Error("useAppContext must be used within AppProvider");
  return ctx;
}
