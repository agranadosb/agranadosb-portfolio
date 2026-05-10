import type { LanguageRepository } from "@/application/ports/LanguageRepository";
import type { Language } from "@/domain/language/Language";

const STORAGE_KEY = "language";
const WARN_MESSAGE = "Unable to access localStorage, language preference will not be saved.";

export class LocalStorageLanguageRepository implements LanguageRepository {
  getLanguage(): Language | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") return stored;
      return null;
    } catch {
      console.warn(WARN_MESSAGE);
      return null;
    }
  }

  setLanguage(language: Language): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      console.warn(WARN_MESSAGE);
    }
  }
}
