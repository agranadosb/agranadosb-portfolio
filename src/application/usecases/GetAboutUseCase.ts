import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { About } from "@/domain/profile/About";

export class GetAboutUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): About {
    return this.repository.getAbout();
  }
}
