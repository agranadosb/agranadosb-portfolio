import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  { about: string; areas: string; seeAreas: string; summary: string }
> = {
  es: {
    about: "Sobre mí",
    areas: "Ámbitos en los que trabajo",
    seeAreas: "Ver cómo resuelvo cada ámbito",
    summary: "En resumen",
  },
};

export function useProfileIntroduction() {
  const { language } = useLanguage();
  const { profile, areas } = getProfileContent(language);
  return { profile, areas, strings: STRINGS[language] };
}
