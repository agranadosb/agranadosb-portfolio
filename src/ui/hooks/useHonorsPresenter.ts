import { useAppContext } from "@/ui/context/AppContext";

export function useHonorsPresenter(): string[] {
  const { honorsPresenter } = useAppContext();
  return honorsPresenter.getHonors();
}
