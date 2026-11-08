import { getProfileContent, type ProfileContent } from "@/api/profile";
import { PageShell } from "@/app/layout/PageShell";
import { SITE_URL } from "@/config/site";
import { Areas } from "@/features/areas/Areas";
import { Contact } from "@/features/contact/Contact";
import { Education } from "@/features/education/Education";
import { Experience } from "@/features/experience/Experience";
import { Methodology } from "@/features/methodology/Methodology";
import { ProfileIntroduction } from "@/features/profile/ProfileIntroduction";
import { Stack } from "@/features/stack/Stack";
import { DEFAULT_LANGUAGE } from "@/lib/i18n/Language";

export const meta = () => {
  const content = getProfileContent(DEFAULT_LANGUAGE);
  const { title, description } = content.meta;
  const image = `${SITE_URL}og.png`;
  const imageAlt = `${content.profile.name} · ${content.profile.role}`;

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: SITE_URL },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: "es_ES" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
    { "script:ld+json": person(content) },
  ];
};

function person({ profile, experience, education, stack }: ProfileContent) {
  const employer = experience.organizations.find((organization) =>
    organization.roles.some((role) => role.current),
  );
  const currentRole = employer?.roles.find((role) => role.current);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: currentRole?.title,
    worksFor: employer && { "@type": "Organization", name: employer.name },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.address.locality,
      addressCountry: profile.address.countryCode,
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: education.institution },
    knowsAbout: stack.map((row) => row.capability),
    sameAs: [profile.linkedin, profile.github],
  };
}

export default function HomePage() {
  return (
    <PageShell>
      <main className="page-main">
        <ProfileIntroduction />
        <Methodology>
          <Areas />
          <Stack />
        </Methodology>
        <Experience />
        <Education />
        <Contact />
      </main>
    </PageShell>
  );
}
