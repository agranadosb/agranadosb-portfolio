import type { About as AboutData } from "@/domain/profile/About";
import { Avatar } from "@/ui/components/about/Avatar";
import { Bio } from "@/ui/components/about/Bio";
import { Stat } from "@/ui/components/about/Stat";
import { SectionTitle } from "@/ui/components/SectionTitle";

interface AboutProps extends Omit<AboutData, "cvSummary"> {
  photoSrc?: string;
  title: string;
}

export function About({ photoSrc, bio, stats, title }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>{title}</SectionTitle>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-14">
          <Avatar src={photoSrc} />
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
