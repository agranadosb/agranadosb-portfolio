import { useMemo } from "react";
import { GetHonorsUseCase } from "@/application/usecases/GetHonorsUseCase";
import { StaticProfileRepository } from "@/infrastructure/profile/StaticProfileRepository";

const getHonorsUseCase = new GetHonorsUseCase(new StaticProfileRepository());

export function useHonorsPresenter(): string[] {
  return useMemo(() => getHonorsUseCase.execute(), []);
}
