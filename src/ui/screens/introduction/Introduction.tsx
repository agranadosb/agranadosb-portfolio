import { useAboutPresenter } from "@/ui/hooks/useAboutPresenter";
import { useProfilePresenter } from "@/ui/hooks/useProfilePresenter";
import { useSkillsPresenter } from "@/ui/hooks/useSkillsPresenter";
import { About } from "@/ui/screens/introduction/About";
import { Hero } from "@/ui/screens/introduction/Hero";
import { MainSkills } from "@/ui/screens/introduction/Skills";

export function Introduction() {
  const profile = useProfilePresenter();
  const about = useAboutPresenter();
  const stack = useSkillsPresenter();

  return (
    <>
      <Hero profile={profile} />
      <About photoSrc="/me.webp" bio={about.bio} stats={about.stats} />
      <MainSkills stack={stack} />
    </>
  );
}
