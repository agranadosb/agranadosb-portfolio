import type { Language } from "@/lib/i18n/Language";

export function useLanguage(): { language: Language } {
  return { language: "es" };
}
