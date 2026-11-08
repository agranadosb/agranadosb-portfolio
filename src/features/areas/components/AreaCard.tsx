import type { Area } from "@/api/profile";

interface AreaCardProps {
  area: Area;
  touchedLabel: string;
  appliedAILabel: string;
}

export function AreaCard({ area, touchedLabel, appliedAILabel }: AreaCardProps) {
  const titleId = `ambito-${area.id}-title`;

  return (
    <article id={`ambito-${area.id}`} className="area-card" aria-labelledby={titleId}>
      <header className="area-card__head">
        <h4 id={titleId} className="area-card__title">
          {area.title}
        </h4>
        <span className="area-card__tags">
          {area.appliesAI && (
            <span className="ia-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12l5 5L20 6" />
              </svg>
              {appliedAILabel}
            </span>
          )}
          <span className="area-card__code">{area.code}</span>
        </span>
      </header>
      <dl className="area-card__body">
        <div>
          <dt>{touchedLabel}</dt>
          <dd>
            <ul className="scope">
              {area.items.map((item) => (
                <li key={item.text}>
                  <span>
                    {item.text}
                    {item.keywords && (
                      <>
                        {" "}
                        <span className="kw" lang="en">
                          ({item.keywords})
                        </span>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
}
