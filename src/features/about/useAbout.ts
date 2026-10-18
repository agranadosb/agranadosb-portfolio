import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { title: string }> = {
  en: { title: "About Me" },
  es: { title: "Sobre mí" },
};

export function useAbout() {
  const { language } = useLanguage();
  const { profile, about } = getProfileContent(language);
  return { name: profile.name, bio: about.bio, stats: about.stats, strings: STRINGS[language] };
}
