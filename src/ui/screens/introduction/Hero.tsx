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
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-surface-base"
    >
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-ink-primary mb-3">
        {profile.name}
      </h1>
      <p className="text-xl md:text-2xl text-ink-secondary font-medium mb-6">{profile.title}</p>
      <p className="text-ink-secondary max-w-lg mx-auto mb-10 text-lg leading-relaxed">
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#experience"
          className="px-6 py-3 bg-accent text-surface-base font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          {ui.hero.viewExperience}
        </a>
        <a
          href="/cv.html?print=auto"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-border text-ink-primary font-semibold rounded-lg hover:bg-surface-raised transition-colors"
        >
          {ui.hero.downloadCV}
        </a>
        <button
          type="button"
          onClick={() => setContactOpen(true)}
          className="px-6 py-3 border border-border text-ink-primary font-semibold rounded-lg hover:bg-surface-raised transition-colors cursor-pointer"
        >
          {ui.hero.contact}
        </button>
      </div>
      <div className="flex gap-5 mt-4">
        <LinkedInLink url={profile.linkedin.url} />
        <GitHubLink url={profile.github.url} />
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
