import type { Methodology } from "@/api/profile";

interface MethodologyHexagonProps {
  figure: Methodology["figure"];
  label: string;
}

export function MethodologyHexagon({ figure, label }: MethodologyHexagonProps) {
  return (
    <svg className="hexmeth" viewBox="0 0 400 346" role="img" aria-label={label}>
      <polygon className="hm-outer" points="101,1.5 299,1.5 398,173 299,344.5 101,344.5 2,173" />
      <polygon
        className="hm-middle"
        points="132.7,56.4 267.3,56.4 334.6,173 267.3,289.6 132.7,289.6 65.4,173"
      />
      <g className="hm-links">
        <line x1="200" y1="111" x2="200" y2="40" />
        <line x1="253" y1="142" x2="314" y2="107" />
        <line x1="253" y1="204" x2="314" y2="239" />
        <line x1="200" y1="235" x2="200" y2="306" />
        <line x1="147" y1="204" x2="86" y2="239" />
        <line x1="147" y1="142" x2="86" y2="107" />
      </g>
      <g className="hm-adp">
        <rect x="186" y="28" width="28" height="11" />
        <rect x="306" y="95" width="28" height="11" />
        <rect x="306" y="240" width="28" height="11" />
        <rect x="186" y="307" width="28" height="11" />
        <rect x="66" y="240" width="28" height="11" />
        <rect x="66" y="95" width="28" height="11" />
      </g>
      <g className="hm-sig">
        <path d="M200 40 L200 173 L320 245" />
        <path d="M80 245 L200 173 L320 101" />
        <path d="M80 101 L200 173 L200 306" />
      </g>
      <polygon
        className="hm-core"
        points="164.4,111.3 235.6,111.3 271.3,173 235.6,234.7 164.4,234.7 128.7,173"
      />
      <g className="hm-port">
        <rect x="196" y="107" width="8" height="8" />
        <rect x="249" y="138" width="8" height="8" />
        <rect x="249" y="200" width="8" height="8" />
        <rect x="196" y="231" width="8" height="8" />
        <rect x="143" y="200" width="8" height="8" />
        <rect x="143" y="138" width="8" height="8" />
      </g>
      <text x="200" y="168" textAnchor="middle" className="hm-core-number">
        {figure.core.number}
      </text>
      <text x="200" y="188" textAnchor="middle" className="hm-core-label">
        {figure.core.label}
      </text>
      <text x="200" y="272" textAnchor="middle" className="hm-label">
        {figure.ports}
      </text>
      <text x="200" y="336" textAnchor="middle" className="hm-label">
        {figure.adapters}
      </text>
    </svg>
  );
}
