import type { GetSkillsUseCase } from "@/application/usecases/GetSkillsUseCase";
import type { SkillCategory } from "@/domain/profile/SkillCategory";

export class SkillsPresenter {
  private readonly useCase: GetSkillsUseCase;

  constructor(useCase: GetSkillsUseCase) {
    this.useCase = useCase;
  }

  getSkills(): SkillCategory[] {
    return this.useCase.execute();
  }
}
