export interface Job {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  highlights: string[];
  skills?: string[];
  defaultCollapsed?: boolean;
}
