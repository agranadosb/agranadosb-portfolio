import { About } from "@/components/introduction/About";
import { Hero } from "@/components/introduction/Hero";
import { MainSkills } from "@/components/introduction/Skills";

export function Introduction() {
  return (
    <>
      <Hero />
      <About photoSrc="/me.webp" />
      <MainSkills />
    </>
  );
}
