import { useState } from "react";
import { Nav } from "@/app/layout/Nav";
import { About } from "@/features/about/About";
import { ContactModal } from "@/features/contact/ContactModal";
import { Education } from "@/features/education/Education";
import { Experience } from "@/features/experience/Experience";
import { Honors } from "@/features/honors/Honors";
import { ProfileIntroduction } from "@/features/profile/ProfileIntroduction";
import { Skills } from "@/features/skills/Skills";

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
