import { useProfilePresenter } from "@/ui/hooks/useProfilePresenter";
import { useSkillsPresenter } from "@/ui/hooks/useSkillsPresenter";
import { About } from "@/ui/screens/introduction/About";
import { Hero } from "@/ui/screens/introduction/Hero";
import { MainSkills } from "@/ui/screens/introduction/Skills";

export function Introduction() {
  const profile = useProfilePresenter();
  const stack = useSkillsPresenter();

  return (
    <>
      <Hero profile={profile} />
      <About photoSrc="/me.webp" />
      <MainSkills stack={stack} />
    </>
  );
}
