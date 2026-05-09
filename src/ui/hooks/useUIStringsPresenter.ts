import type { UIStrings } from "@/domain/language/UIStrings";
import { useAppContext } from "@/ui/context/AppContext";

export function useUIStringsPresenter(): UIStrings {
  const { language, uiStringsPresenter } = useAppContext();
  return uiStringsPresenter.getUIStrings(language);
}
