import type { SkillCategory } from "@/domain/profile/SkillCategory";
import { useAppContext } from "@/ui/context/AppContext";

export function useSkillsPresenter(): SkillCategory[] {
  const { skillsPresenter } = useAppContext();
  return skillsPresenter.getSkills();
}
