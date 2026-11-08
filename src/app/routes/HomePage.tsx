import type { MetaFunction } from "react-router";
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
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_HOME,
  type Language,
  languageFromPath,
} from "@/lib/i18n/Language";

const LOCALE: Record<Language, string> = { es: "es_ES", en: "en_US" };
const SHARE_IMAGE: Record<Language, string> = { es: "og.png", en: "og-en.png" };

const homeUrl = (language: Language) => new URL(LANGUAGE_HOME[language], SITE_URL).href;

export const meta: MetaFunction = ({ location }) => {
  const language = languageFromPath(location.pathname);
  const content = getProfileContent(language);
  const { title, description } = content.meta;
  const url = homeUrl(language);
  const image = new URL(SHARE_IMAGE[language], SITE_URL).href;
  const imageAlt = `${content.profile.name} · ${content.profile.role}`;
  const languages = Object.keys(LANGUAGE_HOME) as Language[];

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    ...languages.map((alternate) => ({
      tagName: "link",
      rel: "alternate",
      hrefLang: alternate,
      href: homeUrl(alternate),
    })),
    { tagName: "link", rel: "alternate", hrefLang: "x-default", href: homeUrl(DEFAULT_LANGUAGE) },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: LOCALE[language] },
    ...languages
      .filter((alternate) => alternate !== language)
      .map((alternate) => ({ property: "og:locale:alternate", content: LOCALE[alternate] })),
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: imageAlt },
    { "script:ld+json": person(content, url) },
  ];
};

function person({ profile, experience, education, stack }: ProfileContent, url: string) {
  const employer = experience.organizations.find((organization) =>
    organization.roles.some((role) => role.current),
  );
  const currentRole = employer?.roles.find((role) => role.current);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url,
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
