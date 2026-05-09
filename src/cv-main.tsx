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
import { EducationPresenter } from "@/ui/presenters/EducationPresenter";
import { HonorsPresenter } from "@/ui/presenters/HonorsPresenter";
import { JobsPresenter } from "@/ui/presenters/JobsPresenter";
import { ProfilePresenter } from "@/ui/presenters/ProfilePresenter";
import { SkillsPresenter } from "@/ui/presenters/SkillsPresenter";
import { ThemePresenter } from "@/ui/presenters/ThemePresenter";
import { CVPage } from "@/ui/screens/cv/CV";
import "@/index.css";

const profileRepository = new StaticProfileRepository();

const presenters = {
  profilePresenter: new ProfilePresenter(new GetProfileUseCase(profileRepository)),
  jobsPresenter: new JobsPresenter(new GetJobsUseCase(profileRepository)),
  educationPresenter: new EducationPresenter(new GetEducationUseCase(profileRepository)),
  skillsPresenter: new SkillsPresenter(new GetSkillsUseCase(profileRepository)),
  honorsPresenter: new HonorsPresenter(new GetHonorsUseCase(profileRepository)),
  themePresenter: new ThemePresenter(
    new ThemeUseCase(new BrowserThemeListener(), new LocalStorageThemeRepository()),
  ),
};

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider value={presenters}>
      <CVPage />
    </AppProvider>
  </StrictMode>,
);
