import { JobHeader } from "@/components/experience/JobHeader";
import { SkillBadge } from "@/components/experience/SkillBadge";

export interface JobItemProps {
  role: string;
  company: string;
  location: string;
  period: string;
  companyContext?: string;
  summary?: string;
  highlights: string[];
  skills?: string[];
}

export function JobItem({
  role,
  company,
  location,
  period,
  companyContext,
  summary,
  highlights,
  skills,
}: JobItemProps) {
  return (
    <div className="relative">
      <div className="absolute -left-8.25 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-surface-raised" />
      <JobHeader
        role={role}
        company={company}
        location={location}
        period={period}
        companyContext={companyContext}
      />
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      )}
      {summary && (
        <p className="text-ink-secondary text-sm leading-relaxed mb-4 italic">{summary}</p>
      )}
      <ul className="space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex gap-2 text-ink-secondary text-sm leading-relaxed">
            <span className="text-accent mt-0.5 shrink-0">›</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
