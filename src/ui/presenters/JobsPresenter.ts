import type { GetJobsUseCase } from "@/application/usecases/GetJobsUseCase";
import type { Job } from "@/domain/profile/Job";

export class JobsPresenter {
  private readonly useCase: GetJobsUseCase;

  constructor(useCase: GetJobsUseCase) {
    this.useCase = useCase;
  }

  getJobs(): Job[] {
    return this.useCase.execute();
  }
}
