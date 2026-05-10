import { JobItem } from "@/ui/components/job/JobItem";
import { SectionTitle } from "@/ui/components/SectionTitle";
import { useJobsPresenter } from "@/ui/hooks/useJobsPresenter";
import { useUIStringsPresenter } from "@/ui/hooks/useUIStringsPresenter";

export function Experience() {
  const jobs = useJobsPresenter();
  const ui = useUIStringsPresenter();

  return (
    <section id="experience" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{ui.sections.experience}</SectionTitle>
        <div className="relative border-l border-border pl-8 space-y-12">
          {jobs.map(
            ({
              role,
              company,
              companyContext,
              location,
              period,
              summary,
              highlights,
              skills,
              defaultCollapsed,
            }) => (
              <JobItem
                key={`${role}-${company}-${period}`}
                role={role}
                company={company}
                location={location}
                period={period}
                companyContext={companyContext}
                summary={summary}
                highlights={highlights}
                skills={skills}
                defaultCollapsed={defaultCollapsed}
                showDetailsLabel={ui.job.showDetails}
                hideDetailsLabel={ui.job.hideDetails}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
