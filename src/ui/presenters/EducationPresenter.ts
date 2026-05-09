import type { GetEducationUseCase } from "@/application/usecases/GetEducationUseCase";
import type { Education } from "@/domain/profile/Education";

export class EducationPresenter {
  private readonly useCase: GetEducationUseCase;

  constructor(useCase: GetEducationUseCase) {
    this.useCase = useCase;
  }

  getEducation(): Education[] {
    return this.useCase.execute();
  }
}
