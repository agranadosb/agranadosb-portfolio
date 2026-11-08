import type { Organization } from "@/api/profile";
import { DateRange } from "@/features/experience/components/DateRange";
import { TimelineRole } from "@/features/experience/components/TimelineRole";

interface OrganizationTimelineProps {
  organization: Organization;
  currentRoleLabel: string;
  progressionLabel: string;
}

export function OrganizationTimeline({
  organization,
  currentRoleLabel,
  progressionLabel,
}: OrganizationTimelineProps) {
  const titleId = `${organization.id}-title`;
  const { progression } = organization;

  return (
    <section aria-labelledby={titleId} className="xp-org">
      <header className="xp-org-head">
        <div className="xp-org-line">
          <h3 id={titleId} className="xp-org-name">
            {organization.name}
          </h3>
          <p className="xp-meta">
            {organization.location} ·{" "}
            <DateRange start={organization.start} end={organization.end} />
            {organization.note && ` · ${organization.note}`}
          </p>
        </div>
        {progression && (
          <ol className="xp-path" aria-label={`${progressionLabel} ${organization.name}`}>
            {progression.map((step, index) => (
              <li key={step}>
                {index === progression.length - 1 ? <strong>{step}</strong> : step}
              </li>
            ))}
          </ol>
        )}
      </header>
      <ol className="tl">
        {organization.roles.map((role) => (
          <TimelineRole key={role.id} role={role} currentRoleLabel={currentRoleLabel} />
        ))}
      </ol>
    </section>
  );
}
