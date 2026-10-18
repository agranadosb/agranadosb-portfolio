import { getEducation } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string }> = {
  en: { title: "Education" },
  es: { title: "Formación" },
};

export function useEducation() {
  const { language } = useLanguage();
  return { education: getEducation(language), strings: STRINGS[language] };
}
