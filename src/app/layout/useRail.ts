import { getProfileContent } from "@/api/profile";
import { LANGUAGE_HOME, type Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  {
    navigation: string;
    home: string;
    methodology: string;
    experience: string;
    education: string;
    contact: string;
    linkedin: string;
    github: string;
    hideMenu: string;
    showMenu: string;
    toLightTheme: string;
    toDarkTheme: string;
    changeTheme: string;
    otherLanguage: Language;
    readInOtherLanguage: string;
  }
> = {
  es: {
    navigation: "Secciones",
    home: "Inicio",
    methodology: "Metodología",
    experience: "Experiencia",
    education: "Formación",
    contact: "Contacto",
    linkedin: "LinkedIn",
    github: "GitHub",
    hideMenu: "Ocultar menú",
    showMenu: "Mostrar menú",
    toLightTheme: "Cambiar a tema claro",
    toDarkTheme: "Cambiar a tema oscuro",
    changeTheme: "Cambiar tema",
    otherLanguage: "en",
    readInOtherLanguage: "Read in English",
  },
  en: {
    navigation: "Sections",
    home: "Home",
    methodology: "Methodology",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    linkedin: "LinkedIn",
    github: "GitHub",
    hideMenu: "Hide menu",
    showMenu: "Show menu",
    toLightTheme: "Switch to light theme",
    toDarkTheme: "Switch to dark theme",
    changeTheme: "Change theme",
    otherLanguage: "es",
    readInOtherLanguage: "Leer en español",
  },
};

export function useRail() {
  const { language } = useLanguage();
  const { profile } = getProfileContent(language);
  const strings = STRINGS[language];

  return {
    profile,
    initials: profile.name
      .split(" ")
      .map((word) => word[0])
      .join(""),
    strings,
    otherLanguage: {
      code: strings.otherLanguage,
      href: LANGUAGE_HOME[strings.otherLanguage],
      label: strings.readInOtherLanguage,
    },
  };
}
