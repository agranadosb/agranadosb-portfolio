import type { About } from "@/domain/profile/About";
import type { Education } from "@/domain/profile/Education";
import type { Job } from "@/domain/profile/Job";
import type { Profile } from "@/domain/profile/Profile";
import type { SkillCategory } from "@/domain/profile/SkillCategory";
import { PROFILE_EN } from "@/infrastructure/profile/data/en";

export const PROFILE: Profile = {
  ...PROFILE_EN,
  tagline:
    "Construyendo sistemas de IA que funcionan en el mundo real — de la investigación a la producción.",
};

export const ABOUT: About = {
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

export const JOBS: Job[] = [
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

export const EDUCATION: Education[] = [
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

export const HONORS: string[] = [
  "Matrícula de Honor en Machine Learning, Estructuras de Datos y Algoritmos, Ingeniería del Software, Bases de Datos y Análisis Matemático — Universidad Politécnica de Valencia.",
  "Trabajo Final de Grado: Machine Learning aplicado a mutaciones genéticas.",
  "Responsable de la certificación ISO 42001 — una de las primeras empresas en España en obtenerla.",
  "Responsable del proceso de certificación ISO 27001 (en curso) hacia el cumplimiento del ENS.",
];

export const STACK: SkillCategory[] = [
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
