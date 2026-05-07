const JOBS = [
  {
    role: "CTO",
    company: "Heligráfics",
    companyContext: "AI & geospatial imaging company",
    location: "Valencia",
    period: "Jan 2026 - Present",
    highlights: [
      "Lead and mentor 5 engineering teams (3-5 engineers each) across AI research, data engineering, and infrastructure.",
      "Redesigning platform architecture towards DDD and Hexagonal Architecture, structuring the system around infrastructure domains (auth, observability, storage) and business-line data products.",
      "Driving a data-first approach to enable rapid development of client-facing UIs grounded in well-defined domain models and business logic.",
      "Championing AI-assisted development (GitHub Copilot, Claude) to shift engineering focus from implementation to business logic specification and architectural design.",
      "Defined company-wide procedures for software development, infrastructure management, CI/CD, project creation, and task tracking.",
      "Built an AI-powered employee performance dashboard integrating ERP and GitHub data, enabling quick visibility into sprint progress, task status, and per-project delivery state.",
      "Conducting internal compliance audits against company procedures and ISO regulatory requirements.",
      "Personally leading the ISO 27001 certification process towards ENS (Esquema Nacional de Seguridad) compliance.",
    ],
  },
  {
    role: "Project Manager & Staff AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Feb 2024 - Dec 2025",
    highlights: [
      "Led delivery of AI products for precision forestry: automated detection of plants, weeds, bare zones, and planting rows from TBs of airborne multispectral imagery.",
      "Managed 5 simultaneous projects with cross-functional teams of 3-5 engineers across engineering, QA, and product.",
      "Designed a hybrid on-premise/cloud architecture to control data transfer costs: image validation, mosaic generation, and geomatics processing on a local PC cluster + NAS; GPU-intensive training and inference on GCP Vertex AI.",
      "Built geomatics pipelines to georeference airborne imagery and accurately align mosaics to their geographic footprint.",
      "Led ISO 42001 certification by formalizing existing data governance and ML practices already enforced across teams — minimal new implementation required.",
      "Led company-wide migration from GitLab to GitHub Enterprise, including repository management, permissions, and project structure; introduced GitHub Copilot and built CI/CD pipelines with GitHub Actions, rolling them out across all teams.",
    ],
  },
  {
    role: "Senior AI Engineer",
    company: "Heligráfics",
    location: "Valencia",
    period: "Sep 2023 - Feb 2024",
    highlights: [
      "Laid the technical foundations for a forest pruning management platform (React, Django, PostgreSQL, Oven Media Engine) covering operational management and live video surveillance.",
      "Developed PoCs for airborne plant detection and an automated image segmentation system for aerial firefighting flight-phase analysis — both evolved into production products.",
      "Designed and built an internal MLOps platform standardizing dataset management, model versioning, and experiment tracking across AI projects.",
      "Established the data engineering and AI governance practices that became the company's technical foundation for subsequent AI product delivery.",
      "Advised all technical teams on software architecture and design patterns for the correct design of services and applications.",
      "Built an asset synchronization application between aircraft and their coordination center, handling intermittent connectivity: reliable transfer of operational data to aircraft and video streaming back to base under unstable internet conditions.",
    ],
  },
  {
    role: "Data Engineer",
    company: "New Work",
    location: "Valencia",
    period: "Sep 2022 - Sep 2023",
    highlights: [
      "Built Kafka pipelines processing user event streams (profile updates, new posts, account deletions) with GDPR-compliant cascade deletion across distributed MySQL and Cassandra stores.",
      "Developed REST services to expose processed event data to internal microservices.",
      "Designed CI/CD pipelines using Kubernetes, AWS, Jenkins, and GitHub Actions.",
      "Built a BERT-based fuzzy sentiment classifier to detect positive/negative signal in user-generated messages (PyTorch, Transformers).",
      "Served as internal Python consultant for the team, leading architecture and tooling decisions for AI/LLM initiatives in a predominantly Scala codebase.",
    ],
  },
  {
    role: "AI Scientist",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jul 2021 - Sep 2022",
    highlights: [
      "Developed segmentation and classification models to automatically detect and calculate burned area extents from airborne sensor image mosaics.",
      "Built computer vision systems for electrical infrastructure inspection: automatic tower detection and structural issue identification in aerial imagery.",
      "Implemented YOLOR from scratch based on the original paper, adapting it for production use on domain-specific datasets.",
      "Combined U-Net segmentation with genetic algorithms for loss function optimization and classical image filters for post-processing, improving accuracy on complex aerial imagery.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Dekalabs",
    location: "Valencia",
    period: "Mar 2020 - Jul 2021",
    highlights: [
      "Developed client web applications across hospitality, real estate, crypto, and sports sectors using Python and Vue.js.",
      "Implemented CI/CD pipelines (Docker, Jenkins, GitHub).",
      "Researched and prototyped a generative pipeline (VAE, GANs) to create personalized NFTs from user images.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Praxya",
    location: "Valencia",
    period: "Oct 2019 - Mar 2020",
    highlights: [
      "Built ERP solutions using Python (Odoo), including integrations and data migrations (ETL).",
      "Worked closely with product owners across the full project lifecycle.",
      "Delivered solutions from requirements definition to deployment.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Visiion-Solutec",
    location: "Valencia",
    period: "Aug 2017 - Jun 2019",
    highlights: [
      "Developed ERP-based solutions (Odoo) including integrations and automation systems.",
      "Built data pipelines and distribution algorithms using AI techniques.",
      "Led projects end-to-end in later stages, including client communication and delivery.",
    ],
  },
  {
    role: "Independent Developer",
    company: "Personal & Client Projects",
    location: "Valencia",
    period: "2015 - Aug 2017",
    highlights: [
      "Built small websites and web applications for private clients as an independent developer.",
      "Delivered end-to-end projects covering requirements gathering, development, and deployment.",
      "First hands-on experience managing client relationships and delivering software independently.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface-raised">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-ink-primary mb-12 text-center">Experience</h2>
        <div className="relative border-l border-border pl-8 space-y-12">
          {JOBS.map(({ role, company, companyContext, location, period, highlights }) => (
            <div key={`${role}-${company}-${period}`} className="relative">
              <div className="absolute -left-8.25 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-surface-raised" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-ink-primary font-semibold text-lg leading-tight">{role}</h3>
                  <p className="text-accent text-sm font-medium">
                    {company} · {location}
                    {companyContext && (
                      <span className="text-ink-muted font-normal"> — {companyContext}</span>
                    )}
                  </p>
                </div>
                <span className="text-ink-muted text-sm whitespace-nowrap sm:pt-0.5">{period}</span>
              </div>
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-ink-secondary text-sm leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">›</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
