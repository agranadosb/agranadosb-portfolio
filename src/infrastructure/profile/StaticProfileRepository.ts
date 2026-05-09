import type { ProfileRepository } from "@/application/ports/ProfileRepository";
import type { Language } from "@/domain/language/Language";
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
  email: "alejandro@agranadosb.com",
  linkedin: {
    display: "linkedin.com/in/alejandro-granados-bañuls-011010148",
    url: "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
  },
  github: {
    display: "github.com/agranadosb",
    url: "https://github.com/agranadosb",
  },
};

const PROFILE_ES: Profile = {
  ...PROFILE,
  tagline:
    "Construyendo sistemas de IA que funcionan en el mundo real — de la investigación a la producción.",
};

const JOBS_EN: Job[] = [
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

const JOBS_ES: Job[] = [
  {
    role: "CTO",
    company: "Heligráfics",
    companyContext: "Empresa de IA e imagen geoespacial",
    location: "Valencia",
    period: "Jan 2026 - Present",
    summary:
      "Liderando toda la estrategia técnica y la ejecución de ingeniería de la empresa. Responsable de los equipos, la arquitectura, los procesos, las herramientas y el cumplimiento normativo — el único pilar técnico detrás de cada producto y proyecto.",
    highlights: [
      "Dirijo y mentoneo 5 equipos de ingeniería (3-5 ingenieros cada uno, 20-40 en total) en investigación de IA, ingeniería de datos e infraestructura.",
      "Superviso todo el desarrollo técnico de la empresa — única base técnica y brazo de entrega de cada producto y proyecto.",
      "Rediseñando la arquitectura de plataforma hacia Domain-Driven Design (DDD) y Arquitectura Hexagonal.",
      "Estructurando el sistema en torno a dominios de infraestructura (auth, observabilidad, almacenamiento) y productos de datos por línea de negocio.",
      "Impulsando un enfoque data-first para acelerar el desarrollo de UIs orientadas al cliente basadas en modelos de dominio y lógica de negocio bien definidos.",
      "Promoviendo el desarrollo asistido por IA (GitHub Copilot, Claude) para que la ingeniería se centre en la especificación de lógica de negocio y el diseño arquitectónico.",
      "Definición de estándares de ingeniería a nivel de empresa: estrategia de branching, políticas de revisión de PR, Definition of Done, ceremonias de sprint, workflows de CI/CD, gestión de infraestructura y procedimientos de onboarding.",
      "Desarrollé un dashboard de rendimiento de empleados con IA integrando datos de ERP y GitHub, para visibilidad rápida del progreso de sprints, estado de tareas y entrega por proyecto.",
      "Realización de auditorías de cumplimiento internas contra procedimientos de empresa y requisitos regulatorios ISO.",
      "Liderando personalmente el proceso de certificación ISO 27001 hacia el cumplimiento del ENS (Esquema Nacional de Seguridad).",
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
      "Responsable de la entrega end-to-end de productos de IA para silvicultura de precisión, gestionando 5 proyectos simultáneos con equipos multifuncionales. Lideré la certificación ISO 42001 de la empresa y modernicé el flujo de trabajo de ingeniería.",
    highlights: [
      "Lideré la certificación ISO 42001 (Sistemas de Gestión de IA) — una de las primeras empresas en España en obtenerla — formalizando las prácticas existentes de gobernanza de datos y ML, requiriendo mínima implementación nueva.",
      "Lideré la entrega de productos de IA para silvicultura de precisión: detección automatizada de plantas, malas hierbas, zonas desnudas y filas de plantación a partir de TBs de imágenes multiespectrales aéreas.",
      "Gestioné 5 proyectos simultáneos con equipos multifuncionales de 3-5 ingenieros en ingeniería, QA y producto.",
      "Diseñé una arquitectura híbrida on-premise/cloud para controlar los costes de transferencia de datos: validación de imágenes, generación de mosaicos y procesamiento geomático en un clúster local + NAS; entrenamiento e inferencia GPU en GCP Vertex AI.",
      "Construí pipelines geomáticos para georreferenciar imágenes aéreas y alinear con precisión los mosaicos a su huella geográfica.",
      "Lideré la migración de toda la empresa de GitLab a GitHub Enterprise; introduje GitHub Copilot y construí pipelines de CI/CD con GitHub Actions, desplegándolos en todos los equipos.",
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
      "Construí los cimientos técnicos y de IA que sustentaron la entrega posterior de productos de la empresa: plataforma MLOps, PoCs clave, asesoría de arquitectura y varias aplicaciones independientes. Promoción a Staff AI Engineer en 5 meses.",
    highlights: [
      "Senté las bases técnicas de una plataforma de gestión de poda forestal (React, Django, PostgreSQL, Oven Media Engine) con gestión operativa y videovigilancia en directo.",
      "Desarrollé PoCs para detección aérea de plantas y un sistema de segmentación automática de imágenes para análisis de fases de vuelo en extinción de incendios — ambos evolucionaron a productos en producción.",
      "Diseñé y construí una plataforma MLOps interna que estandarizó la gestión de datasets, el versionado de modelos y el seguimiento de experimentos.",
      "Establecí las prácticas de ingeniería de datos y gobernanza de IA que se convirtieron en el pilar técnico para la entrega posterior de productos de IA.",
      "Asesoré a todos los equipos técnicos en arquitectura de software y patrones de diseño.",
      "Construí una aplicación de sincronización de activos entre aeronaves y su centro de coordinación, gestionando conectividad intermitente: transferencia fiable de datos operativos y streaming de vídeo bajo condiciones de internet inestables.",
      "Promoción a Staff AI Engineer en 5 meses, en reconocimiento de los cimientos de IA e ingeniería de datos construidos en este rol.",
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
    companyContext: "Red profesional alemana cotizada en bolsa (XING) · ~1.500 empleados",
    location: "Valencia",
    period: "Sep 2022 - Sep 2023",
    summary:
      "Construí pipelines de datos distribuidos orientados a eventos y análisis de contenido con IA a escala en un equipo Scala-first, liderando las decisiones de arquitectura para todas las iniciativas de Python e IA/LLM.",
    highlights: [
      "Construí pipelines Kafka que procesaban flujos de eventos de usuarios (actualizaciones de perfil, nuevas publicaciones, eliminaciones de cuenta) con eliminación en cascada conforme al RGPD en almacenes distribuidos MySQL y Cassandra.",
      "Desarrollé servicios REST para exponer datos de eventos procesados a microservicios internos.",
      "Diseñé pipelines de CI/CD con Kubernetes, AWS, Jenkins y GitHub Actions.",
      "Construí un clasificador de sentimiento difuso basado en BERT para detectar señales positivas/negativas en mensajes de usuarios (PyTorch, Transformers).",
      "Actué como consultor interno de Python, liderando decisiones de arquitectura y herramientas para iniciativas de IA/LLM en una codebase predominantemente Scala.",
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
      "Desarrollé sistemas de visión por computador para análisis de imágenes aéreas en dos dominios — evaluación de daños por incendios forestales e inspección de infraestructura eléctrica — implementando arquitecturas de vanguardia directamente desde papers de investigación.",
    highlights: [
      "Desarrollé modelos de segmentación y clasificación para detectar y calcular automáticamente superficies quemadas a partir de mosaicos de imágenes de sensores aéreos.",
      "Construí sistemas de visión por computador para inspección de infraestructura eléctrica: detección automática de torres e identificación de problemas estructurales en imágenes aéreas.",
      "Implementé YOLOR desde cero basándome en el paper original, adaptándolo para uso en producción con datasets específicos del dominio.",
      "Combiné segmentación U-Net con algoritmos genéticos para la optimización de la función de pérdida y filtros clásicos de imagen para el post-procesado, mejorando la precisión en imágenes aéreas complejas.",
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
      "Entregué aplicaciones web en múltiples sectores e investigué IA generativa en sus primeras etapas, prototipando un pipeline para crear imágenes personalizadas a partir de fotos de usuarios.",
    highlights: [
      "Desarrollé aplicaciones web para clientes en sectores de hostelería, inmobiliaria, cripto y deportes usando Python y Vue.js.",
      "Implementé pipelines de CI/CD (Docker, Jenkins, GitHub).",
      "Investigué y prototipé un pipeline de personalización de imágenes generativas (VAE, GANs) que mapea imágenes de usuarios a representaciones visuales únicas.",
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
      "Construí integraciones ERP y migraciones de datos para proyectos de clientes usando Python y Odoo, gestionando el ciclo completo desde requisitos hasta despliegue.",
    highlights: [
      "Construí soluciones ERP con Python (Odoo), incluyendo integraciones y migraciones de datos (ETL).",
      "Colaboré estrechamente con los product owners a lo largo de todo el ciclo de vida del proyecto.",
      "Entregué soluciones desde la definición de requisitos hasta el despliegue.",
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
      "Inicié mi carrera construyendo soluciones ERP y algoritmos de distribución con IA, asumiendo progresivamente la responsabilidad total de los proyectos, incluyendo la comunicación con clientes.",
    highlights: [
      "Desarrollé soluciones basadas en ERP (Odoo) incluyendo integraciones y sistemas de automatización.",
      "Construí pipelines de datos y algoritmos de distribución usando técnicas de IA.",
      "Lideré proyectos end-to-end en etapas posteriores, incluyendo comunicación con clientes y entrega.",
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
      "Primeros pasos en el desarrollo de software — construyendo sitios web y pequeñas aplicaciones para clientes privados, aprendiendo el ciclo completo desde requisitos hasta entrega.",
    highlights: [
      "Construí sitios web y aplicaciones para clientes privados como desarrollador independiente.",
      "Entregué proyectos end-to-end cubriendo captación de requisitos, desarrollo y despliegue.",
      "Primera experiencia gestionando relaciones con clientes y entregando software de forma independiente.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

const EDUCATION_EN: Education[] = [
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

const EDUCATION_ES: Education[] = [
  {
    degree: "MSc",
    field: "IA, Reconocimiento de Patrones e Imagen Digital",
    institution: "Universidad Politécnica de Valencia",
  },
  {
    degree: "BSc",
    field: "Ingeniería Informática",
    institution: "Universidad Politécnica de Valencia",
  },
];

const HONORS_EN: string[] = [
  "Honors in Machine Learning, Data Structures & Algorithms, Software Engineering, Databases, and Mathematical Analysis — Polytechnic University of Valencia.",
  "Final thesis: Machine Learning applied to genetic mutations.",
  "ISO 42001 certification lead — one of the first companies in Spain to achieve it.",
  "ISO 27001 certification process lead (in progress) towards ENS compliance.",
];

const HONORS_ES: string[] = [
  "Matrícula de Honor en Machine Learning, Estructuras de Datos y Algoritmos, Ingeniería del Software, Bases de Datos y Análisis Matemático — Universidad Politécnica de Valencia.",
  "Trabajo Final de Grado: Machine Learning aplicado a mutaciones genéticas.",
  "Responsable de la certificación ISO 42001 — una de las primeras empresas en España en obtenerla.",
  "Responsable del proceso de certificación ISO 27001 (en curso) hacia el cumplimiento del ENS.",
];

const ABOUT_EN: About = {
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
  cvSummary:
    "Engineering leader and hands-on AI practitioner with 10+ years delivering production software systems. Currently CTO at Heligráfics, leading 20–40 engineers across AI research, data engineering, and infrastructure. Core expertise in machine learning (PyTorch, computer vision, LLMs), distributed data pipelines (Kafka, Spark), cloud infrastructure (GCP, Kubernetes), and ISO 42001 / ISO 27001 compliance.",
};

const ABOUT_ES: About = {
  bio: [
    "Ingeniero de IA y líder de ingeniería con más de 10 años construyendo sistemas software en producción. Mi trabajo abarca toda la cadena: visión por computador geoespacial, pipelines de datos a gran escala, infraestructura cloud y los equipos que los hacen posibles.",
    "Actualmente CTO en Heligráfics en Valencia, liderando la estrategia técnica y el desarrollo de productos de IA con múltiples equipos de ingeniería.",
  ],
  stats: [
    { label: "Experiencia", value: "10+ años" },
    { label: "Rol Actual", value: "CTO · Heligráfics" },
    { label: "Especialidad", value: "Ingeniería de Software · IA" },
    { label: "Formación", value: "MSc · BSc" },
  ],
  cvSummary:
    "Líder de ingeniería e ingeniero de IA con más de 10 años entregando sistemas software en producción. Actualmente CTO en Heligráfics, liderando entre 20 y 40 ingenieros en investigación de IA, ingeniería de datos e infraestructura. Experiencia principal en machine learning (PyTorch, visión por computador, LLMs), pipelines de datos distribuidos (Kafka, Spark), infraestructura cloud (GCP, Kubernetes) y cumplimiento ISO 42001 / ISO 27001.",
};

const STACK_EN: SkillCategory[] = [
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

const STACK_ES: SkillCategory[] = [
  {
    category: "Lenguajes / Arquitecturas",
    items: ["Python", "TypeScript", "DDD", "Hexagonal Architecture", "Microservices"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "Transformers", "Vertex AI", "LLM", "ONNX"],
  },
  {
    category: "Cumplimiento Normativo",
    items: ["ISO 42001", "GDPR", "Data Privacy", "ISO 27001", "EU AI Act"],
  },
  {
    category: "Ingeniería de Datos",
    items: ["Kafka", "Apache Spark", "Kubeflow"],
  },
  {
    category: "Infraestructura",
    items: ["GCP", "Kubernetes", "Docker", "Pulumi", "On-premise"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "PostgreSQL"],
  },
];

export class StaticProfileRepository implements ProfileRepository {
  private readonly language: Language;

  constructor(language: Language) {
    this.language = language;
  }

  getProfile(): Profile {
    return this.language === "es" ? PROFILE_ES : PROFILE;
  }

  getAbout(): About {
    return this.language === "es" ? ABOUT_ES : ABOUT_EN;
  }

  getJobs(): Job[] {
    return this.language === "es" ? JOBS_ES : JOBS_EN;
  }

  getEducation(): Education[] {
    return this.language === "es" ? EDUCATION_ES : EDUCATION_EN;
  }

  getSkills(): SkillCategory[] {
    return this.language === "es" ? STACK_ES : STACK_EN;
  }

  getHonors(): string[] {
    return this.language === "es" ? HONORS_ES : HONORS_EN;
  }
}
