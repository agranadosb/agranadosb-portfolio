import { useId, useState } from "react";
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
  defaultCollapsed?: boolean;
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
  defaultCollapsed = false,
}: JobItemProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const detailsId = useId();

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
      {summary && (
        <p className="text-ink-secondary text-sm leading-relaxed mb-3 italic">{summary}</p>
      )}
      <div id={detailsId}>
        {!collapsed && skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        )}
        {!collapsed && (
          <ul className="space-y-2 mb-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2 text-ink-secondary text-sm leading-relaxed">
                <span className="text-accent mt-0.5 shrink-0">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type="button"
        aria-expanded={!collapsed}
        aria-controls={detailsId}
        onClick={() => setCollapsed((c) => !c)}
        className="text-xs text-ink-primary hover:text-accent transition-colors cursor-pointer"
      >
        {collapsed ? "▸ Show details" : "▾ Hide details"}
      </button>
    </div>
  );
}
