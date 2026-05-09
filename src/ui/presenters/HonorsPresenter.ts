import type { GetHonorsUseCase } from "@/application/usecases/GetHonorsUseCase";

export class HonorsPresenter {
  private readonly useCase: GetHonorsUseCase;

  constructor(useCase: GetHonorsUseCase) {
    this.useCase = useCase;
  }

  getHonors(): string[] {
    return this.useCase.execute();
  }
}
