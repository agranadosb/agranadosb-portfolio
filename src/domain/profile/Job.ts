export interface Job {
  role: string;
  company: string;
  companyContext?: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
  skills?: string[];
  defaultCollapsed?: boolean;
}
