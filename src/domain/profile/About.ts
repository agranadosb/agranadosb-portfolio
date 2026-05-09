export interface Stat {
  label: string;
  value: string;
}

export interface About {
  bio: string[];
  stats: Stat[];
  cvSummary: string;
}
