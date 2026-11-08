import { createHash } from "node:crypto";
import type { DatePoint } from "../../src/api/profile/Experience";
import type { ProfileContent } from "../../src/api/profile/ProfileContent";
import { SITE_URL } from "../../src/config/site";
import { LANGUAGE_HOME, type Language } from "../../src/lib/i18n/Language";

// The CV as a print document, built only from the profile copy. Made for machines as much as
// for people: one column, standard headings, real text, no tables or graphics for layout, and no
// ligatures or letter spacing, which make text extractors split or merge words.

const STRINGS: Record<
  Language,
  {
    title: string;
    profile: string;
    experience: string;
    education: string;
    honors: string;
    skills: string;
    sectors: string;
    appliedAI: string;
  }
> = {
  en: {
    title: "Curriculum vitae",
    profile: "Profile",
    experience: "Experience",
    education: "Education",
    honors: "Honors",
    skills: "Skills",
    sectors: "Sectors",
    appliedAI: "applied AI",
  },
  es: {
    title: "Currículum vítae",
    profile: "Perfil",
    experience: "Experiencia",
    education: "Formación",
    honors: "Matrícula de Honor",
    skills: "Competencias",
    sectors: "Ámbitos",
    appliedAI: "IA aplicada",
  },
};

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// A URL as people write it: no scheme, no trailing slash, readable characters.
const displayUrl = (url: string) =>
  decodeURI(url)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

const dates = (start: DatePoint, end: DatePoint) =>
  `${escapeHtml(start.label)} – ${escapeHtml(end.label)}`;

export function cvTitle(content: ProfileContent, language: Language) {
  return `${content.profile.name} · ${STRINGS[language].title}`;
}

export function cvMetadata(content: ProfileContent, language: Language) {
  const { profile, stack } = content;
  return {
    title: cvTitle(content, language),
    author: profile.name,
    subject: `${profile.role}. ${profile.headline.lead}${profile.headline.highlight}`,
    keywords: stack.flatMap((row) => [row.capability, ...row.tools]).join(", "),
  };
}

