import type { Profile } from "@/domain/profile/Profile";
import { useAppContext } from "@/ui/context/AppContext";

export function useProfilePresenter(): Profile {
  const { profilePresenter } = useAppContext();
  return profilePresenter.getProfile();
}
