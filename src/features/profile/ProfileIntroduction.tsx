import { useProfileIntroduction } from "@/features/profile/useProfileIntroduction";
import "@/features/profile/ProfileIntroduction.css";

export function ProfileIntroduction() {
  const { profile, areas, strings } = useProfileIntroduction();

  return (
    <section id="inicio" className="cover" aria-labelledby="inicio-title">
      <div className="cover__intro">
        <div className="cover__identity">
          <h1 id="inicio-title" className="cover__name">
            {profile.name}
            <span className="cover__dot">.</span>
          </h1>
          <p className="cover__role">{profile.role}</p>
        </div>
        <div aria-hidden="true" className="cover__rule" />
        <p className="cover__headline">
          {profile.headline.lead}
          <span className="cover__highlight">{profile.headline.highlight}</span>
        </p>
      </div>

      <div className="cover__body">
        <div className="cover__main">
          <div className="cover__about">
            <h2 className="sr">{strings.about}</h2>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <nav aria-label={strings.areas} className="cover__areas">
            <span className="cover__label">{strings.areas}</span>
            <ul className="chips cover__chips">
              {areas.map((area) => (
                <li key={area.id}>
                  <a href={`#ambito-${area.id}`}>{area.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="cover__actions">
            <a href="#metodologia" className="cover__button">
              {strings.seeAreas} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="summary-box">
          <div className="summary-box__head">
            <h2 className="summary-box__title">{strings.summary}</h2>
            <svg aria-hidden="true" width="20" height="18" viewBox="0 0 20 18">
              <polygon points="5,1 15,1 19,9 15,17 5,17 1,9" className="summary-box__hex" />
            </svg>
          </div>
          <dl className="summary-box__list">
            {profile.summary.map((item) => (
              <div key={item.term} className="summary-box__row">
                <dt>{item.term}</dt>
                <dd>
                  {item.highlight && <strong>{item.highlight}</strong>}
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
