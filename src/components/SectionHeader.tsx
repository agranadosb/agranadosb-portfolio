import "@/components/SectionHeader.css";

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  titleId: string;
}

export function SectionHeader({ number, eyebrow, title, titleId }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header__number">
        <svg width="62" height="54" viewBox="0 0 62 54" aria-hidden="true">
          <polygon points="15.5,1.5 46.5,1.5 60.5,27 46.5,52.5 15.5,52.5 1.5,27" />
          <text x="31" y="35.5" textAnchor="middle">
            {number}
          </text>
        </svg>
      </div>
      <div className="section-header__text">
        <p className="section-header__eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="section-header__title">
          {title}
        </h2>
      </div>
    </header>
  );
}
