import type { Profile } from "@/domain/profile/Profile";
import { useAppContext } from "@/ui/context/AppContext";

export function useProfilePresenter(): Profile {
  const { getProfileUseCase } = useAppContext();
  return getProfileUseCase.execute();
}
