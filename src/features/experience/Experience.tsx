import { SectionTitle } from "@/components/SectionTitle";
import { JobItem } from "@/features/experience/components/JobItem";
import { useExperience } from "@/features/experience/useExperience";

export function Experience() {
  const { jobs, strings } = useExperience();

  return (
    <section id="experience" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{strings.title}</SectionTitle>
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
                showDetailsLabel={strings.showDetails}
                hideDetailsLabel={strings.hideDetails}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
