import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
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
  },
};

export function useRail() {
  const { language } = useLanguage();
  const { profile } = getProfileContent(language);

  return {
    profile,
    initials: profile.name
      .split(" ")
      .map((word) => word[0])
      .join(""),
    strings: STRINGS[language],
  };
}
