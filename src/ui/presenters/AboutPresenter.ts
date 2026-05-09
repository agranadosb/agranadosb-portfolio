import type { GetAboutUseCase } from "@/application/usecases/GetAboutUseCase";
import type { About } from "@/domain/profile/About";

export class AboutPresenter {
  private readonly useCase: GetAboutUseCase;

  constructor(useCase: GetAboutUseCase) {
    this.useCase = useCase;
  }

  getAbout(): About {
    return this.useCase.execute();
  }
}
