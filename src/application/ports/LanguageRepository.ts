import type { Language } from "@/domain/language/Language";

export interface LanguageRepository {
  getLanguage(): Language | null;
  setLanguage(language: Language): void;
}
