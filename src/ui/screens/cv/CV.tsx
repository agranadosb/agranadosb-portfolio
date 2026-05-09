import { type ReactNode, useEffect } from "react";
import { useEducationPresenter } from "@/ui/presenters/useEducationPresenter";
import { useHonorsPresenter } from "@/ui/presenters/useHonorsPresenter";
import { useJobsPresenter } from "@/ui/presenters/useJobsPresenter";
import { useProfilePresenter } from "@/ui/presenters/useProfilePresenter";
import { useSkillsPresenter } from "@/ui/presenters/useSkillsPresenter";

const SUMMARY =
  "Engineering leader and hands-on AI practitioner with 10+ years delivering production software systems. Currently CTO at Heligráfics, leading 20–40 engineers across AI research, data engineering, and infrastructure. Core expertise in machine learning (PyTorch, computer vision, LLMs), distributed data pipelines (Kafka, Spark), cloud infrastructure (GCP, Kubernetes), and ISO 42001 / ISO 27001 compliance.";

const HIGHLIGHTS_BY_INDEX = [4, 3, 2, 2, 1, 0, 0, 0, 0];

export function CVPage() {
  const profile = useProfilePresenter();
  const jobs = useJobsPresenter();
  const education = useEducationPresenter();
  const honors = useHonorsPresenter();
  const stack = useSkillsPresenter();

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "auto") {
      window.print();
    }
  }, []);

  return (
    <div style={{ colorScheme: "light" }} className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="print:hidden fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-gray-50 border-b border-gray-200 px-6 py-3">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to portfolio
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Download as PDF
        </button>
      </div>

      <div className="print:pt-0 pt-14 max-w-200 mx-auto px-10 py-8 print:px-0 print:py-0">
        <header className="mb-4 pb-3 border-b-2 border-gray-800 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-[26px] font-bold tracking-tight text-gray-900 leading-tight">
              {profile.name}
            </h1>
            <p className="text-sm text-gray-600 font-medium mt-0.5 mb-2">{profile.title}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500">
              <span>{profile.location}</span>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
                {profile.email}
              </a>
              <span>·</span>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {profile.linkedin.display}
              </a>
              <span>·</span>
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {profile.github.display}
              </a>
            </div>
          </div>
          <img
            src="/me.webp"
            alt={profile.name}
            width={80}
            height={80}
            decoding="async"
            className="rounded-full shrink-0 object-cover border border-gray-200"
          />
        </header>

        <section className="mb-3">
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-xs text-gray-700 leading-relaxed">{SUMMARY}</p>
        </section>

        <section className="mb-3">
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="space-y-0.5">
            {stack.map(({ category, items }) => (
              <div key={category} className="flex gap-2 text-xs leading-relaxed">
                <span className="font-semibold text-gray-500 w-44 shrink-0">{category}</span>
                <span className="text-gray-700">{items.join(" · ")}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-3">
          <SectionHeading>Work Experience</SectionHeading>
          <div className="space-y-3">
            {jobs.map(
              ({ role, company, companyContext, location, period, summary, highlights }, i) => {
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
                          <li
                            key={h}
                            className="flex gap-1.5 text-[11px] text-gray-600 leading-relaxed"
                          >
                            <span className="shrink-0 mt-px">–</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              },
            )}
          </div>
        </section>

        <section className="mb-3 break-inside-avoid">
          <SectionHeading>Education</SectionHeading>
          <div className="space-y-1">
            {education.map(({ degree, field, institution }) => (
              <div key={degree} className="text-xs">
                <span className="font-semibold text-gray-900">
                  {degree} in {field}
                </span>
                <span className="text-gray-500"> · {institution}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="break-inside-avoid">
          <SectionHeading>Certifications & Achievements</SectionHeading>
          <ul className="space-y-0.5">
            {honors.map((h) => (
              <li key={h} className="flex gap-1.5 text-[11px] text-gray-600 leading-relaxed">
                <span className="shrink-0 mt-px">–</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5 pb-0.5 border-b border-gray-200">
      {children}
    </h2>
  );
}
