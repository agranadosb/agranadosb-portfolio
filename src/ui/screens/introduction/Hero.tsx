import { useState } from "react";
import type { UIStrings } from "@/domain/language/UIStrings";
import type { Profile } from "@/domain/profile/Profile";
import { ContactModal } from "@/ui/components/contact/ContactModal";
import { GitHubLink, LinkedInLink } from "@/ui/components/nav/SocialLinks";

interface HeroProps {
  profile: Profile;
  ui: UIStrings;
}

export function Hero({ profile, ui }: HeroProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-surface-base overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, color-mix(in oklch, var(--color-accent) 13%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink-primary mb-4">
          {profile.name}
        </h1>

        <p className="text-base md:text-lg text-accent font-semibold mb-6 tracking-wide">
          {profile.title}
        </p>

        <p className="text-ink-secondary max-w-md mx-auto mb-10 text-base md:text-lg leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <a
            href="#experience"
            className="px-6 py-2.5 bg-accent text-surface-base font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            {ui.hero.viewExperience}
          </a>
          <a
            href="/cv.html?print=auto"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-border text-ink-secondary font-medium rounded-lg hover:border-accent hover:text-ink-primary transition-colors text-sm"
          >
            {ui.hero.downloadCV}
          </a>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="px-6 py-2.5 border border-border text-ink-secondary font-medium rounded-lg hover:border-accent hover:text-ink-primary transition-colors text-sm cursor-pointer"
          >
            {ui.hero.contact}
          </button>
        </div>

        <div className="flex gap-5">
          <LinkedInLink url={profile.linkedin.url} />
          <GitHubLink url={profile.github.url} />
        </div>
      </div>

      {contactOpen && (
        <ContactModal
          email={profile.email}
          title={ui.contact.title}
          subtitle={ui.contact.subtitle}
          closeLabel={ui.contact.closeLabel}
          onClose={() => setContactOpen(false)}
        />
      )}
    </section>
  );
}
