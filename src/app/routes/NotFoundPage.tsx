import type { Language } from "@/lib/i18n/Language";
import { DEFAULT_LANGUAGE } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";
import "@/app/routes/NotFoundPage.css";

const STRINGS: Record<
  Language,
  { title: string; eyebrow: string; heading: string; text: string; backHome: string }
> = {
  es: {
    title: "Página no encontrada · Alejandro Granados",
    eyebrow: "Ruta no encontrada",
    heading: "Ningún adaptador responde a esta dirección.",
    text: "La página que buscas no existe o ha cambiado de sitio. Todo lo demás sigue en su lugar.",
    backHome: "Volver al inicio",
  },
};

export const meta = () => [
  { title: STRINGS[DEFAULT_LANGUAGE].title },
  { name: "robots", content: "noindex" },
];

export default function NotFoundPage() {
  const { language } = useLanguage();
  const strings = STRINGS[language];

  return (
    <div className="hexbg">
      <main className="not-found">
        <div className="not-found__text">
          <div className="not-found__badge">
            <span className="not-found__code">404</span>
            <p className="not-found__eyebrow">{strings.eyebrow}</p>
          </div>
          <h1 className="not-found__heading">{strings.heading}</h1>
          <p className="not-found__lead">{strings.text}</p>
          <a href="/" className="not-found__button">
            {strings.backHome} <span aria-hidden="true">→</span>
          </a>
        </div>

        <svg className="not-found__figure" viewBox="0 0 460 346" aria-hidden="true">
          <polygon
            className="nf-outer"
            points="101,1.5 299,1.5 398,173 299,344.5 101,344.5 2,173"
          />
          <polygon
            className="nf-middle"
            points="132.7,56.4 267.3,56.4 334.6,173 267.3,289.6 132.7,289.6 65.4,173"
          />
          <g className="nf-links">
            <line x1="200" y1="111" x2="200" y2="40" />
            <line x1="253" y1="204" x2="314" y2="239" />
            <line x1="200" y1="235" x2="200" y2="306" />
            <line x1="147" y1="204" x2="86" y2="239" />
            <line x1="147" y1="142" x2="86" y2="107" />
          </g>
          <g className="nf-adapters">
            <rect x="186" y="28" width="28" height="11" />
            <rect x="306" y="240" width="28" height="11" />
            <rect x="186" y="307" width="28" height="11" />
            <rect x="66" y="240" width="28" height="11" />
            <rect x="66" y="95" width="28" height="11" />
          </g>
          <rect className="nf-missing" x="306" y="95" width="28" height="11" />
          <polygon
            className="nf-core"
            points="164.4,111.3 235.6,111.3 271.3,173 235.6,234.7 164.4,234.7 128.7,173"
          />
          <g className="nf-ports">
            <rect x="196" y="107" width="8" height="8" />
            <rect x="249" y="138" width="8" height="8" />
            <rect x="249" y="200" width="8" height="8" />
            <rect x="196" y="231" width="8" height="8" />
            <rect x="143" y="200" width="8" height="8" />
            <rect x="143" y="138" width="8" height="8" />
          </g>
          <text x="200" y="183" textAnchor="middle" className="nf-core-text">
            404
          </text>
          <path className="nf-request" d="M458 100.5 L336 100.5" />
        </svg>
      </main>
    </div>
  );
}
