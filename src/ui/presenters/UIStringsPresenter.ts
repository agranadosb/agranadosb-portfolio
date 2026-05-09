import type { GetUIStringsUseCase } from "@/application/usecases/GetUIStringsUseCase";
import type { Language } from "@/domain/language/Language";
import type { UIStrings } from "@/domain/language/UIStrings";

export class UIStringsPresenter {
  private readonly useCase: GetUIStringsUseCase;

  constructor(useCase: GetUIStringsUseCase) {
    this.useCase = useCase;
  }

  getUIStrings(language: Language): UIStrings {
    return this.useCase.execute(language);
  }
}
