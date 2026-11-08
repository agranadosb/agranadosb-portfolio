import "@/components/SectionHeader.css";

interface SectionHeaderProps {
  code: string;
  eyebrow: string;
  title: string;
  titleId: string;
}

export function SectionHeader({ code, eyebrow, title, titleId }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header__code">{code}</div>
      <div className="section-header__text">
        <p className="section-header__eyebrow">{eyebrow}</p>
        <h2 id={titleId} className="section-header__title">
          {title}
        </h2>
      </div>
    </header>
  );
}
