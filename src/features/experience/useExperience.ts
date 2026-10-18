import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string; showDetails: string; hideDetails: string }> = {
  en: {
    title: "Experience",
    showDetails: "Show details",
    hideDetails: "Hide details",
  },
  es: {
    title: "Experiencia",
    showDetails: "Ver detalles",
    hideDetails: "Ocultar detalles",
  },
};

export function useExperience() {
  const { language } = useLanguage();
  return { jobs: getProfileContent(language).jobs, strings: STRINGS[language] };
}
