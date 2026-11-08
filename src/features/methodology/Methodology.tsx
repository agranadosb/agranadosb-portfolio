import type { ReactNode } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { MethodologyHexagon } from "@/features/methodology/components/MethodologyHexagon";
import { useMethodology } from "@/features/methodology/useMethodology";
import "@/features/methodology/Methodology.css";

export function Methodology({ children }: { children: ReactNode }) {
  const { methodology, strings } = useMethodology();

  return (
    <section id="metodologia" className="section methodology" aria-labelledby="metodologia-title">
      <SectionHeader
        number="01"
        eyebrow={strings.eyebrow}
        title={strings.title}
        titleId="metodologia-title"
      />

      <figure className="methodology__figure">
        <MethodologyHexagon figure={methodology.figure} label={strings.figureLabel} />
        <div className="methodology__text">
          <div className="methodology__principle">
            <p className="methodology__kicker">{strings.principle}</p>
            <h3 className="methodology__statement">{methodology.principle}</h3>
            <p className="methodology__lead">{methodology.text}</p>
          </div>
          <dl className="methodology__concepts">
            {methodology.concepts.map((concept) => (
              <div key={concept.term}>
                <dt>{concept.term}</dt>
                <dd>{concept.description}</dd>
              </div>
            ))}
          </dl>
          <div className="methodology__practice">
            <p className="methodology__label">{strings.practice}</p>
            <dl>
              {methodology.practice.map((idea) => (
                <div key={idea.title}>
                  <dt>{idea.title}</dt>
                  <dd>{idea.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figcaption className="methodology__legend">
            <span>{strings.legend}</span>
            {methodology.legend.map((layer) => (
              <span key={layer.number}>
                <strong>{layer.number}</strong> {layer.text}
              </span>
            ))}
          </figcaption>
        </div>
      </figure>

      {children}
    </section>
  );
}
