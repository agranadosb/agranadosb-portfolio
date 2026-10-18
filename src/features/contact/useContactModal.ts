import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string; subtitle: string; closeLabel: string }> = {
  en: {
    title: "Get in touch",
    subtitle: "Feel free to reach out — I'll get back to you as soon as I can.",
    closeLabel: "Close",
  },
  es: {
    title: "Ponte en contacto",
    subtitle: "No dudes en escribirme — te responderé lo antes posible.",
    closeLabel: "Cerrar",
  },
};

export function useContactModal() {
  const { language } = useLanguage();
  return { email: getProfileContent(language).profile.email, strings: STRINGS[language] };
}
