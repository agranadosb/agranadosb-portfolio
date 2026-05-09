import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GetEducationUseCase } from "@/application/usecases/GetEducationUseCase";
import { GetHonorsUseCase } from "@/application/usecases/GetHonorsUseCase";
import { GetJobsUseCase } from "@/application/usecases/GetJobsUseCase";
import { GetProfileUseCase } from "@/application/usecases/GetProfileUseCase";
import { GetSkillsUseCase } from "@/application/usecases/GetSkillsUseCase";
import { ThemeUseCase } from "@/application/usecases/ThemeUseCase";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";
import { BrowserThemeListener } from "@/infrastructure/theme/BrowserThemeListener";
import { LocalStorageThemeRepository } from "@/infrastructure/theme/LocalStorageThemeRepository";
import { AppProvider } from "@/ui/context/AppContext";
import { CVPage } from "@/ui/screens/cv/CV";
import "@/index.css";

const profileRepository = new StaticProfileRepository();
const useCases = {
  getProfileUseCase: new GetProfileUseCase(profileRepository),
  getJobsUseCase: new GetJobsUseCase(profileRepository),
  getEducationUseCase: new GetEducationUseCase(profileRepository),
  getSkillsUseCase: new GetSkillsUseCase(profileRepository),
  getHonorsUseCase: new GetHonorsUseCase(profileRepository),
  themeUseCase: new ThemeUseCase(new BrowserThemeListener(), new LocalStorageThemeRepository()),
};

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider value={useCases}>
      <CVPage />
    </AppProvider>
  </StrictMode>,
);
