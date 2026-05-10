import { SectionTitle } from "@/ui/components/SectionTitle";
import { useHonorsPresenter } from "@/ui/hooks/useHonorsPresenter";
import { useUIStringsPresenter } from "@/ui/hooks/useUIStringsPresenter";

export function Honors() {
  const honors = useHonorsPresenter();
  const ui = useUIStringsPresenter();

  return (
    <section id="honors" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{ui.sections.honors}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {honors.map((h) => (
            <div
              key={h}
              className="flex gap-3 p-4 rounded-lg border border-border bg-surface-overlay hover:border-accent/40 transition-colors"
            >
              <span className="text-accent shrink-0 mt-0.5 text-base leading-relaxed">✦</span>
              <span className="text-ink-secondary text-sm leading-relaxed">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
