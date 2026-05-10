import type { UIStringsRepository } from "@/application/ports/UIStringsRepository";
import type { Language } from "@/domain/language/Language";
import type { UIStrings } from "@/domain/language/UIStrings";
import * as en from "@/infrastructure/language/strings/en";
import * as es from "@/infrastructure/language/strings/es";

const DATA: Record<Language, UIStrings> = {
  en: en.STRINGS,
  es: es.STRINGS,
};

export class StaticUIStringsRepository implements UIStringsRepository {
  getUIStrings(language: Language): UIStrings {
    return DATA[language];
  }
}
