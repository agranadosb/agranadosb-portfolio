import { GetEducationUseCase } from "@/application/usecases/GetEducationUseCase";
import type { Education } from "@/domain/profile/Education";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";

const getEducationUseCase = new GetEducationUseCase(new StaticProfileRepository());

export function useEducationPresenter(): Education[] {
  return getEducationUseCase.execute();
}
