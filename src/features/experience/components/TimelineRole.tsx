import type { Role } from "@/api/profile";
import { DateRange } from "@/features/experience/components/DateRange";

interface TimelineRoleProps {
  role: Role;
  currentRoleLabel: string;
}

export function TimelineRole({ role, currentRoleLabel }: TimelineRoleProps) {
  const titleId = `${role.id}-title`;

  return (
    <li id={role.id} className={role.current ? "tl-item tl-item--current" : "tl-item"}>
      <svg className="tl-mark" aria-hidden="true" viewBox="0 0 56 50">
        <polygon
          className="hx-wave"
          points="14.50,1.50 41.50,1.50 54.50,25 41.50,48.50 14.50,48.50 1.50,25"
        />
        <polygon
          className="hx-o"
          points="14.50,1.50 41.50,1.50 54.50,25 41.50,48.50 14.50,48.50 1.50,25"
        />
        <polygon
          className="hx-m"
          points="19.36,9.96 36.64,9.96 44.96,25 36.64,40.04 19.36,40.04 11.04,25"
        />
        <polygon
          className="hx-i"
          points="23.95,17.95 32.05,17.95 35.95,25 32.05,32.05 23.95,32.05 20.05,25"
        />
      </svg>
      <article className="tl-body" aria-labelledby={titleId}>
        <div className="tl-head">
          <p className="xp-meta">
            <DateRange start={role.start} end={role.end} />
          </p>
          <h4 id={titleId} className="tl-title">
            {role.title}
          </h4>
          {role.current && <span className="now">{currentRoleLabel}</span>}
        </div>
        <div className="tl-content">
          <p className="tl-summary">{role.summary}</p>
          <ul className="bul">
            {role.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
