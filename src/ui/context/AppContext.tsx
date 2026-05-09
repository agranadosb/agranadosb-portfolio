import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import type { GetEducationUseCase } from "@/application/usecases/GetEducationUseCase";
import type { GetHonorsUseCase } from "@/application/usecases/GetHonorsUseCase";
import type { GetJobsUseCase } from "@/application/usecases/GetJobsUseCase";
import type { GetProfileUseCase } from "@/application/usecases/GetProfileUseCase";
import type { GetSkillsUseCase } from "@/application/usecases/GetSkillsUseCase";
import type { ThemeUseCase } from "@/application/usecases/ThemeUseCase";

export interface AppContextValue {
  getProfileUseCase: GetProfileUseCase;
  getJobsUseCase: GetJobsUseCase;
  getEducationUseCase: GetEducationUseCase;
  getSkillsUseCase: GetSkillsUseCase;
  getHonorsUseCase: GetHonorsUseCase;
  themeUseCase: ThemeUseCase;
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
