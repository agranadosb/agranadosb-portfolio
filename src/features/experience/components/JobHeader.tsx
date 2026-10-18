import type { Job } from "@/api/profile";

export function JobHeader({ job }: { job: Job }) {
  const { role, company, location, period } = job;

  return (
    <div className="mb-3">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-1">
        <h3 className="text-ink-primary font-bold text-lg leading-tight">{role}</h3>
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-overlay border border-border text-ink-secondary text-xs whitespace-nowrap shrink-0">
          {period}
        </span>
      </div>
      <p className="text-accent text-sm font-semibold">
        {company}
        <span className="text-ink-muted font-normal"> · {location}</span>
      </p>
    </div>
  );
}
