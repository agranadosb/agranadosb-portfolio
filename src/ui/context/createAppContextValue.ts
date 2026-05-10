import { GetAboutUseCase } from "@/application/usecases/GetAboutUseCase";
import { GetEducationUseCase } from "@/application/usecases/GetEducationUseCase";
import { GetHonorsUseCase } from "@/application/usecases/GetHonorsUseCase";
import { GetJobsUseCase } from "@/application/usecases/GetJobsUseCase";
import { GetProfileUseCase } from "@/application/usecases/GetProfileUseCase";
import { GetSkillsUseCase } from "@/application/usecases/GetSkillsUseCase";
import { GetUIStringsUseCase } from "@/application/usecases/GetUIStringsUseCase";
import { LanguageUseCase } from "@/application/usecases/LanguageUseCase";
import { ThemeUseCase } from "@/application/usecases/ThemeUseCase";
import type { Language } from "@/domain/language/Language";
import { detectBrowserLanguage } from "@/infrastructure/language/detectBrowserLanguage";
import { LocalStorageLanguageRepository } from "@/infrastructure/language/LocalStorageLanguageRepository";
import { StaticUIStringsRepository } from "@/infrastructure/language/StaticUIStringsRepository";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";
import { BrowserThemeListener } from "@/infrastructure/theme/BrowserThemeListener";
import { LocalStorageThemeRepository } from "@/infrastructure/theme/LocalStorageThemeRepository";
import type { AppContextValue } from "@/ui/context/AppContext";
import { AboutPresenter } from "@/ui/presenters/AboutPresenter";
import { EducationPresenter } from "@/ui/presenters/EducationPresenter";
import { HonorsPresenter } from "@/ui/presenters/HonorsPresenter";
import { JobsPresenter } from "@/ui/presenters/JobsPresenter";
import { LanguagePresenter } from "@/ui/presenters/LanguagePresenter";
import { ProfilePresenter } from "@/ui/presenters/ProfilePresenter";
import { SkillsPresenter } from "@/ui/presenters/SkillsPresenter";
import { ThemePresenter } from "@/ui/presenters/ThemePresenter";
import { UIStringsPresenter } from "@/ui/presenters/UIStringsPresenter";

export function detectInitialLanguage(): Language {
  const useCase = new LanguageUseCase(
    new LocalStorageLanguageRepository(),
    detectBrowserLanguage(),
  );
  return useCase.getInitialLanguage();
}

export function createAppContextValue(
  language: Language,
  onLanguageChange: (language: Language) => void,
): AppContextValue {
  const profileRepository = new StaticProfileRepository(language);
  const languageRepository = new LocalStorageLanguageRepository();
  const uiStringsRepository = new StaticUIStringsRepository();

  const languageUseCase = new LanguageUseCase(languageRepository, detectBrowserLanguage());
  const languagePresenter = new LanguagePresenter(languageUseCase, onLanguageChange);

  return {
    language,
    aboutPresenter: new AboutPresenter(new GetAboutUseCase(profileRepository)),
    profilePresenter: new ProfilePresenter(new GetProfileUseCase(profileRepository)),
    jobsPresenter: new JobsPresenter(new GetJobsUseCase(profileRepository)),
    educationPresenter: new EducationPresenter(new GetEducationUseCase(profileRepository)),
    skillsPresenter: new SkillsPresenter(new GetSkillsUseCase(profileRepository)),
    honorsPresenter: new HonorsPresenter(new GetHonorsUseCase(profileRepository)),
    themePresenter: new ThemePresenter(
      new ThemeUseCase(new BrowserThemeListener(), new LocalStorageThemeRepository()),
    ),
    languagePresenter,
    uiStringsPresenter: new UIStringsPresenter(new GetUIStringsUseCase(uiStringsRepository)),
  };
}
