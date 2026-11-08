import { createRequire } from "node:module";
import PDFDocument from "pdfkit";
import type { LoaderFunctionArgs } from "react-router";
import { type DatePoint, getProfileContent, type ProfileContent } from "@/api/profile";
import { CV, SITE_URL } from "@/config/site";
import { LANGUAGE_HOME, type Language } from "@/lib/i18n/Language";

// The CV of each language as a PDF, drawn from the profile copy. A resource route: the dev server
// renders it on request and the build pre-renders it next to the pages, so it never goes stale.
// Made for machines as much as for people: one column, standard headings, real text with real
// spaces, URLs written out, a tagged structure and bookmarks.

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

// pdfkit cannot embed an instance of a variable font, so the CV uses Archivo's static cuts. It
// cannot subset IBM Plex Mono either, so dates and contact details are set in Archivo too.
const FONTS = {
  regular: "@fontsource/archivo/files/archivo-latin-400-normal.woff",
  semibold: "@fontsource/archivo/files/archivo-latin-600-normal.woff",
  bold: "@fontsource/archivo/files/archivo-latin-700-normal.woff",
  extrabold: "@fontsource/archivo/files/archivo-latin-800-normal.woff",
};
type Font = keyof typeof FONTS;

const INK = "#17150f";
const MUTED = "#5a5546";
const ACCENT = "#8a5800";
const MM = 72 / 25.4;
const LINE_HEIGHT = 1.3;
const BULLET_INDENT = 12;
// Ligatures draw "fi" as one glyph that text extractors read as a bare "f". fontkit switches
// features off with an object, although pdfkit's types only list arrays.
const NO_LIGATURES = { liga: false, clig: false } as unknown as never[];

type Struct = PDFKit.PDFStructureElement;

export async function loader({ url }: LoaderFunctionArgs) {
  // The normalized URL: pre-rendering also requests the route with a .data suffix.
  const language = (Object.keys(CV) as Language[]).find(
    (candidate) => url.pathname === `/${CV[candidate].path}`,
  );
  if (!language) throw new Response("Not found", { status: 404 });

  return new Response(await renderCv(getProfileContent(language), language), {
    headers: { "Content-Type": "application/pdf" },
  });
}

function cvMetadata({ profile, stack }: ProfileContent, language: Language) {
  return {
    Title: `${profile.name} · ${STRINGS[language].title}`,
    Author: profile.name,
    Subject: `${profile.role}. ${profile.headline.lead}${profile.headline.highlight}`,
    Keywords: stack.flatMap((row) => [row.capability, ...row.tools]).join(", "),
    Creator: SITE_URL,
  };
}

// A URL as people write it: no scheme, no trailing slash, readable characters.
const displayUrl = (url: string) =>
  decodeURI(url)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

const dates = (start: DatePoint, end: DatePoint) => `${start.label} – ${end.label}`;

