import { JobItem } from "@/ui/components/job/JobItem";
import { useJobsPresenter } from "@/ui/hooks/useJobsPresenter";

export function Experience() {
  const jobs = useJobsPresenter();

  return (
    <section id="experience" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">Experience</h2>
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
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
