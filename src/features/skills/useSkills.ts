import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string }> = {
  en: { title: "Main Skills" },
  es: { title: "Principales Habilidades" },
};

export function useSkills() {
  const { language } = useLanguage();
  return { skills: getProfileContent(language).skills, strings: STRINGS[language] };
}
