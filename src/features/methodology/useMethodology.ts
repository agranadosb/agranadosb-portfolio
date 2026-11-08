import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    principle: string;
    practice: string;
    legend: string;
    figureLabel: string;
  }
> = {
  es: {
    eyebrow: "Dominio · puertos · adaptadores",
    title: "Mi metodología y dónde la aplico",
    principle: "Principio",
    practice: "En la práctica",
    legend: "Leyenda del hexágono:",
    figureLabel:
      "Tres hexágonos concéntricos: en el centro el dominio, alrededor los puertos y en el anillo exterior los adaptadores",
  },
  en: {
    eyebrow: "Domain · ports · adapters",
    title: "My methodology and where I apply it",
    principle: "Principle",
    practice: "In practice",
    legend: "Hexagon legend:",
    figureLabel:
      "Three concentric hexagons: the domain at the center, the ports around it and the adapters in the outer ring",
  },
};

export function useMethodology() {
  const { language } = useLanguage();
  return { methodology: getProfileContent(language).methodology, strings: STRINGS[language] };
}
