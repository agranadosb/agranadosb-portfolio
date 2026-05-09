import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { About } from "@/domain/profile/About";
import type { Education } from "@/domain/profile/Education";
import type { Job } from "@/domain/profile/Job";
import type { Profile } from "@/domain/profile/Profile";
import type { SkillCategory } from "@/domain/profile/SkillCategory";

const PROFILE: Profile = {
  name: "Alejandro Granados",
  title: "CTO · Staff AI Engineer · Software Architect",
  tagline: "Building AI systems that work in the real world — from research to production.",
  location: "Valencia, Spain",
  email: "agranadosb55199@outlook.com",
  linkedin: {
    display: "linkedin.com/in/alejandro-granados-bañuls-011010148",
    url: "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
  },
  github: {
    display: "github.com/agranadosb",
    url: "https://github.com/agranadosb",
  },
};

const JOBS: Job[] = [
  {
    role: "CTO",
    company: "Heligráfics",
    companyContext: "AI & geospatial imaging company",
    location: "Valencia",
    period: "Jan 2026 - Present",
    summary:
      "Leading all technical strategy and engineering execution across the company. Responsible for teams, architecture, processes, tooling, and compliance — the sole technical foundation behind every product and project.",
    highlights: [
      "Lead and mentor 5 engineering teams (3-5 engineers each, 20-40 engineers total) across AI research, data engineering, and infrastructure.",
      "Oversee all technical development across the company — sole technical base and delivery arm for every product and project.",
      "Redesigning platform architecture towards Domain-Driven Design (DDD) and Hexagonal Architecture.",
      "Structuring the system around infrastructure domains (auth, observability, storage) and business-line data products.",
      "Driving a data-first approach to enable rapid development of client-facing UIs grounded in well-defined domain models and business logic.",
      "Championing AI-assisted development (GitHub Copilot, Claude) to shift engineering focus from implementation to business logic specification and architectural design.",
      "Defined company-wide engineering standards: branching strategy, PR review policies, Definition of Done, sprint ceremonies, CI/CD workflows, infrastructure management, and project onboarding procedures.",
      "Built an AI-powered employee performance dashboard integrating ERP and GitHub data, enabling quick visibility into sprint progress, task status, and per-project delivery state.",
      "Conducting internal compliance audits against company procedures and ISO regulatory requirements.",
      "Personally leading the ISO 27001 certification process towards ENS (Esquema Nacional de Seguridad) compliance.",
    ],
    skills: [
      "DDD",
      "Hexagonal Architecture",
      "Python",
      "React",
      "Django",
      "GitHub Enterprise",
      "GitHub Actions",
      "GitHub Copilot",
      "Claude",
      "ISO 27001",
      "ENS",
    ],
  },
  {
    role: "Project Manager & Staff AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Feb 2024 - Dec 2025",
    summary:
      "Owned end-to-end delivery of AI products for precision forestry, managing 5 simultaneous projects across cross-functional teams. Drove the company's ISO 42001 certification and modernized the entire engineering workflow.",
    highlights: [
      "Led ISO 42001 certification (AI Management Systems) — one of the first companies in Spain to obtain it — by formalizing existing data governance and ML practices, requiring minimal new implementation.",
      "Led delivery of AI products for precision forestry: automated detection of plants, weeds, bare zones, and planting rows from TBs of airborne multispectral imagery.",
      "Managed 5 simultaneous projects with cross-functional teams of 3-5 engineers across engineering, QA, and product.",
      "Designed a hybrid on-premise/cloud architecture to control data transfer costs: image validation, mosaic generation, and geomatics processing on a local PC cluster + NAS; GPU-intensive training and inference on GCP Vertex AI.",
      "Built geomatics pipelines to georeference airborne imagery and accurately align mosaics to their geographic footprint.",
      "Led company-wide migration from GitLab to GitHub Enterprise, including repository management, permissions, and project structure; introduced GitHub Copilot and built CI/CD pipelines with GitHub Actions, rolling them out across all teams.",
    ],
    skills: [
      "GCP",
      "Vertex AI",
      "PyTorch",
      "Python",
      "Geomatics",
      "Multispectral Imagery",
      "On-premise",
      "NAS",
      "Proxmox",
      "GitHub Enterprise",
      "GitHub Actions",
      "GitHub Copilot",
      "ISO 42001",
    ],
  },
  {
    role: "Senior AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Sep 2023 - Feb 2024",
    summary:
      "Built the technical and AI foundations that underpinned the company's subsequent product delivery: MLOps platform, key product PoCs, cross-team architecture advisory, and several standalone applications. Promoted to Staff AI Engineer within 5 months.",
    highlights: [
      "Laid the technical foundations for a forest pruning management platform (React, Django, PostgreSQL, Oven Media Engine) covering operational management and live video surveillance.",
      "Developed PoCs for airborne plant detection and an automated image segmentation system for aerial firefighting flight-phase analysis — both evolved into production products.",
      "Designed and built an internal MLOps platform standardizing dataset management, model versioning, and experiment tracking across AI projects.",
      "Established the data engineering and AI governance practices that became the company's technical foundation for subsequent AI product delivery.",
      "Advised all technical teams on software architecture and design patterns for the correct design of services and applications.",
      "Built an asset synchronization application between aircraft and their coordination center, handling intermittent connectivity: reliable transfer of operational data to aircraft and video streaming back to base under unstable internet conditions.",
      "Promoted to Staff AI Engineer within 5 months, recognizing the AI and data engineering foundations built during this role.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "React",
      "Django",
      "PostgreSQL",
      "Oven Media Engine",
      "MLOps",
      "Computer Vision",
      "Geomatics",
    ],
  },
  {
    role: "Data Engineer",
    company: "New Work",
    companyContext: "German-listed professional network (XING) · ~1,500 employees",
    location: "Valencia",
    period: "Sep 2022 - Sep 2023",
    summary:
      "Built distributed event-driven data pipelines and AI-powered content analysis at scale in a Scala-first engineering team, while leading architecture decisions for all Python and AI/LLM initiatives.",
    highlights: [
      "Built Kafka pipelines processing user event streams (profile updates, new posts, account deletions) with GDPR-compliant cascade deletion across distributed MySQL and Cassandra stores.",
      "Developed REST services to expose processed event data to internal microservices.",
      "Designed CI/CD pipelines using Kubernetes, AWS, Jenkins, and GitHub Actions.",
      "Built a BERT-based fuzzy sentiment classifier to detect positive/negative signal in user-generated messages (PyTorch, Transformers).",
      "Served as internal Python consultant for the team, leading architecture and tooling decisions for AI/LLM initiatives in a predominantly Scala codebase.",
    ],
    skills: [
      "Scala",
      "Python",
      "Kafka",
      "MySQL",
      "Cassandra",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "GitHub Actions",
      "PyTorch",
      "Transformers",
      "BERT",
      "GDPR",
    ],
  },
  {
    role: "AI Scientist",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jul 2021 - Sep 2022",
    summary:
      "Developed computer vision systems for aerial imagery analysis across two domains — wildfire damage assessment and electrical infrastructure inspection — implementing state-of-the-art architectures directly from research papers.",
    highlights: [
      "Developed segmentation and classification models to automatically detect and calculate burned area extents from airborne sensor image mosaics.",
      "Built computer vision systems for electrical infrastructure inspection: automatic tower detection and structural issue identification in aerial imagery.",
      "Implemented YOLOR from scratch based on the original paper, adapting it for production use on domain-specific datasets.",
      "Combined U-Net segmentation with genetic algorithms for loss function optimization and classical image filters for post-processing, improving accuracy on complex aerial imagery.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "U-Net",
      "YOLOR",
      "ViT",
      "Computer Vision",
      "Genetic Algorithms",
      "Geomatics",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Dekalabs",
    location: "Valencia",
    period: "Mar 2020 - Jul 2021",
    defaultCollapsed: true,
    summary:
      "Delivered web applications across multiple industries and explored early generative AI research, prototyping a pipeline to create personalized images from user images.",
    highlights: [
      "Developed client web applications across hospitality, real estate, crypto, and sports sectors using Python and Vue.js.",
      "Implemented CI/CD pipelines (Docker, Jenkins, GitHub).",
      "Researched and prototyped a generative image personalization pipeline (VAE, GANs) mapping user images to unique visual representations.",
    ],
    skills: ["Python", "Vue.js", "Docker", "Jenkins", "GitHub", "VAE", "GANs"],
  },
  {
    role: "Software Engineer",
    company: "Praxya",
    location: "Valencia",
    period: "Oct 2019 - Mar 2020",
    defaultCollapsed: true,
    summary:
      "Built ERP integrations and data migrations for client projects using Python and Odoo, owning the full lifecycle from requirements to deployment.",
    highlights: [
      "Built ERP solutions using Python (Odoo), including integrations and data migrations (ETL).",
      "Worked closely with product owners across the full project lifecycle.",
      "Delivered solutions from requirements definition to deployment.",
    ],
    skills: ["Python", "Odoo", "ETL", "PostgreSQL"],
  },
  {
    role: "Junior Software Engineer",
    company: "Visiion-Solutec",
    location: "Valencia",
    period: "Aug 2017 - Jun 2019",
    defaultCollapsed: true,
    summary:
      "Started career building ERP solutions and AI-powered distribution algorithms, progressively taking on full project ownership including client communication and delivery.",
    highlights: [
      "Developed ERP-based solutions (Odoo) including integrations and automation systems.",
      "Built data pipelines and distribution algorithms using AI techniques.",
      "Led projects end-to-end in later stages, including client communication and delivery.",
    ],
    skills: ["Python", "Odoo", "ETL"],
  },
  {
    role: "Independent Developer",
    company: "Personal & Client Projects",
    location: "Valencia",
    period: "2015 - Aug 2017",
    defaultCollapsed: true,
    summary:
      "First steps in software development — building websites and small applications for private clients, learning the full cycle from requirements to delivery.",
    highlights: [
      "Built small websites and web applications for private clients as an independent developer.",
      "Delivered end-to-end projects covering requirements gathering, development, and deployment.",
      "First hands-on experience managing client relationships and delivering software independently.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

const EDUCATION: Education[] = [
  {
    degree: "MSc",
    field: "AI, Pattern Recognition & Digital Imaging",
    institution: "Polytechnic University of Valencia",
  },
  {
    degree: "BSc",
    field: "Computer Science",
    institution: "Polytechnic University of Valencia",
  },
];

const HONORS: string[] = [
  "Honors in Machine Learning, Data Structures & Algorithms, Software Engineering, Databases, and Mathematical Analysis — Polytechnic University of Valencia.",
  "Final thesis: Machine Learning applied to genetic mutations.",
  "ISO 42001 certification lead — one of the first companies in Spain to achieve it.",
  "ISO 27001 certification process lead (in progress) towards ENS compliance.",
];

const ABOUT: About = {
  bio: [
    "AI engineer and engineering leader with 10+ years building software systems in production. My work spans the full stack: geospatial computer vision, large-scale data pipelines, cloud infrastructure, and the teams that deliver them.",
    "Currently CTO at Heligráfics in Valencia, leading technical strategy and AI product development across multiple engineering teams.",
  ],
  stats: [
    { label: "Experience", value: "10+ years" },
    { label: "Current Role", value: "CTO · Heligráfics" },
    { label: "Expertise", value: "Software Engineering · AI" },
    { label: "Education", value: "MSc · BSc" },
  ],
};

const STACK: SkillCategory[] = [
  {
    category: "Languages / Architectures",
    items: ["Python", "TypeScript", "DDD", "Hexagonal Architecture", "Microservices"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "Transformers", "Vertex AI", "LLM", "ONNX"],
  },
  {
    category: "Compliance",
    items: ["ISO 42001", "GDPR", "Data Privacy", "ISO 27001", "EU AI Act"],
  },
  {
    category: "Data Engineering",
    items: ["Kafka", "Apache Spark", "Kubeflow"],
  },
  {
    category: "Infrastructure",
    items: ["GCP", "Kubernetes", "Docker", "Pulumi", "On-premise"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "PostgreSQL"],
  },
];

export class StaticProfileRepository implements ProfileRepository {
  getProfile(): Profile {
    return PROFILE;
  }

  getAbout(): About {
    return ABOUT;
  }

  getJobs(): Job[] {
    return JOBS;
  }

  getEducation(): Education[] {
    return EDUCATION;
  }

  getSkills(): SkillCategory[] {
    return STACK;
  }

  getHonors(): string[] {
    return HONORS;
  }
}
