import { SectionTitle } from "@/components/SectionTitle";
import { useEducation } from "@/features/education/useEducation";

export function Education() {
  const { education, strings } = useEducation();

  return (
    <section id="education" className="py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{strings.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {education.map(({ degree, field, institution }) => (
            <div
              key={degree}
              className="p-5 rounded-xl bg-surface-raised border border-border hover:border-accent/50 transition-colors space-y-1"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-widest">
                {degree}
              </p>
              <p className="text-ink-primary font-semibold leading-snug">{field}</p>
              <p className="text-ink-muted text-sm">{institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
