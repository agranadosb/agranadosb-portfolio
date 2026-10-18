import type { Job } from "@/api/profile";
import { CVSectionHeading } from "@/features/cv/components/CVSectionHeading";

const HIGHLIGHTS_BY_INDEX = [4, 3, 2, 2, 1, 0, 0, 0, 0];

export function CVExperience({ jobs, title }: { jobs: Job[]; title: string }) {
  return (
    <section className="mb-3">
      <CVSectionHeading>{title}</CVSectionHeading>
      <div className="space-y-3">
        {jobs.map(({ role, company, companyContext, location, period, summary, highlights }, i) => {
          const maxHighlights = HIGHLIGHTS_BY_INDEX[i] ?? 0;
          const visibleHighlights = highlights.slice(0, maxHighlights);
          const showSummary = i < 5;

          return (
            <div key={`${role}-${company}-${period}`} className="break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <div className="leading-snug">
                  <span className="font-semibold text-gray-900 text-xs">{role}</span>
                  <span className="text-gray-500 text-xs"> — {company}</span>
                  {companyContext && (
                    <span className="text-gray-400 text-xs"> ({companyContext})</span>
                  )}
                  <span className="text-gray-400 text-xs"> · {location}</span>
                </div>
                <span className="text-[10px] text-gray-400 shrink-0 ml-3 tabular-nums">
                  {period}
                </span>
              </div>
              {showSummary && (
                <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">{summary}</p>
              )}
              {visibleHighlights.length > 0 && (
                <ul className="mt-1 space-y-0.5">
                  {visibleHighlights.map((h) => (
                    <li key={h} className="flex gap-1.5 text-[11px] text-gray-600 leading-relaxed">
                      <span className="shrink-0 mt-px">–</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
