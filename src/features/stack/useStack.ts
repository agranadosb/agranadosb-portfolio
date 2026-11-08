import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  { title: string; caption: string; capability: string; tools: string }
> = {
  es: {
    title: "Stack tecnológico",
    caption: "Los adaptadores: herramientas y prácticas agrupadas por capacidad.",
    capability: "Capacidad",
    tools: "Herramientas",
  },
};

export function useStack() {
  const { language } = useLanguage();
  return { stack: getProfileContent(language).stack, strings: STRINGS[language] };
}
