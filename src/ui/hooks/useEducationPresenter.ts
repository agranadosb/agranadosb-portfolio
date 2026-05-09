import type { Education } from "@/domain/profile/Education";
import { useAppContext } from "@/ui/context/AppContext";

export function useEducationPresenter(): Education[] {
  const { educationPresenter } = useAppContext();
  return educationPresenter.getEducation();
}
