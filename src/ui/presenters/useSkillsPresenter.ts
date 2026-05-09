import { GetSkillsUseCase } from "@/application/usecases/GetSkillsUseCase";
import type { SkillCategory } from "@/domain/profile/SkillCategory";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";

const getSkillsUseCase = new GetSkillsUseCase(new StaticProfileRepository());

export function useSkillsPresenter(): SkillCategory[] {
  return getSkillsUseCase.execute();
}
