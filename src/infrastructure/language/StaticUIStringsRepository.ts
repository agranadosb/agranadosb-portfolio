import type { UIStringsRepository } from "@/application/ports/UIStringsRepository";
import type { Language } from "@/domain/language/Language";
import type { UIStrings } from "@/domain/language/UIStrings";

const EN: UIStrings = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    honors: "Honors",
  },
  hero: {
    viewExperience: "View Experience",
    downloadCV: "Download CV",
    contact: "Contact",
  },
  sections: {
    about: "About Me",
    skills: "Main Skills",
    experience: "Experience",
    education: "Education",
    honors: "Honors & Achievements",
  },
  job: {
    showDetails: "▸ Show details",
    hideDetails: "▾ Hide details",
  },
  contact: {
    title: "Get in touch",
    subtitle: "Feel free to reach out — I'll get back to you as soon as I can.",
    closeLabel: "Close",
  },
  cv: {
    backToPortfolio: "← Back to portfolio",
    downloadAsPDF: "Download as PDF",
    professionalSummary: "Professional Summary",
    technicalSkills: "Technical Skills",
    workExperience: "Work Experience",
    education: "Education",
    certificationsAchievements: "Certifications & Achievements",
    inField: "in",
  },
  language: {
    switchTo: "ES",
    ariaLabel: "Switch to Spanish",
  },
};

const ES: UIStrings = {
  nav: {
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    education: "Formación",
    honors: "Logros",
  },
  hero: {
    viewExperience: "Ver Experiencia",
    downloadCV: "Descargar CV",
    contact: "Contacto",
  },
  sections: {
    about: "Sobre mí",
    skills: "Principales Skills",
    experience: "Experiencia",
    education: "Formación",
    honors: "Logros y Reconocimientos",
  },
  job: {
    showDetails: "▸ Ver detalles",
    hideDetails: "▾ Ocultar detalles",
  },
  contact: {
    title: "Ponte en contacto",
    subtitle: "No dudes en escribirme — te responderé lo antes posible.",
    closeLabel: "Cerrar",
  },
  cv: {
    backToPortfolio: "← Volver al portfolio",
    downloadAsPDF: "Descargar como PDF",
    professionalSummary: "Resumen Profesional",
    technicalSkills: "Competencias Técnicas",
    workExperience: "Experiencia Laboral",
    education: "Formación",
    certificationsAchievements: "Certificaciones y Logros",
    inField: "en",
  },
  language: {
    switchTo: "EN",
    ariaLabel: "Cambiar a inglés",
  },
};

const STRINGS: Record<Language, UIStrings> = { en: EN, es: ES };

export class StaticUIStringsRepository implements UIStringsRepository {
  getUIStrings(language: Language): UIStrings {
    return STRINGS[language];
  }
}
