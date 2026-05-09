interface AvatarProps {
  src?: string;
}

function Avatar({ src }: AvatarProps) {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden bg-surface-overlay border-2 border-border flex items-center justify-center shrink-0">
      {src ? (
        <img
          src={src}
          alt="Alejandro Granados"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={320}
          height={320}
        />
      ) : (
        <span className="text-4xl font-bold text-ink-secondary select-none">AG</span>
      )}
    </div>
  );
}

const STATS = [
  { label: "Experience", value: "10+ years" },
  { label: "Current Role", value: "CTO · Heligráfics" },
  { label: "Expertise", value: "Software Engineering · AI" },
  { label: "Education", value: "MSc · BSc" },
];

interface AboutProps {
  photoSrc?: string;
}

export function About({ photoSrc }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <Avatar src={photoSrc} />
          <div className="space-y-4">
            <p className="text-ink-secondary leading-relaxed text-lg">
              AI engineer and engineering leader with 10+ years building software systems in
              production. My work spans the full stack: geospatial computer vision, large-scale data
              pipelines, cloud infrastructure, and the teams that deliver them.
            </p>
            <p className="text-ink-secondary leading-relaxed text-lg">
              Currently CTO at Heligráfics in Valencia, leading technical strategy and AI product
              development across multiple engineering teams.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ label, value }) => (
            <div
              key={label}
              className="text-center p-4 rounded-lg bg-surface-overlay border border-border"
            >
              <p className="text-ink-primary font-semibold">{value}</p>
              <p className="text-ink-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
