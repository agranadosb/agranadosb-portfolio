import type { SkillCategory } from "@/domain/profile/SkillCategory";
import { SectionTitle } from "@/ui/components/SectionTitle";

interface MainSkillsProps {
  stack: SkillCategory[];
  title: string;
}

export function MainSkills({ stack, title }: MainSkillsProps) {
  return (
    <section id="stack" className="py-24 px-6 bg-surface-base">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{title}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stack.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-accent font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="h-px w-4 bg-accent inline-block" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-surface-raised border border-border text-ink-secondary text-sm hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
