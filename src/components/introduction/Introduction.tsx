import { About } from "@/components/introduction/About";
import { Hero } from "@/components/introduction/Hero";
import { Skills } from "@/components/introduction/Skills";

export function Introduction() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
