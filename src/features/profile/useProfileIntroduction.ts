import { getProfileContent } from "@/api/profile";
import { CV } from "@/config/site";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  { about: string; areas: string; seeAreas: string; downloadCv: string; summary: string }
> = {
  es: {
    about: "Sobre mí",
    areas: "Ámbitos en los que trabajo",
    seeAreas: "Ver cómo resuelvo cada ámbito",
    downloadCv: "Descargar CV (PDF)",
    summary: "En resumen",
  },
  en: {
    about: "About me",
    areas: "Sectors I work in",
    seeAreas: "See how I approach each sector",
    downloadCv: "Download CV (PDF)",
    summary: "At a glance",
  },
};

export function useProfileIntroduction() {
  const { language } = useLanguage();
  const { profile, areas } = getProfileContent(language);
  return {
    profile,
    areas,
    cv: { href: `/${CV[language].path}`, fileName: CV[language].fileName },
    strings: STRINGS[language],
  };
}
