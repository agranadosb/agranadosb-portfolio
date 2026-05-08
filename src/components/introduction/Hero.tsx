import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { GitHubLink, LinkedInLink } from "@/components/SocialLinks";

export function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-surface-base"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink-primary mb-3">
        Alejandro Granados
      </h1>
      <p className="text-xl md:text-2xl text-ink-secondary font-medium mb-6">
        CTO · Staff AI Engineer · Software Architect
      </p>
      <p className="text-ink-secondary max-w-lg mx-auto mb-10 text-lg leading-relaxed">
        Building AI systems that work in the real world — from research to production.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#experience"
          className="px-6 py-3 bg-accent text-surface-base font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          View Experience
        </a>
        <a
          href="/cv?print=auto"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border text-ink-primary font-semibold rounded-lg hover:bg-surface-raised transition-colors"
        >
          Download CV
        </a>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="px-6 py-3 border border-border text-ink-primary font-semibold rounded-lg hover:bg-surface-raised transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>
      <div className="flex gap-5 mt-4">
        <LinkedInLink />
        <GitHubLink />
      </div>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </section>
  );
}

