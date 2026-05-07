const EDUCATION = [
  {
    degree: "MSc",
    field: "AI, Pattern Recognition & Digital Imaging",
    institution: "Polytechnic University of Valencia",
  },
  {
    degree: "BSc",
    field: "Computer Science",
    institution: "Polytechnic University of Valencia",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {EDUCATION.map(({ degree, field, institution }) => (
            <div
              key={degree}
              className="p-5 rounded-lg bg-surface-raised border border-border space-y-1"
            >
              <p className="text-accent text-xs font-semibold uppercase tracking-widest">{degree}</p>
              <p className="text-ink-primary font-medium leading-snug">{field}</p>
              <p className="text-ink-muted text-sm">{institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
