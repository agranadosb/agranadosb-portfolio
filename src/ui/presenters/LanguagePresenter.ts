import type { LanguageUseCase } from "@/application/usecases/LanguageUseCase";
import type { Language } from "@/domain/language/Language";

export class LanguagePresenter {
  private readonly useCase: LanguageUseCase;
  private readonly onLanguageChange: (language: Language) => void;

  constructor(useCase: LanguageUseCase, onLanguageChange: (language: Language) => void) {
    this.useCase = useCase;
    this.onLanguageChange = onLanguageChange;
  }

  getLanguage(): Language {
    return this.useCase.getInitialLanguage();
  }

  setLanguage(language: Language): void {
    this.useCase.persistLanguage(language);
    this.onLanguageChange(language);
  }

  getNextLanguage(current: Language): Language {
    return this.useCase.getNextLanguage(current);
  }
}
