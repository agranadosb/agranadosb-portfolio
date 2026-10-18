import { getProfile } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<
  Language,
  {
    about: string;
    skills: string;
    experience: string;
    education: string;
    honors: string;
    switchLanguageTo: string;
    switchLanguageLabel: string;
  }
> = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    honors: "Honors",
    switchLanguageTo: "ES",
    switchLanguageLabel: "Switch to Spanish",
  },
  es: {
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Formación",
    honors: "Logros",
    switchLanguageTo: "EN",
    switchLanguageLabel: "Cambiar a inglés",
  },
};

export function useNav() {
  const { language, toggleLanguage } = useLanguage();
  const strings = STRINGS[language];

  return {
    profile: getProfile(language),
    links: [
      { label: strings.about, href: "#about" },
      { label: strings.skills, href: "#stack" },
      { label: strings.experience, href: "#experience" },
      { label: strings.education, href: "#education" },
      { label: strings.honors, href: "#honors" },
    ],
    strings,
    toggleLanguage,
  };
}
