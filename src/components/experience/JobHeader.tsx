export interface JobHeaderProps {
  role: string;
  company: string;
  location: string;
  period: string;
  companyContext?: string;
}

export function JobHeader({ role, company, location, period, companyContext }: JobHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <h3 className="text-ink-primary font-semibold text-lg leading-tight">{role}</h3>
        <p className="text-accent text-sm font-medium">
          {company} · {location}
          {companyContext && (
            <span className="text-ink-muted font-normal"> — {companyContext}</span>
          )}
        </p>
      </div>
      <span className="text-ink-muted text-sm whitespace-nowrap sm:pt-0.5">{period}</span>
    </div>
  );
}
