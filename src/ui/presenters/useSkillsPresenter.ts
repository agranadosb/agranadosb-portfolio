import type { SkillCategory } from "@/domain/profile/SkillCategory";
import { useAppContext } from "@/ui/context/AppContext";

export function useSkillsPresenter(): SkillCategory[] {
  const { getSkillsUseCase } = useAppContext();
  return getSkillsUseCase.execute();
}
