import type { ProfileContent } from "@/api/profile/ProfileContent";

// The English translation of es.ts, which holds the approved copy: keep both in step.
export const CONTENT: ProfileContent = {
  meta: {
    title: "Alejandro Granados · Portfolio",
    description:
      "Alejandro Granados, CTO and software architect in Valencia, specialized in data management and AI in production. Sectors: wildfire fighting, forest management, emergency management and fertigation; with asset monitoring, video surveillance, telemetry and observability within them.",
  },

  profile: {
    name: "Alejandro Granados",
    role: "CTO at Heligráfics · Software architect · Valencia",
    address: { locality: "Valencia", countryCode: "ES" },
    headline: {
      lead: "Data and AI architecture for ",
      highlight: "wildfire fighting, forest management, emergencies and asset monitoring.",
    },
    about: [
      "I started developing software in 2015, and since 2021 I have worked on AI applied to aerial imagery, geospatial data and emergencies, taking models from research prototypes to systems that work in the field.",
      "As CTO I define the architecture, the engineering standards and regulatory compliance, and I train teams to design software, not just to write it.",
    ],
    summary: [
      { term: "Experience", highlight: "10+ years", detail: " · Master's in AI (UPV)" },
      { term: "Leadership", highlight: "7 teams", detail: " · ~28 people · POs and Tech Leads" },
      { term: "Specialty", highlight: "Data management and AI in production" },
      { term: "Methodology", detail: "DDD · Hexagonal architecture · SOLID" },
      { term: "Core stack", detail: "Python · PostgreSQL / PostGIS · GCP · Kubernetes · Claude" },
      {
        term: "Milestones",
        detail: "ISO 42001 · AI on terabytes of aerial imagery · From AI Scientist to CTO",
      },
    ],
    email: "alejandro@agranadosb.com",
    linkedin: "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
    github: "https://github.com/agranadosb",
  },

  methodology: {
    figure: {
      core: { number: "1", label: "DOMAIN" },
      ports: "2 · PORTS",
      adapters: "3 · ADAPTERS",
    },
    principle: "The code reflects the business, not the other way around.",
    text: "I design and test driven by behavior, and I assume requirements will change. That is why the domain sits at the center and everything else can be replaced.",
    concepts: [
      {
        term: "DDD",
        description:
          "The code speaks the language of the business: a wildfire expert would recognize the concepts in the model.",
      },
      {
        term: "Hexagonal",
        description:
          "I can change the cloud, the AI model or the database without touching the domain: they are adapters.",
      },
      { term: "SOLID", description: "I extend the system without breaking what already works." },
    ],
    practice: [
      {
        title: "One domain, many use cases",
        description:
          "I design reusable domain cores: the same model serves different cases without being rewritten.",
      },
      {
        title: "Data grouped by business, not by client",
        description:
          "Each business line is a data product, even when its clients come from different sectors.",
      },
      {
        title: "Layers to validate fast",
        description:
          "Persistence, data and presentation kept apart: a prototype or an MVP ships early and is built on the same domain.",
      },
    ],
    legend: [
      { number: "1", text: "Domain: the business." },
      { number: "2", text: "Ports: technical capabilities." },
      { number: "3", text: "Adapters: interchangeable tools." },
    ],
  },

  capabilities: [
    "Data management",
    "Backend",
    "Infrastructure",
    "Observability",
    "Compliance",
    "Leadership",
  ],

  areas: [
    {
      id: "incendios",
      title: "Wildfire fighting",
      appliesAI: true,
      items: [
        {
          text: "Real-time asset monitoring: aircraft, crews and vehicles",
          keywords: "asset tracking",
        },
        {
          text: "Video surveillance with live aerial video streaming, in suppression and in prevention",
        },
        { text: "Mission management and resource allocation" },
        { text: "Synchronization over intermittent connectivity", keywords: "offline-first" },
        { text: "Computer vision on aerial imagery" },
        { text: "Burned area estimation", keywords: "burned area mapping" },
        { text: "Aircraft and vehicle telemetry", keywords: "IoT, MQTT" },
      ],
    },
    {
      id: "forestal",
      title: "Forest management",
      appliesAI: true,
      items: [
        { text: "Forestry contract management" },
        { text: "Activity and machinery reports", keywords: "field operations" },
        {
          text: "Asset monitoring: machinery position, status and history",
          keywords: "fleet tracking",
        },
        { text: "Machinery video surveillance and telemetry", keywords: "IoT, live video" },
        {
          text: "Plant and weed detection in aerial imagery",
          keywords: "computer vision, object detection",
        },
        { text: "Georeferencing and mosaics", keywords: "geospatial, GIS" },
        { text: "Multispectral imagery", keywords: "remote sensing" },
        { text: "Hybrid on-premises / cloud architecture" },
      ],
    },
    {
      id: "emergencias",
      title: "Emergency management",
      appliesAI: true,
      items: [
        { text: "Mission management and resource allocation" },
        { text: "Automatic plan generation", keywords: "automated planning" },
        { text: "Incident tracking", keywords: "incident management" },
        {
          text: "Video surveillance and telemetry of field resources",
          keywords: "live video, IoT",
        },
      ],
    },
    {
      id: "fertirrigacion",
      title: "Fertigation",
      appliesAI: false,
      items: [
        { text: "Precision agriculture" },
        { text: "Irrigation and nutrient control", keywords: "industrial automation" },
        { text: "Crop and soil sensor data and telemetry", keywords: "IoT, time series" },
      ],
    },
  ],

  stack: [
    {
      capability: "Data management",
      tools: [
        "Data Mesh (Data as a Product)",
        "Data pipelines (Airflow, Apache Spark)",
        "Event streaming (Kafka)",
        "Relational databases (PostgreSQL)",
        "Columnar storage (Parquet)",
      ],
    },
    {
      capability: "AI and MLOps",
      tools: [
        "Computer vision & image segmentation (U-Net, ViT)",
        "Deep learning (PyTorch)",
        "MLOps (Vertex AI, Kubeflow)",
        "Model serving (ONNX)",
      ],
    },
    {
      capability: "Language models",
      tools: ["LLMs (Claude)", "RAG", "AI agents (MCP)", "LLM evaluation"],
    },
    {
      capability: "Geospatial",
      tools: [
        "Spatial databases (PostGIS, SpatiaLite)",
        "Raster processing (GDAL, Cloud Optimized GeoTIFF)",
        "Map services (GeoServer)",
        "Python geo (GeoPandas, Rasterio)",
      ],
    },
    {
      capability: "Real time and video",
      tools: [
        "IoT messaging (MQTT, EMQX)",
        "Real-time web (WebSockets)",
        "Video streaming (WebRTC, HLS, RTMP, Oven Media Engine)",
      ],
    },
    {
      capability: "Backend",
      tools: [
        "APIs (FastAPI, Django)",
        "Database migrations (Alembic)",
        "Node.js",
        "Frontend (React)",
        "Microservices",
      ],
    },
    {
      capability: "Infrastructure",
      tools: [
        "GCP (Cloud Run, Cloud Storage)",
        "Containers (Docker, Kubernetes)",
        "Infrastructure as code (Pulumi)",
        "On-premises (VPS, NAS)",
        "Hybrid cloud",
        "FinOps (cloud cost optimization)",
      ],
    },
    { capability: "Observability", tools: ["Logs, metrics & tracing (OpenTelemetry)"] },
    { capability: "Delivery and quality", tools: ["CI/CD (GitHub Actions)", "Testing (pytest)"] },
    { capability: "Languages", tools: ["Python", "SQL", "Go", "TypeScript", "C++"] },
    {
      capability: "Architecture and design",
      tools: ["DDD", "Hexagonal architecture", "SOLID", "BDD"],
    },
    {
      capability: "Security and identity",
      tools: ["Identity & access management (Keycloak, OIDC / OAuth2, RBAC)"],
    },
    {
      capability: "Industrial IoT",
      tools: ["PLC programming (Structured Text, IEC 61131-3, matiec)"],
    },
    {
      capability: "Leadership",
      tools: [
        "Technical strategy",
        "Engineering team management",
        "Hiring",
        "Agile methodology (Scrum, roadmaps)",
        "Engineering standards",
      ],
    },
    {
      capability: "Compliance",
      tools: [
        "ISO/IEC 42001 (AI management)",
        "ISO/IEC 27001 (information security)",
        "ENS (Spanish National Security Framework)",
        "GDPR (data protection)",
        "EU AI Act (European AI regulation)",
      ],
    },
  ],

  experience: {
    organizations: [
      {
        id: "heligrafics",
        name: "Heligráfics",
        location: "Valencia",
        start: { label: "2021", datetime: "2021-07" },
        end: { label: "today" },
        note: "with a year at New Work",
        progression: ["AI Scientist", "Senior AI Engineer", "Staff AI Engineer", "CTO"],
        roles: [
          {
            id: "heligrafics-cto",
            title: "CTO",
            start: { label: "Jan 2026", datetime: "2026-01" },
            end: { label: "Present" },
            current: true,
            summary:
              "I lead the company's technology: strategy, architecture, teams and regulatory compliance (ISO 27001 and ENS).",
            achievements: [
              "Defined the company's technology strategy and its development and architecture standards.",
              "Designed the domain data products of each business line, and I coordinate their development and deployment.",
              "I coordinate 7 teams of about 4 people, with their Product Owners and Tech Leads, and how they work: tasks, projects and ceremonies. I take part in hiring technical profiles and work with the management board.",
              "Chose the AI-assisted development tool through an A/B test between Claude and GitHub Copilot.",
              "Reduced infrastructure costs on GCP.",
            ],
          },
          {
            id: "heligrafics-staff",
            title: "Staff AI Engineer",
            start: { label: "Feb 2024", datetime: "2024-02" },
            end: { label: "Dec 2025", datetime: "2025-12" },
            summary:
              "Took the AI products for forest management to production and managed five simultaneous projects with cross-functional teams.",
            achievements: [
              "Put into production quality analysis systems for forest plantations that process terabytes of aerial imagery.",
              "Led the ISO 42001 certification by implementing the data and AI management procedures and standards: one of the first companies in Spain to obtain it.",
              "Built internal libraries for data management and infrastructure as code.",
              "Migrated the company from GitLab to GitHub and rolled out CI/CD across every team.",
            ],
          },
          {
            id: "heligrafics-senior",
            title: "Senior AI Engineer",
            start: { label: "Sep 2023", datetime: "2023-09" },
            end: { label: "Feb 2024", datetime: "2024-02" },
            summary:
              "Turned AI prototypes into products in production. Promoted to Staff AI Engineer within five months.",
            achievements: [
              "Deployed an application for two-way data transfer between aircraft and control centers, built for intermittent connectivity.",
              "Designed an internal MLOps platform to manage datasets, model versions and experiments.",
              "Took the aerial imagery detection and image segmentation prototypes for wildfire fighting to production.",
            ],
          },
          {
            id: "heligrafics-scientist",
            title: "AI Scientist",
            start: { label: "Jul 2021", datetime: "2021-07" },
            end: { label: "Sep 2022", datetime: "2022-09" },
            summary:
              "Computer vision on aerial imagery, implementing architectures from research papers.",
            achievements: [
              "Deployed a model that predicts burned areas from aerial imagery.",
              "Improved the internal libraries for parallel execution.",
              "Started the defect detection project for electrical towers.",
            ],
          },
        ],
      },
      {
        id: "new-work",
        name: "New Work",
        location: "Valencia",
        start: { label: "2022", datetime: "2022-09" },
        end: { label: "2023", datetime: "2023-09" },
        roles: [
          {
            id: "new-work-data-engineer",
            title: "Data Engineer",
            start: { label: "Sep 2022", datetime: "2022-09" },
            end: { label: "Sep 2023", datetime: "2023-09" },
            summary:
              "Distributed event-driven data pipelines, in a team with Scala as its main language.",
            achievements: [
              "Built Kafka pipelines for user events with GDPR-compliant cascade deletion.",
              "Developed a sentiment classifier with language models.",
              "Was the internal Python reference for the AI and LLM initiatives.",
            ],
          },
        ],
      },
    ],
    early: {
      id: "inicios",
      name: "Early career",
      location: "Valencia",
      start: { label: "2015", datetime: "2015" },
      end: { label: "2021", datetime: "2021-07" },
      roles: [
        {
          id: "dekalabs",
          title: "Full-Stack Developer",
          company: "Dekalabs",
          start: { label: "Mar 2020", datetime: "2020-03" },
          end: { label: "Jul 2021", datetime: "2021-07" },
          summary: "Web applications and image generation prototypes (VAE and GAN).",
        },
        {
          id: "praxya",
          title: "Software Engineer",
          company: "Praxya",
          start: { label: "Oct 2019", datetime: "2019-10" },
          end: { label: "Mar 2020", datetime: "2020-03" },
          summary: "ERP integrations and data migrations with Python and Odoo.",
        },
        {
          id: "visiion-solutec",
          title: "Junior Software Engineer",
          company: "Visiion-Solutec",
          start: { label: "Aug 2017", datetime: "2017-08" },
          end: { label: "Jun 2019", datetime: "2019-06" },
          summary:
            "ERP solutions and distribution algorithms, with full ownership of the projects.",
        },
        {
          id: "independiente",
          title: "Independent developer",
          company: "Own clients",
          start: { label: "2015", datetime: "2015" },
          end: { label: "Aug 2017", datetime: "2017-08" },
          summary: "Custom websites and applications, from requirements to delivery.",
        },
      ],
    },
  },

  education: {
    institution: "Universitat Politècnica de València",
    degrees: [
      {
        level: "Master's",
        title: "Artificial Intelligence, Pattern Recognition and Digital Imaging",
      },
      {
        level: "Bachelor's",
        title: "Computer Engineering",
        note: "Final project: machine learning applied to genetic mutations.",
      },
    ],
    honors: [
      "Machine Learning",
      "Data Structures and Algorithms",
      "Software Engineering",
      "Databases",
      "Mathematical Analysis",
    ],
  },
};
