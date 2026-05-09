import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { Language } from "@/domain/language/Language";
import type { About } from "@/domain/profile/About";
import type { Education } from "@/domain/profile/Education";
import type { Job } from "@/domain/profile/Job";
import type { Profile } from "@/domain/profile/Profile";
import type { SkillCategory } from "@/domain/profile/SkillCategory";
import * as en from "@/infrastructure/profile/data/en";
import * as es from "@/infrastructure/profile/data/es";

const DATA = { en, es };

export class StaticProfileRepository implements ProfileRepository {
  private readonly language: Language;

  constructor(language: Language) {
    this.language = language;
  }

  getProfile(): Profile {
    return DATA[this.language].PROFILE;
  }

  getAbout(): About {
    return DATA[this.language].ABOUT;
  }

  getJobs(): Job[] {
    return DATA[this.language].JOBS;
  }

  getEducation(): Education[] {
    return DATA[this.language].EDUCATION;
  }

  getSkills(): SkillCategory[] {
    return DATA[this.language].STACK;
  }

  getHonors(): string[] {
    return DATA[this.language].HONORS;
  }
}
