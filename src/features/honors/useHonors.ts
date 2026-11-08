import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string }> = {
  en: { title: "Honors & Achievements" },
  es: { title: "Logros y Reconocimientos" },
};

export function useHonors() {
  const { language } = useLanguage();
  return { honors: getProfileContent(language).honors, strings: STRINGS[language] };
}
