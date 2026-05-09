import type { About } from "@/domain/profile/About";
import { useAppContext } from "@/ui/context/AppContext";

export function useAboutPresenter(): About {
  const { aboutPresenter } = useAppContext();
  return aboutPresenter.getAbout();
}
