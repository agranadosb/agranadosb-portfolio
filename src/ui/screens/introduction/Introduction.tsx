import { useProfilePresenter } from "@/ui/presenters/useProfilePresenter";
import { useSkillsPresenter } from "@/ui/presenters/useSkillsPresenter";
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
