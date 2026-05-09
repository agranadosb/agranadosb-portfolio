import type { ProfileRepository } from "@/application/ports/ProfileRepository";

export class GetHonorsUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): string[] {
    return this.repository.getHonors();
  }
}
