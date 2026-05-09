import type { Job } from "@/domain/profile/Job";
import { useAppContext } from "@/ui/context/AppContext";

export function useJobsPresenter(): Job[] {
  const { jobsPresenter } = useAppContext();
  return jobsPresenter.getJobs();
}
