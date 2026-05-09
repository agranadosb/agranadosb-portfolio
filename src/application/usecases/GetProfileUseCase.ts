import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { Profile } from "@/domain/profile/Profile";

export class GetProfileUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): Profile {
    return this.repository.getProfile();
  }
}
