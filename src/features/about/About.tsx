import { SectionTitle } from "@/components/SectionTitle";
import { Avatar } from "@/features/about/components/Avatar";
import { Bio } from "@/features/about/components/Bio";
import { Stat } from "@/features/about/components/Stat";
import { useAbout } from "@/features/about/useAbout";

export function About() {
  const { name, bio, stats, strings } = useAbout();

  return (
    <section id="about" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{strings.title}</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-14">
          <Avatar src="/me.webp" alt={name} />
          <Bio paragraphs={bio} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
