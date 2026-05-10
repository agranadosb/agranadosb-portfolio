import type { Language } from "@/domain/language/Language";
import type { UIStrings } from "@/domain/language/UIStrings";

export interface UIStringsRepository {
  getUIStrings(language: Language): UIStrings;
}
