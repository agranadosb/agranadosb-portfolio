import { ThemeButton } from "@/app/layout/ThemeButton";
import { useRail } from "@/app/layout/useRail";
import { NetworkIcon } from "@/components/NetworkIcon";
import "@/app/layout/Rail.css";

interface RailProps {
  open: boolean;
  onToggle: () => void;
}

export function Rail({ open, onToggle }: RailProps) {
  const { profile, initials, strings } = useRail();

  if (!open) {
    return (
      <>
        <button
          type="button"
          className="rail-show"
          onClick={onToggle}
          aria-label={strings.showMenu}
        >
          <svg className="ico" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <ThemeButton className="rail-show theme-float" withTip={false} labels={strings} />
      </>
    );
  }

  return (
    <nav className="rail" aria-label={strings.navigation}>
      <a href="#inicio" aria-label={`${strings.home} · ${profile.name}`}>
        <span aria-hidden="true" className="rail__monogram">
          {initials}
        </span>
        <span className="tip">
          {strings.home} · {profile.name}
        </span>
      </a>
      <span className="rail-sep" aria-hidden="true" />
      <a href="#metodologia" aria-label={strings.methodology}>
        <svg className="ico" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="7,3 17,3 22,12 17,21 7,21 2,12" />
          <polygon points="10,8.5 14,8.5 16,12 14,15.5 10,15.5 8,12" />
        </svg>
        <span className="tip">{strings.methodology}</span>
      </a>
      <a href="#experiencia" aria-label={strings.experience}>
        <svg className="ico" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="5.7,2.75 8.3,2.75 9.6,5 8.3,7.25 5.7,7.25 4.4,5" />
          <polygon points="5.7,9.75 8.3,9.75 9.6,12 8.3,14.25 5.7,14.25 4.4,12" />
          <polygon points="5.7,16.75 8.3,16.75 9.6,19 8.3,21.25 5.7,21.25 4.4,19" />
          <path d="M7 7.25v2.5M7 14.25v2.5M12.5 5H21M12.5 12H21M12.5 19H18" />
        </svg>
        <span className="tip">{strings.experience}</span>
      </a>
      <a href="#formacion" aria-label={strings.education}>
        <svg className="ico" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M2 9l10-5 10 5-10 5z" />
          <path d="M6 11v5c3 2 9 2 12 0v-5" />
        </svg>
        <span className="tip">{strings.education}</span>
      </a>
      <a href="#contacto" aria-label={strings.contact}>
        <svg className="ico" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" />
          <path d="M3 6l9 7 9-7" />
        </svg>
        <span className="tip">{strings.contact}</span>
      </a>
      <span className="rail-sep rail-ext" aria-hidden="true" />
      <a className="rail-ext" href={profile.linkedin} aria-label={strings.linkedin}>
        <NetworkIcon network="linkedin" size={22} />
        <span className="tip">{strings.linkedin} ↗</span>
      </a>
      <a className="rail-ext" href={profile.github} aria-label={strings.github}>
        <NetworkIcon network="github" size={22} />
        <span className="tip">{strings.github} ↗</span>
      </a>
      <span className="rail-sep" aria-hidden="true" />
      <ThemeButton withTip labels={strings} />
      <button type="button" className="rail-end" onClick={onToggle} aria-label={strings.hideMenu}>
        <svg className="ico" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
        <span className="tip">{strings.hideMenu}</span>
      </button>
    </nav>
  );
}
