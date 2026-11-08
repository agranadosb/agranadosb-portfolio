import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  { common: string; title: string; touched: string; appliedAI: string }
> = {
  es: {
    common: "Común a todos los ámbitos",
    title: "Fichas de ámbito · qué he tocado",
    touched: "Qué he tocado",
    appliedAI: "IA aplicada",
  },
};

export function useAreas() {
  const { language } = useLanguage();
  const { capabilities, areas } = getProfileContent(language);
  return { capabilities, areas, strings: STRINGS[language] };
}
