import { DEFAULT_LANGUAGE, type Language } from "@/lib/i18n/Language";

export function useLanguage(): { language: Language } {
  return { language: DEFAULT_LANGUAGE };
}
