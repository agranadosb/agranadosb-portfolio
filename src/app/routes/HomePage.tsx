import { useState } from "react";
import { Nav } from "@/app/layout/Nav";
import { About } from "@/features/about/components/About";
import { ContactModal } from "@/features/contact/components/ContactModal";
import { Education } from "@/features/education/components/Education";
import { Experience } from "@/features/experience/components/Experience";
import { Honors } from "@/features/honors/components/Honors";
import { ProfileIntroduction } from "@/features/profile/components/ProfileIntroduction";
import { Skills } from "@/features/skills/components/Skills";

export function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Nav />
      <main className="pt-14">
        <ProfileIntroduction onContact={() => setContactOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Honors />
      </main>
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
}
