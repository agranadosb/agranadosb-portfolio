import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { Job } from "@/domain/profile/Job";

export class GetJobsUseCase {
  private readonly repository: ProfileRepository;

  constructor(repository: ProfileRepository) {
    this.repository = repository;
  }

  execute(): Job[] {
    return this.repository.getJobs();
  }
}
