import { SectionHeader } from "@/components/SectionHeader";
import { EarlyCareerList } from "@/features/experience/components/EarlyCareerList";
import { OrganizationTimeline } from "@/features/experience/components/OrganizationTimeline";
import { useExperience } from "@/features/experience/useExperience";
import "@/features/experience/Experience.css";

export function Experience() {
  const { experience, strings } = useExperience();

  return (
    <section id="experiencia" className="section" aria-labelledby="experiencia-title">
      <SectionHeader
        number="02"
        eyebrow={strings.eyebrow}
        title={strings.title}
        titleId="experiencia-title"
      />
      <div className="experience">
        {experience.organizations.map((organization) => (
          <OrganizationTimeline
            key={organization.id}
            organization={organization}
            currentRoleLabel={strings.currentRole}
            progressionLabel={strings.progression}
          />
        ))}
        <EarlyCareerList early={experience.early} />
      </div>
    </section>
  );
}
