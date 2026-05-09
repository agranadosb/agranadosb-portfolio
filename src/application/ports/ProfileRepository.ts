import type { About } from "@/domain/profile/About";
import type { Education } from "@/domain/profile/Education";
import type { Job } from "@/domain/profile/Job";
import type { Profile } from "@/domain/profile/Profile";
import type { SkillCategory } from "@/domain/profile/SkillCategory";

export interface ProfileRepository {
  getProfile(): Profile;
  getAbout(): About;
  getJobs(): Job[];
  getEducation(): Education[];
  getSkills(): SkillCategory[];
  getHonors(): string[];
}
