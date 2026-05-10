import type { Language } from "@/domain/language/Language";
import { useAppContext } from "@/ui/context/AppContext";

export function useLanguagePresenter(): { language: Language; toggle: () => void } {
  const { language, languagePresenter } = useAppContext();

  function toggle() {
    const next = languagePresenter.getNextLanguage(language);
    languagePresenter.setLanguage(next);
  }

  return { language, toggle };
}
