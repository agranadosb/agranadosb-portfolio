import { useId, useState } from "react";
import { JobHeader } from "@/ui/components/job/JobHeader";
import { SkillBadge } from "@/ui/components/job/SkillBadge";

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
  showDetailsLabel: string;
  hideDetailsLabel: string;
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
  showDetailsLabel,
  hideDetailsLabel,
}: JobItemProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const detailsId = useId();

  return (
    <div className="relative">
      <div className="absolute -left-8.25 top-2 w-3.5 h-3.5 rounded-full bg-accent border-2 border-surface-raised" />
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
          <ul className="space-y-2.5 mb-3">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-ink-secondary text-sm leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
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
        className="mt-1 flex items-center gap-1.5 text-xs text-ink-muted hover:text-accent transition-colors cursor-pointer"
      >
        <ChevronIcon collapsed={collapsed} />
        <span>{collapsed ? showDetailsLabel : hideDetailsLabel}</span>
      </button>
    </div>
  );
}

function ChevronIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
