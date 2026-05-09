import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { SkillCategory } from "@/domain/profile/SkillCategory";

export class GetSkillsUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): SkillCategory[] {
    return this.repository.getSkills();
  }
}
