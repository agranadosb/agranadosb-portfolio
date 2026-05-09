import type { Job } from "@/domain/profile/Job";
import { useAppContext } from "@/ui/context/AppContext";

export function useJobsPresenter(): Job[] {
  const { getJobsUseCase } = useAppContext();
  return getJobsUseCase.execute();
}
