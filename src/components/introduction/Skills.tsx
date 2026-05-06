const STACK = [
  {
    category: "Languages",
    items: ["Python", "Scala", "Typescript"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "Transformers", "Vertex AI", "LLM", "ONNX"],
  },
  {
    category: "Compliance",
    items: ["ISO 42001", "GDPR", "Data Privacy", "ISO 27001", "EU AI Act"],
  },
  {
    category: "Data Engineering",
    items: ["Kafka", "Apache Spark", "Kubeflow"],
  },
  {
    category: "Infrastructure",
    items: ["GCP", "Kubernetes", "Docker", "Pulumi", "On-premise"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "PostgreSQL"],
  },
];

export function Skills() {
  return (
    <section id="stack" className="py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {STACK.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-2 rounded-md bg-surface-raised border border-border text-ink-secondary text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
