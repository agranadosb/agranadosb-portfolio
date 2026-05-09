import { useAppContext } from "@/ui/context/AppContext";

export function useHonorsPresenter(): string[] {
  const { getHonorsUseCase } = useAppContext();
  return getHonorsUseCase.execute();
}
