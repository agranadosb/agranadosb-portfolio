import type { About } from "@/api/profile/About";
import type { Education } from "@/api/profile/Education";
import * as en from "@/api/profile/en";
import * as es from "@/api/profile/es";
import type { Job } from "@/api/profile/Job";
import type { Profile } from "@/api/profile/Profile";
import type { SkillCategory } from "@/api/profile/SkillCategory";
import type { Language } from "@/lib/i18n/Language";

export type { About, Stat } from "@/api/profile/About";
export type { Education } from "@/api/profile/Education";
export type { Job } from "@/api/profile/Job";
export type { Profile } from "@/api/profile/Profile";
export type { SkillCategory } from "@/api/profile/SkillCategory";

const CONTENT = { en, es };

export function getProfile(language: Language): Profile {
  return CONTENT[language].PROFILE;
}

export function getAbout(language: Language): About {
  return CONTENT[language].ABOUT;
}

export function getJobs(language: Language): Job[] {
  return CONTENT[language].JOBS;
}

export function getEducation(language: Language): Education[] {
  return CONTENT[language].EDUCATION;
}

export function getSkills(language: Language): SkillCategory[] {
  return CONTENT[language].STACK;
}

export function getHonors(language: Language): string[] {
  return CONTENT[language].HONORS;
}
