import type { About } from "@/api/profile/About";
import type { Education } from "@/api/profile/Education";
import * as en from "@/api/profile/en";
import * as es from "@/api/profile/es";
import type { Job } from "@/api/profile/Job";
import { JOBS } from "@/api/profile/jobs";
import type { Profile } from "@/api/profile/Profile";
import type { SkillCategory } from "@/api/profile/SkillCategory";
import type { Language } from "@/lib/i18n/Language";

export type { About, Stat } from "@/api/profile/About";
export type { Education } from "@/api/profile/Education";
export type { Job } from "@/api/profile/Job";
export type { Profile } from "@/api/profile/Profile";
export type { SkillCategory } from "@/api/profile/SkillCategory";

export interface ProfileContent {
  profile: Profile;
  about: About;
  jobs: Job[];
  education: Education[];
  skills: SkillCategory[];
  honors: string[];
}

function toProfileContent(content: typeof en): ProfileContent {
  return {
    profile: content.PROFILE,
    about: content.ABOUT,
    jobs: JOBS.map((job) => ({ ...job, ...content.JOB_DETAILS[job.id] })),
    education: content.EDUCATION,
    skills: content.STACK,
    honors: content.HONORS,
  };
}

const CONTENT: Record<Language, ProfileContent> = {
  en: toProfileContent(en),
  es: toProfileContent(es),
};

export function getProfileContent(language: Language): ProfileContent {
  return CONTENT[language];
}