export function cvDocument(content: ProfileContent, language: Language) {
  const strings = STRINGS[language];
  const { profile, experience, education, stack, areas } = content;
  const website = new URL(LANGUAGE_HOME[language], SITE_URL).href;
  const country = new Intl.DisplayNames([language], { type: "region" }).of(
    profile.address.countryCode,
  );

  const contact = [
    `${escapeHtml(profile.address.locality)}, ${escapeHtml(country ?? profile.address.countryCode)}`,
    profile.email &&
      `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>`,
    `<a href="${escapeHtml(profile.linkedin)}">${escapeHtml(displayUrl(profile.linkedin))}</a>`,
    `<a href="${escapeHtml(profile.github)}">${escapeHtml(displayUrl(profile.github))}</a>`,
    `<a href="${escapeHtml(website)}">${escapeHtml(displayUrl(website))}</a>`,
  ].filter(Boolean);

  // Every role in reverse chronological order, whatever organization it belongs to.
  const roles = experience.organizations
    .flatMap((organization) => organization.roles.map((role) => ({ ...role, organization })))
    .sort((a, b) => (b.start.datetime ?? "").localeCompare(a.start.datetime ?? ""));

  return `
<style>
  @page { size: A4; margin: 11mm 16mm; }
  html, body { background: #fff; }
  body { margin: 0; color: #17150f; font-family: var(--display); font-size: 9pt; line-height: 1.3;
    font-variant-ligatures: none; font-kerning: none; letter-spacing: 0; word-spacing: 0.12em;
    transition: none; }
  a { color: inherit; text-decoration: none; }
  p, ul, h1, h2, h3 { margin: 0; }
  .cv-head { padding-bottom: 9pt; border-bottom: 1.5pt solid #8a5800; }
  .cv-name { font-size: 22pt; font-stretch: 112%; font-weight: 800; line-height: 1.1; }
  .cv-role { margin-top: 3pt; font-size: 11pt; font-weight: 600; }
  .cv-contact { margin-top: 5pt; font-family: var(--mono); font-size: 8pt; color: #5a5546;
    word-spacing: 0; }
  .cv-contact span { white-space: nowrap; }
  .cv-contact span:not(:last-child)::after { content: " ·"; }
  .cv-headline { margin-top: 9pt; font-size: 11pt; font-weight: 700; line-height: 1.3; }
  h2 { margin-top: 10pt; padding-bottom: 2pt; border-bottom: 0.75pt solid #17150f; font-size: 11pt;
    font-weight: 800; break-after: avoid; }
  .cv-block { margin-top: 5pt; }
  p, li { break-inside: avoid; }
  .cv-block > p + p { margin-top: 3pt; }
  .cv-line { display: flex; justify-content: space-between; gap: 12pt; align-items: baseline;
    break-inside: avoid; break-after: avoid; }
  h3 { font-size: 10pt; font-weight: 700; }
  .cv-where { font-weight: 400; }
  .cv-dates { flex: none; font-family: var(--mono); font-size: 8pt; color: #5a5546; }
  .cv-summary { margin-top: 2pt; }
  ul { margin-top: 2pt; padding-left: 12pt; }
  li + li { margin-top: 1pt; }
  .cv-facts { margin-top: 4pt; padding-left: 0; list-style: none; }
  .cv-early { margin-top: 3pt; }
  .cv-muted { color: #5a5546; }
</style>
<main class="cv">
  <header class="cv-head">
    <h1 class="cv-name">${escapeHtml(profile.name)}</h1>
    <p class="cv-role">${escapeHtml(profile.role)}</p>
    <p class="cv-contact">${contact.map((item) => `<span>${item}</span>`).join(" ")}</p>
    <p class="cv-headline">${escapeHtml(profile.headline.lead + profile.headline.highlight)}</p>
  </header>

  <section>
    <h2>${strings.profile}</h2>
    <div class="cv-block">
      ${profile.about.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n      ")}
      <ul class="cv-facts">
        ${profile.summary
          .map(
            (item) =>
              `<li><strong>${escapeHtml(item.term)}:</strong> ${escapeHtml(
                `${item.highlight ?? ""}${item.detail ?? ""}`.replace(/^ · /, ""),
              )}</li>`,
          )
          .join("\n        ")}
      </ul>
    </div>
  </section>

  <section>
    <h2>${strings.experience}</h2>
    ${roles
      .map(
        (role) => `<article class="cv-block">
      <div class="cv-line">
        <h3>${escapeHtml(role.title)} <span class="cv-where">· ${escapeHtml(role.organization.name)}, ${escapeHtml(role.organization.location)}</span></h3>
        <p class="cv-dates">${dates(role.start, role.end)}</p>
      </div>
      <p class="cv-summary">${escapeHtml(role.summary)}</p>
      <ul>
        ${role.achievements.map((achievement) => `<li>${escapeHtml(achievement)}</li>`).join("\n        ")}
      </ul>
    </article>`,
      )
      .join("\n    ")}
    <article class="cv-block">
      <div class="cv-line">
        <h3>${escapeHtml(experience.early.name)} <span class="cv-where">· ${escapeHtml(experience.early.location)}</span></h3>
        <p class="cv-dates">${dates(experience.early.start, experience.early.end)}</p>
      </div>
      ${experience.early.roles
        .map(
          (role) => `<div class="cv-early cv-line">
        <p><strong>${escapeHtml(role.title)}</strong> · ${escapeHtml(role.company)}. <span class="cv-muted">${escapeHtml(role.summary)}</span></p>
        <p class="cv-dates">${dates(role.start, role.end)}</p>
      </div>`,
        )
        .join("\n      ")}
    </article>
  </section>

  <section>
    <h2>${strings.education}</h2>
    ${education.degrees
      .map(
        (degree) => `<div class="cv-block">
      <h3>${escapeHtml(degree.level)} · ${escapeHtml(degree.title)} <span class="cv-where">· ${escapeHtml(education.institution)}</span></h3>
      ${degree.note ? `<p class="cv-muted">${escapeHtml(degree.note)}</p>` : ""}
    </div>`,
      )
      .join("\n    ")}
    <p class="cv-block"><strong>${strings.honors}:</strong> ${education.honors.map(escapeHtml).join(", ")}</p>
  </section>

  <section>
    <h2>${strings.skills}</h2>
    <ul class="cv-facts">
      ${stack
        .map(
          (row) =>
            `<li><strong>${escapeHtml(row.capability)}:</strong> ${row.tools.map(escapeHtml).join(", ")}</li>`,
        )
        .join("\n      ")}
    </ul>
  </section>

  <section>
    <h2>${strings.sectors}</h2>
    ${areas
      .map(
        (area) =>
          `<p class="cv-block"><strong>${escapeHtml(area.title)}${
            area.appliesAI ? ` (${strings.appliedAI})` : ""
          }:</strong> ${area.items
            .map(
              (item) =>
                escapeHtml(item.text) +
                (item.keywords ? ` <span lang="en">(${escapeHtml(item.keywords)})</span>` : ""),
            )
            .join("; ")}.</p>`,
      )
      .join("\n    ")}
  </section>
</main>`;
}

// The fingerprint written into each PDF: the e2e tests compare it with the document the current
// copy and template would produce, so a stale PDF fails the build instead of reaching a recruiter.
export function cvSourceHash(html: string) {
  return createHash("sha256").update(html).digest("hex");
}
