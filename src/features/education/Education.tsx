import { SectionHeader } from "@/components/SectionHeader";
import { useEducation } from "@/features/education/useEducation";
import "@/features/education/Education.css";

export function Education() {
  const { education, strings } = useEducation();

  return (
    <section id="formacion" className="section" aria-labelledby="formacion-title">
      <SectionHeader
        code="A-03"
        eyebrow={education.institution}
        title={strings.title}
        titleId="formacion-title"
      />
      <div className="education">
        <div className="education__degrees">
          {education.degrees.map((degree) => (
            <article key={degree.level} className="degree">
              <p className="degree__level">{degree.level}</p>
              <h3 className="degree__title">{degree.title}</h3>
              {degree.note && <p className="degree__note">{degree.note}</p>}
            </article>
          ))}
        </div>
        <div className="education__honors">
          <h3 className="education__honors-title">{strings.honors}</h3>
          <ul className="hexlist">
            {education.honors.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
