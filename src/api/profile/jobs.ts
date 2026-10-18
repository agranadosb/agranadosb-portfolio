import type { Job } from "@/api/profile/Job";

export const JOBS = [
  {
    id: "heligrafics-cto",
    role: "CTO",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jan 2026 - Present",
  },
  {
    id: "heligrafics-staff",
    role: "Project Manager & Staff AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Feb 2024 - Dec 2025",
  },
  {
    id: "heligrafics-senior",
    role: "Senior AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Sep 2023 - Feb 2024",
  },
  {
    id: "new-work",
    role: "Data Engineer",
    company: "New Work",
    location: "Valencia",
    period: "Sep 2022 - Sep 2023",
  },
  {
    id: "heligrafics-scientist",
    role: "AI Scientist",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jul 2021 - Sep 2022",
  },
  {
    id: "dekalabs",
    role: "Full-Stack Developer",
    company: "Dekalabs",
    location: "Valencia",
    period: "Mar 2020 - Jul 2021",
    defaultCollapsed: true,
  },
  {
    id: "praxya",
    role: "Software Engineer",
    company: "Praxya",
    location: "Valencia",
    period: "Oct 2019 - Mar 2020",
    defaultCollapsed: true,
  },
  {
    id: "visiion-solutec",
    role: "Junior Software Engineer",
    company: "Visiion-Solutec",
    location: "Valencia",
    period: "Aug 2017 - Jun 2019",
    defaultCollapsed: true,
  },
  {
    id: "independent",
    role: "Independent Developer",
    company: "Personal & Client Projects",
    location: "Valencia",
    period: "2015 - Aug 2017",
    defaultCollapsed: true,
  },
] as const satisfies readonly Omit<Job, "summary" | "highlights" | "skills">[];

export type JobId = (typeof JOBS)[number]["id"];
export type JobDetails = Pick<Job, "summary" | "highlights" | "skills">;
