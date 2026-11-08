import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  { eyebrow: string; title: string; currentRole: string; progression: string }
> = {
  es: {
    eyebrow: "Trayectoria · 2015 — 2026",
    title: "Experiencia",
    currentRole: "Puesto actual",
    progression: "Trayectoria en",
  },
  en: {
    eyebrow: "Career · 2015 — 2026",
    title: "Experience",
    currentRole: "Current role",
    progression: "Career path at",
  },
};

export function useExperience() {
  const { language } = useLanguage();
  return { experience: getProfileContent(language).experience, strings: STRINGS[language] };
}
