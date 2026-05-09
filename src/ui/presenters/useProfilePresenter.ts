import { GetProfileUseCase } from "@/application/usecases/GetProfileUseCase";
import type { Profile } from "@/domain/profile/Profile";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";

const getProfileUseCase = new GetProfileUseCase(new StaticProfileRepository());

export function useProfilePresenter(): Profile {
  return getProfileUseCase.execute();
}
