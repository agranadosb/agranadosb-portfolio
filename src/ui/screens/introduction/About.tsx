import type { About as AboutData } from "@/domain/profile/About";
import { Avatar } from "@/ui/components/about/Avatar";
import { Bio } from "@/ui/components/about/Bio";
import { Stat } from "@/ui/components/about/Stat";

interface AboutProps extends AboutData {
  photoSrc?: string;
}

export function About({ photoSrc, bio, stats }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
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
