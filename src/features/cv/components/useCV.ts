import { getAbout, getEducation, getHonors, getJobs, getProfile, getSkills } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<
  Language,
  {
    professionalSummary: string;
    technicalSkills: string;
    workExperience: string;
    education: string;
    certificationsAchievements: string;
    inField: string;
  }
> = {
  en: {
    professionalSummary: "Professional Summary",
    technicalSkills: "Technical Skills",
    workExperience: "Work Experience",
    education: "Education",
    certificationsAchievements: "Certifications & Achievements",
    inField: "in",
  },
  es: {
    professionalSummary: "Resumen Profesional",
    technicalSkills: "Competencias Técnicas",
    workExperience: "Experiencia Laboral",
    education: "Formación",
    certificationsAchievements: "Certificaciones y Logros",
    inField: "en",
  },
};

export function useCV() {
  const { language } = useLanguage();
  return {
    profile: getProfile(language),
    summary: getAbout(language).cvSummary,
    skills: getSkills(language),
    jobs: getJobs(language),
    education: getEducation(language),
    honors: getHonors(language),
    strings: STRINGS[language],
  };
}