function renderCv(content: ProfileContent, language: Language): Promise<Blob> {
  const strings = STRINGS[language];
  const { profile, experience, education, stack, areas } = content;

  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 11 * MM, bottom: 11 * MM, left: 16 * MM, right: 16 * MM },
    pdfVersion: "1.7",
    tagged: true,
    lang: language,
    displayTitle: true,
    info: cvMetadata(content, language),
  });
  const fontFile = createRequire(import.meta.url);
  for (const [name, path] of Object.entries(FONTS)) {
    doc.registerFont(name, fontFile.resolve(path));
  }

  const chunks: Uint8Array[] = [];
  doc.on("data", (chunk: Uint8Array) => chunks.push(chunk));
  const pdf = new Promise<Blob>((resolve) => {
    doc.on("end", () => resolve(new Blob(chunks, { type: "application/pdf" })));
  });

  const left = doc.page.margins.left;
  const width = doc.page.width - left - doc.page.margins.right;
  const bottom = () => doc.page.height - doc.page.margins.bottom;

  // Sets the type and returns the text options for it: no ligatures, and the line gap that gives
  // the line height asked for.
  const style = (font: Font, size: number, color = INK, lineHeight = LINE_HEIGHT) => {
    doc.font(font).fontSize(size).fillColor(color);
    return {
      lineGap: size * lineHeight - doc.currentLineHeight(true),
      features: NO_LIGATURES,
    };
  };
  // pdfkit keeps font metrics private; the ascent puts two sizes on one baseline.
  const ascent = () => {
    const { _font, _fontSize } = doc as unknown as {
      _font: { ascender: number };
      _fontSize: number;
    };
    return (_font.ascender / 1000) * _fontSize;
  };
  const heightOf = (text: string, font: Font, size: number, textWidth = width) =>
    doc.heightOfString(text, { width: textWidth, ...style(font, size) });
  // A block that must not split starts on the next page when the rest of this one is too short.
  const keepRoom = (height: number) => {
    if (doc.y + height > bottom()) doc.addPage();
  };
  const space = (points: number) => {
    doc.y += points;
  };

  // Every piece of content is drawn inside the structure element that describes it.
  const tagged = (parent: Struct, type: string, draw: () => void, options = {}) => {
    parent.add(doc.struct(type, options, draw));
  };
  const group = (parent: Struct, type: string) => {
    const element = doc.struct(type);
    parent.add(element);
    return element;
  };

  // Lines are layout, not content: they are marked as artifacts so readers skip them.
  const rule = (thickness: number, color: string) => {
    const y = doc.y + thickness / 2;
    doc.markContent("Artifact", { type: "Layout" });
    doc
      .save()
      .moveTo(left, y)
      .lineTo(left + width, y);
    doc.lineWidth(thickness).strokeColor(color).stroke().restore();
    doc.endMarkedContent();
    space(thickness);
  };

  const paragraph = (parent: Struct, text: string, font: Font = "regular", color = INK) => {
    keepRoom(heightOf(text, font, 9));
    tagged(parent, "P", () => {
      doc.text(text, left, doc.y, { width, ...style(font, 9, color) });
    });
  };

  // A bold term followed by its text, as in "Skills: …".
  const termText = (term: string, text: string, textWidth = width, x = left) => {
    const options = style("bold", 9);
    doc.text(`${term}: `, x, doc.y, { width: textWidth, continued: true, ...options });
    style("regular", 9);
    doc.text(text);
  };

  const list = (parent: Struct, items: string[]) => {
    const element = group(parent, "L");
    items.forEach((item, index) => {
      if (index > 0) space(1);
      keepRoom(heightOf(item, "regular", 9, width - BULLET_INDENT));
      const y = doc.y;
      const entry = group(element, "LI");
      tagged(entry, "Lbl", () => {
        style("regular", 9);
        doc.text("•", left + 3, y, { lineBreak: false });
      });
      tagged(entry, "LBody", () => {
        doc.text(item, left + BULLET_INDENT, y, {
          width: width - BULLET_INDENT,
          ...style("regular", 9),
        });
      });
    });
  };

  const facts = (parent: Struct, items: { term: string; text: string }[]) => {
    const element = group(parent, "L");
    items.forEach(({ term, text }, index) => {
      if (index > 0) space(1);
      keepRoom(heightOf(`${term}: ${text}`, "bold", 9));
      tagged(group(element, "LI"), "LBody", () => termText(term, text));
    });
  };

  // A heading or line on the left, starting in bold at the given size, with its dates on the
  // right, both on one baseline and on one page. The text only measures the left side.
  const dated = (
    parent: Struct,
    type: string,
    size: number,
    period: string,
    text: string,
    drawLeft: (textWidth: number) => void,
  ) => {
    const periodWidth = doc.widthOfString(period, style("regular", 8, MUTED));
    const textWidth = width - periodWidth - 12;
    keepRoom(heightOf(text, "bold", size, textWidth));
    style("bold", size);
    const baseline = doc.y + ascent();
    tagged(parent, type, () => drawLeft(textWidth));
    const end = doc.y;
    tagged(parent, "P", () => {
      const options = style("regular", 8, MUTED);
      doc.text(period, left + width - periodWidth, baseline - ascent(), {
        ...options,
        width: periodWidth + 1,
        lineBreak: false,
      });
    });
    doc.x = left;
    doc.y = end;
  };

  const headingWithPlace = (title: string, place: string, textWidth: number, size = 10) => {
    const options = style("bold", size);
    doc.text(title, left, doc.y, { width: textWidth, continued: true, ...options });
    style("regular", size);
    doc.text(` · ${place}`);
  };

  const section = (title: string, firstBlockHeight: number) => {
    keepRoom(10 + 11 * LINE_HEIGHT + 7 + firstBlockHeight);
    space(10);
    doc.outline.addItem(title);
    const element = group(root, "Sect");
    tagged(element, "H2", () => {
      doc.text(title, left, doc.y, { width, ...style("extrabold", 11) });
    });
    rule(0.75, INK);
    return element;
  };

  const root = doc.struct("Document");
  doc.addStructure(root);

  // Header: name, role, contact and headline.
  tagged(root, "H1", () => {
    doc.text(profile.name, left, doc.y, { width, ...style("extrabold", 22, INK, 1.1) });
  });
  space(3);
  tagged(root, "P", () => {
    doc.text(profile.role, left, doc.y, { width, ...style("semibold", 11) });
  });
  space(4);

  const website = new URL(LANGUAGE_HOME[language], SITE_URL).href;
  const country = new Intl.DisplayNames([language], { type: "region" }).of(
    profile.address.countryCode,
  );
  const contact = [
    { text: `${profile.address.locality}, ${country ?? profile.address.countryCode}` },
    ...(profile.email ? [{ text: profile.email, link: `mailto:${profile.email}` }] : []),
    { text: displayUrl(profile.linkedin), link: profile.linkedin },
    { text: displayUrl(profile.github), link: profile.github },
    { text: displayUrl(website), link: website },
  ];
  // Laid out by hand so that no item, above all a URL, is split across two lines.
  const contactLine = group(root, "P");
  const contactOptions = style("regular", 8, MUTED);
  const pitch = 8 * LINE_HEIGHT;
  let x = left;
  let y = doc.y;
  contact.forEach((item, index) => {
    const itemWidth = doc.widthOfString(item.text, contactOptions);
    if (x > left && x + itemWidth > left + width) {
      x = left;
      y += pitch;
    }
    tagged(contactLine, item.link ? "Link" : "Span", () => {
      doc.text(item.text, x, y, {
        ...style("regular", 8, MUTED),
        lineBreak: false,
        link: item.link,
      });
    });
    x += itemWidth;
    if (index < contact.length - 1) {
      tagged(contactLine, "Span", () => {
        doc.text(" · ", x, y, { ...style("regular", 8, MUTED), lineBreak: false });
      });
      x += doc.widthOfString(" · ", contactOptions);
    }
  });
  doc.y = y + pitch;
  space(6);

  tagged(root, "P", () => {
    doc.text(profile.headline.lead + profile.headline.highlight, left, doc.y, {
      width,
      ...style("bold", 11),
    });
  });
  space(6);
  rule(1.5, ACCENT);

  // Profile.
  const profileSection = section(strings.profile, heightOf(profile.about[0], "regular", 9));
  space(5);
  profile.about.forEach((text, index) => {
    if (index > 0) space(3);
    paragraph(profileSection, text);
  });
  space(4);
  facts(
    profileSection,
    profile.summary.map((item) => ({
      term: item.term,
      text: `${item.highlight ?? ""}${item.detail ?? ""}`.replace(/^ · /, ""),
    })),
  );

  // Experience: every role in reverse chronological order, whatever organization it belongs to.
  const roles = experience.organizations
    .flatMap((organization) => organization.roles.map((role) => ({ ...role, organization })))
    .sort((a, b) => (b.start.datetime ?? "").localeCompare(a.start.datetime ?? ""));
  const roleHeight = (role: (typeof roles)[number]) =>
    5 +
    heightOf(
      `${role.title} · ${role.organization.name}, ${role.organization.location}`,
      "bold",
      10,
    ) +
    2 +
    heightOf(role.summary, "regular", 9) +
    2 +
    heightOf(role.achievements[0] ?? "", "regular", 9, width - BULLET_INDENT);

  const experienceSection = section(strings.experience, roleHeight(roles[0]));
  for (const role of roles) {
    keepRoom(roleHeight(role));
    space(5);
    const article = group(experienceSection, "Art");
    const place = `${role.organization.name}, ${role.organization.location}`;
    dated(article, "H3", 10, dates(role.start, role.end), `${role.title} · ${place}`, (textWidth) =>
      headingWithPlace(role.title, place, textWidth),
    );
    space(2);
    paragraph(article, role.summary);
    space(2);
    list(article, role.achievements);
  }

  const { early } = experience;
  keepRoom(5 + 2 * 10 * LINE_HEIGHT + 3);
  space(5);
  const earlyArticle = group(experienceSection, "Art");
  const earlyHeading = `${early.name} · ${early.location}`;
  dated(earlyArticle, "H3", 10, dates(early.start, early.end), earlyHeading, (textWidth) =>
    headingWithPlace(early.name, early.location, textWidth),
  );
  for (const role of early.roles) {
    space(3);
    const line = `${role.title} · ${role.company}. ${role.summary}`;
    dated(earlyArticle, "P", 9, dates(role.start, role.end), line, (textWidth) => {
      const options = style("bold", 9);
      doc.text(role.title, left, doc.y, { width: textWidth, continued: true, ...options });
      style("regular", 9);
      doc.text(` · ${role.company}. `, { continued: true });
      style("regular", 9, MUTED);
      doc.text(role.summary);
    });
  }

  // Education.
  const educationSection = section(strings.education, 5 + 2 * 10 * LINE_HEIGHT);
  for (const degree of education.degrees) {
    space(5);
    keepRoom(2 * 10 * LINE_HEIGHT);
    tagged(educationSection, "H3", () =>
      headingWithPlace(`${degree.level} · ${degree.title}`, education.institution, width),
    );
    if (degree.note) paragraph(educationSection, degree.note, "regular", MUTED);
  }
  space(5);
  keepRoom(heightOf(`${strings.honors}: ${education.honors.join(", ")}`, "bold", 9));
  tagged(educationSection, "P", () => termText(strings.honors, education.honors.join(", ")));

  // Skills.
  const skills = stack.map((row) => ({ term: row.capability, text: row.tools.join(", ") }));
  const skillsSection = section(strings.skills, 4 + 9 * LINE_HEIGHT);
  space(4);
  facts(skillsSection, skills);

  // Sectors, with the English keywords tagged as English in other languages.
  const sectors = areas.map((area) => ({
    term: area.appliesAI ? `${area.title} (${strings.appliedAI})` : area.title,
    items: area.items,
  }));
  const sectorText = (items: (typeof sectors)[number]["items"]) =>
    items.map((item) => (item.keywords ? `${item.text} (${item.keywords})` : item.text)).join("; ");
  const sectorHeight = (sector: (typeof sectors)[number]) =>
    heightOf(`${sector.term}: ${sectorText(sector.items)}.`, "bold", 9);

  const sectorsSection = section(strings.sectors, 5 + sectorHeight(sectors[0]));
  for (const sector of sectors) {
    space(5);
    keepRoom(sectorHeight(sector));
    const sectorParagraph = group(sectorsSection, "P");
    sectorParagraph.add(() => {
      const options = style("bold", 9);
      doc.text(`${sector.term}: `, left, doc.y, { width, continued: true, ...options });
      style("regular", 9);
    });
    sector.items.forEach((item, index) => {
      const last = index === sector.items.length - 1;
      sectorParagraph.add(() => {
        doc.text(`${index > 0 ? "; " : ""}${item.text}`, { continued: true });
      });
      if (item.keywords) {
        const keywords = `(${item.keywords})`;
        if (language === "en") {
          sectorParagraph.add(() => doc.text(` ${keywords}`, { continued: true }));
        } else {
          sectorParagraph.add(
            doc.struct("Span", { lang: "en" }, () => {
              doc.text(` ${keywords}`, { continued: true });
            }),
          );
        }
      }
      if (last) sectorParagraph.add(() => doc.text("."));
    });
  }

  root.end();
  doc.end();
  return pdf;
}
