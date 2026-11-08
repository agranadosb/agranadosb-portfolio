export interface SummaryItem {
  term: string;
  highlight?: string;
  detail?: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: { lead: string; highlight: string };
  about: string[];
  summary: SummaryItem[];
  email: string | null;
  linkedin: string;
  github: string;
}
