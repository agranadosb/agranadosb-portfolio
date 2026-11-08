import { getProfileContent } from "@/api/profile";
import { PageShell } from "@/app/layout/PageShell";
import { Areas } from "@/features/areas/Areas";
import { Contact } from "@/features/contact/Contact";
import { Education } from "@/features/education/Education";
import { Experience } from "@/features/experience/Experience";
import { Methodology } from "@/features/methodology/Methodology";
import { ProfileIntroduction } from "@/features/profile/ProfileIntroduction";
import { Stack } from "@/features/stack/Stack";

export const meta = () => {
  const { meta } = getProfileContent("es");
  return [{ title: meta.title }, { name: "description", content: meta.description }];
};

export default function HomePage() {
  return (
    <PageShell>
      <main className="page-main">
        <ProfileIntroduction />
        <Methodology>
          <Areas />
          <Stack />
        </Methodology>
        <Experience />
        <Education />
        <Contact />
      </main>
    </PageShell>
  );
}
