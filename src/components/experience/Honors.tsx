const HONORS = [
  "Honors in Machine Learning, Data Structures & Algorithms, Software Engineering, Databases, and Mathematical Analysis — Polytechnic University of Valencia.",
  "Final thesis: Machine Learning applied to genetic mutations.",
  "ISO 42001 certification lead — one of the first companies in Spain to achieve it.",
  "ISO 27001 certification process lead (in progress) towards ENS compliance.",
];

export function Honors() {
  return (
    <section id="honors" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">Honors & Achievements</h2>
        <ul className="space-y-4">
          {HONORS.map((h) => (
            <li key={h} className="flex gap-3 text-ink-secondary text-sm leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">✦</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
