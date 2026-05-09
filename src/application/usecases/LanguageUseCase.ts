import type { LanguageRepository } from "@/application/ports/LanguageRepository";
import type { Language } from "@/domain/language/Language";

export class LanguageUseCase {
  private readonly repository: LanguageRepository;
  private readonly browserLanguage: Language;

  constructor(repository: LanguageRepository, browserLanguage: Language) {
    this.repository = repository;
    this.browserLanguage = browserLanguage;
  }

  getInitialLanguage(): Language {
    return this.repository.getLanguage() ?? this.browserLanguage;
  }

  persistLanguage(language: Language): void {
    this.repository.setLanguage(language);
  }

  getNextLanguage(current: Language): Language {
    return current === "en" ? "es" : "en";
  }
}
