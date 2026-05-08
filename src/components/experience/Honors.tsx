import { HONORS } from "@/data/profile";

export function Honors() {
  return (
    <section id="honors" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">
          Honors & Achievements
        </h2>
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
