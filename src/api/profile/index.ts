import * as en from "@/api/profile/en";
import * as es from "@/api/profile/es";
import type { ProfileContent } from "@/api/profile/ProfileContent";
import type { Language } from "@/lib/i18n/Language";

export type { Area, AreaItem } from "@/api/profile/Area";
export type { Degree, Education } from "@/api/profile/Education";
export type {
  DatePoint,
  EarlyCareer,
  EarlyRole,
  Experience,
  Organization,
  Role,
} from "@/api/profile/Experience";
export type { Methodology } from "@/api/profile/Methodology";
export type { Profile, SummaryItem } from "@/api/profile/Profile";
export type { ProfileContent } from "@/api/profile/ProfileContent";
export type { StackRow } from "@/api/profile/StackRow";

const CONTENT: Record<Language, ProfileContent> = {
  es: es.CONTENT,
  en: en.CONTENT,
};

export function getProfileContent(language: Language): ProfileContent {
  return CONTENT[language];
}
