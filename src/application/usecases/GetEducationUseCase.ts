import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { Education } from "@/domain/profile/Education";

export class GetEducationUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): Education[] {
    return this.repository.getEducation();
  }
}
