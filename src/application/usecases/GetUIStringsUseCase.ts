import type { UIStringsRepository } from "@/application/ports/UIStringsRepository";
import type { Language } from "@/domain/language/Language";
import type { UIStrings } from "@/domain/language/UIStrings";

export class GetUIStringsUseCase {
  private readonly repository: UIStringsRepository;

  constructor(repository: UIStringsRepository) {
    this.repository = repository;
  }

  execute(language: Language): UIStrings {
    return this.repository.getUIStrings(language);
  }
}
