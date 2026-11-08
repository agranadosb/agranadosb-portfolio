import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { viewExperience: string; downloadCV: string; contact: string }> = {
  en: {
    viewExperience: "View Experience",
    downloadCV: "Download CV",
    contact: "Contact",
  },
  es: {
    viewExperience: "Ver experiencia",
    downloadCV: "Descargar CV",
    contact: "Contacto",
  },
};

export function useProfileIntroduction() {
  const { language } = useLanguage();
  return { profile: getProfileContent(language).profile, strings: STRINGS[language] };
}
