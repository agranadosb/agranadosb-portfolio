import { GetJobsUseCase } from "@/application/usecases/GetJobsUseCase";
import type { Job } from "@/domain/profile/Job";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";

const getJobsUseCase = new GetJobsUseCase(new StaticProfileRepository());

export function useJobsPresenter(): Job[] {
  return getJobsUseCase.execute();
}
