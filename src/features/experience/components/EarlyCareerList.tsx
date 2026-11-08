import type { EarlyCareer } from "@/api/profile";
import { DateRange } from "@/features/experience/components/DateRange";

export function EarlyCareerList({ early }: { early: EarlyCareer }) {
  const titleId = `${early.id}-title`;

  return (
    <section aria-labelledby={titleId} className="xp-org">
      <header className="xp-org-head">
        <div className="xp-org-line">
          <h3 id={titleId} className="xp-org-name xp-org-name--small">
            {early.name}
          </h3>
          <p className="xp-meta">
            {early.location} · <DateRange start={early.start} end={early.end} />
          </p>
        </div>
      </header>
      <ul className="early">
        {early.roles.map((role) => (
          <li key={role.id} id={role.id}>
            <span className="xp-meta">
              <DateRange start={role.start} end={role.end} />
            </span>
            <span>
              <strong>{role.title}</strong> <span className="early__muted">· {role.company}</span>
            </span>
            <span className="early__muted">{role.summary}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
