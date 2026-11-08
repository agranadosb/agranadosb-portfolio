import type { Area } from "@/api/profile/Area";
import type { Education } from "@/api/profile/Education";
import type { Experience } from "@/api/profile/Experience";
import type { Methodology } from "@/api/profile/Methodology";
import type { Profile } from "@/api/profile/Profile";
import type { StackRow } from "@/api/profile/StackRow";

export interface ProfileContent {
  meta: { title: string; description: string };
  profile: Profile;
  methodology: Methodology;
  capabilities: string[];
  areas: Area[];
  stack: StackRow[];
  experience: Experience;
  education: Education;
}
