import { CVExperience } from "@/features/cv/components/CVExperience";
import { CVHeader } from "@/features/cv/components/CVHeader";
import { CVSectionHeading } from "@/features/cv/components/CVSectionHeading";
import { useCV } from "@/features/cv/useCV";

export function CV() {
  const { profile, summary, skills, jobs, education, honors, strings } = useCV();

  return (
    <div className="print:pt-0 pt-14 max-w-200 mx-auto px-10 py-8 print:px-0 print:py-0">
      <CVHeader profile={profile} />

      <section className="mb-3">
        <CVSectionHeading>{strings.professionalSummary}</CVSectionHeading>
        <p className="text-xs text-gray-700 leading-relaxed">{summary}</p>
      </section>

      <section className="mb-3">
        <CVSectionHeading>{strings.technicalSkills}</CVSectionHeading>
        <div className="space-y-0.5">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex gap-2 text-xs leading-relaxed">
              <span className="font-semibold text-gray-500 w-44 shrink-0">{category}</span>
              <span className="text-gray-700">{items.join(" · ")}</span>
            </div>
          ))}
        </div>
      </section>

      <CVExperience jobs={jobs} title={strings.workExperience} />

      <section className="mb-3 break-inside-avoid">
        <CVSectionHeading>{strings.education}</CVSectionHeading>
        <div className="space-y-1">
          {education.map(({ degree, field, institution }) => (
            <div key={degree} className="text-xs">
              <span className="font-semibold text-gray-900">
                {degree} {strings.inField} {field}
              </span>
              <span className="text-gray-500"> · {institution}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="break-inside-avoid">
        <CVSectionHeading>{strings.certificationsAchievements}</CVSectionHeading>
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
  );
}
