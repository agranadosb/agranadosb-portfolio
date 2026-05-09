import type { GetProfileUseCase } from "@/application/usecases/GetProfileUseCase";
import type { Profile } from "@/domain/profile/Profile";

export class ProfilePresenter {
  private readonly useCase: GetProfileUseCase;

  constructor(useCase: GetProfileUseCase) {
    this.useCase = useCase;
  }

  getProfile(): Profile {
    return this.useCase.execute();
  }
}
