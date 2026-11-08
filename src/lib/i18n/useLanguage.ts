import { useLocation } from "react-router";
import { type Language, languageFromPath } from "@/lib/i18n/Language";

export function useLanguage(): { language: Language } {
  const { pathname } = useLocation();
  return { language: languageFromPath(pathname) };
}
