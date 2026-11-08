import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<Language, { title: string; honors: string }> = {
  es: {
    title: "Formación",
    honors: "Matrícula de Honor",
  },
  en: {
    title: "Education",
    honors: "Honors",
  },
};

export function useEducation() {
  const { language } = useLanguage();
  return { education: getProfileContent(language).education, strings: STRINGS[language] };
}
