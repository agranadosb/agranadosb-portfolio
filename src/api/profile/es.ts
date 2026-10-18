import type { About } from "@/api/profile/About";
import type { Education } from "@/api/profile/Education";
import { PROFILE_EN } from "@/api/profile/en";
import type { Job } from "@/api/profile/Job";
import type { Profile } from "@/api/profile/Profile";
import type { SkillCategory } from "@/api/profile/SkillCategory";

export const PROFILE: Profile = {
  ...PROFILE_EN,
  tagline: "Sistemas de IA para el mundo real: de la investigación a producción.",
};

export const ABOUT: About = {
  bio: [
    "Ingeniero de IA, arquitecto de software y líder de ingeniería con más de 10 años desarrollando software con impacto real para usuarios y negocio.",
    "Mi experiencia combina visión por computador y NLP, big data geoespacial, pipelines de datos a gran escala, arquitectura, infraestructura cloud y el liderazgo de equipos que las implementan.",
    "Actualmente soy CTO en Heligráfics, en Valencia, donde lidero la estrategia técnica y el desarrollo de productos software con varios equipos de ingeniería.",
  ],
  stats: [
    { label: "Experiencia", value: "10+ años" },
    { label: "Rol actual", value: "CTO · Heligráfics" },
    { label: "Especialidad", value: "Ingeniería de Software · IA" },
    { label: "Formación", value: "Máster · Grado" },
  ],
  cvSummary:
    "Líder técnico, arquitecto de software e ingeniero de IA con más de 10 años desarrollando software con impacto real para usuarios y negocio. Actualmente CTO en Heligráfics, donde lidero equipos de investigación de IA, ingeniería de datos e infraestructura. Experiencia principal en machine learning con PyTorch, visión por computador, LLMs, pipelines de datos distribuidos con Kafka y Spark, infraestructura cloud en GCP y Kubernetes, y cumplimiento ISO 42001 / ISO 27001.",
};

export const JOBS: Job[] = [
  {
    role: "CTO",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jan 2026 - Present",
    summary:
      "Responsable de la estrategia técnica, la arquitectura y la ejecución de los proyectos de ingeniería de la empresa, incluyendo equipos, procesos, herramientas internas y cumplimiento normativo.",
    highlights: [
      "Dirijo entre 20 y 40 ingenieros distribuidos en equipos de investigación de IA, ingeniería de datos e infraestructura.",
      "Superviso la arquitectura, la planificación técnica y la calidad de entrega de los proyectos.",
      "Rediseño la plataforma aplicando Domain-Driven Design (DDD), arquitectura hexagonal y una separación clara entre dominios de infraestructura y productos de datos.",
      "Impulsando un enfoque data-first para acelerar el desarrollo de UIs orientadas al cliente basadas en modelos de dominio y lógica de negocio bien definidos.",
      "Fomento el desarrollo asistido por IA con GitHub Copilot y Claude, orientando el trabajo de ingeniería hacia la especificación de negocio y el diseño arquitectónico.",
      "Definí estándares de ingeniería a nivel de empresa: branching, revisión de PRs, Definition of Done, ceremonias de sprint, CI/CD, gestión de infraestructura y onboarding.",
      "Desarrollé un dashboard interno con IA que integra datos de ERP y GitHub para dar visibilidad sobre el avance de sprints, estado de tareas y entrega por proyecto.",
      "Realizo auditorías internas de cumplimiento frente a procedimientos de empresa y requisitos ISO, y lidero el proceso de certificación ISO 27001 y su alineación con el ENS.",
    ],
    skills: [
      "DDD",
      "Arquitectura hexagonal",
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
      "Responsable de llevar a producción productos de IA para gestión forestal de precisión, gestionando 5 proyectos simultáneos con equipos multifuncionales. Lideré la certificación ISO 42001 de la empresa y modernicé el flujo de trabajo de ingeniería.",
    highlights: [
      "Lideré la certificación ISO 42001 (Sistemas de Gestión de IA) — una de las primeras empresas en España en obtenerla — formalizando prácticas de gobernanza de datos y ML ya implantadas en la organización.",
      "Lideré la puesta en producción de productos de IA para gestión forestal de precisión: detección automatizada de plantas, malas hierbas, zonas sin vegetación y filas de plantación a partir de terabytes de imágenes aéreas.",
      "Gestioné 5 proyectos simultáneos con equipos multifuncionales de entre 3 y 5 ingenieros en ingeniería, QA y producto.",
      "Diseñé una arquitectura híbrida on-premises/cloud para controlar los costes de transferencia de datos. La validación de imágenes, generación de mosaicos y procesamiento geoespacial se ejecutaban en infraestructura local con clúster de procesamiento y NAS; el entrenamiento e inferencia GPU, en GCP Vertex AI.",
      "Construí pipelines geoespaciales para georreferenciar imágenes aéreas y alinear con precisión los mosaicos con sus coordenadas geográficas reales.",
      "Lideré la migración de toda la empresa de GitLab a GitHub Enterprise; introduje GitHub Copilot y construí pipelines de CI/CD con GitHub Actions, desplegándolos en todos los equipos.",
    ],
    skills: [
      "GCP",
      "Vertex AI",
      "PyTorch",
      "Python",
      "Geomática",
      "Imagen multiespectral",
      "On-premises",
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
      "Construí la base técnica y de IA que permitió convertir PoCs en productos de producción: plataforma MLOps, PoCs clave, asesoramiento arquitectónico y varias aplicaciones independientes. Ascendido a Staff AI Engineer en 5 meses.",
    highlights: [
      "Senté las bases técnicas de una plataforma de gestión de poda forestal (React, Django, PostgreSQL, Oven Media Engine) con gestión operativa y streaming de vídeo en directo.",
      "Desarrollé PoCs para detección aérea de plantas y un sistema de segmentación automática de imágenes para análisis de fases de vuelo en extinción de incendios; ambos evolucionaron hasta convertirse en productos desplegados en producción.",
      "Diseñé y construí una plataforma MLOps interna que estandarizó la gestión de datasets, el versionado de modelos y el seguimiento de experimentos.",
      "Establecí prácticas de ingeniería de datos y gobernanza de IA que se convirtieron en la base técnica para nuevos productos de IA.",
      "Asesoré a todos los equipos técnicos en arquitectura de software y patrones de diseño.",
      "Construí una aplicación de sincronización de activos entre aeronaves y su centro de coordinación, diseñada para operar con conectividad intermitente: transferencia fiable de datos operativos y streaming de vídeo en condiciones de red inestables.",
      "Ascendido a Staff AI Engineer en 5 meses por el impacto de la plataforma de IA, las prácticas de ingeniería de datos y el asesoramiento técnico transversal.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "React",
      "Django",
      "PostgreSQL",
      "Oven Media Engine",
      "MLOps",
      "Visión por computador",
      "Geomática",
    ],
  },
  {
    role: "Data Engineer",
    company: "New Work",
    location: "Valencia",
    period: "Sep 2022 - Sep 2023",
    summary:
      "Construí pipelines de datos distribuidos basados en eventos y sistemas de análisis de contenido con IA a escala, en un equipo con Scala como lenguaje principal. Lideré las decisiones de arquitectura para las iniciativas basadas en Python, IA y LLMs.",
    highlights: [
      "Construí pipelines Kafka que procesaban flujos de eventos de usuarios (actualizaciones de perfil, nuevas publicaciones, eliminaciones de cuenta) con eliminación en cascada conforme al RGPD en almacenes distribuidos MySQL y Cassandra.",
      "Desarrollé servicios REST para exponer datos de eventos procesados a microservicios internos.",
      "Diseñé pipelines de CI/CD con Kubernetes, AWS, Jenkins y GitHub Actions.",
      "Construí un clasificador de sentimientos basado en BERT para detectar señales positivas/negativas en mensajes de usuarios (PyTorch, Transformers).",
      "Actué como consultor interno de Python, liderando decisiones de arquitectura y herramientas para iniciativas de IA y LLMs en una base de código predominantemente Scala.",
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
      "GDPR / RGPD",
    ],
  },
  {
    role: "AI Scientist",
    company: "Heligráfics",
    location: "Valencia",
    period: "Jul 2021 - Sep 2022",
    summary:
      "Desarrollé sistemas de visión por computador para análisis de imágenes aéreas en dos dominios — evaluación de daños por incendios forestales e inspección de infraestructura eléctrica — implementando arquitecturas de vanguardia a partir de artículos de investigación.",
    highlights: [
      "Desarrollé modelos de segmentación y clasificación para detectar y estimar automáticamente superficies quemadas a partir de mosaicos de imágenes capturadas por sensores aéreos.",
      "Construí sistemas de visión por computador para inspección de infraestructura eléctrica: detección automática de torres e identificación de problemas estructurales en imágenes aéreas.",
      "Implementé YOLOR desde cero a partir del artículo original, adaptándolo para uso en producción con datasets específicos del dominio.",
      "Combiné segmentación U-Net con algoritmos genéticos para la optimización de la función de pérdida y filtros clásicos de imagen para el posprocesado, mejorando la precisión en imágenes aéreas complejas.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "U-Net",
      "YOLOR",
      "ViT",
      "Visión por computador",
      "Algoritmos genéticos",
      "Geomática",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Dekalabs",
    location: "Valencia",
    period: "Mar 2020 - Jul 2021",
    defaultCollapsed: true,
    summary:
      "Desarrollé aplicaciones web en múltiples sectores y prototipé soluciones tempranas de generación de imágenes con VAE y GANs, incluyendo un pipeline para crear imágenes personalizadas a partir de fotos de usuarios.",
    highlights: [
      "Desarrollé aplicaciones web para clientes en sectores de hostelería, inmobiliaria, cripto y deportes usando Python y Vue.js.",
      "Implementé pipelines de CI/CD (Docker, Jenkins, GitHub).",
      "Investigué y prototipé un pipeline de personalización de imágenes con VAE y GANs, capaz de transformar fotos de usuarios en resultados visuales con estilos personalizados.",
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
      "Construí integraciones ERP y migraciones de datos para proyectos de clientes usando Python y Odoo, gestionando el ciclo completo del proyecto, desde la toma de requisitos hasta el despliegue.",
    highlights: [
      "Construí soluciones ERP con Python (Odoo), incluyendo integraciones y migraciones de datos (ETL).",
      "Colaboré estrechamente con los product owners a lo largo de todo el ciclo de vida del proyecto.",
      "Desarrollé soluciones desde la toma de requisitos hasta el despliegue.",
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
      "En etapas posteriores, asumí la responsabilidad completa de varios proyectos, incluyendo comunicación con clientes, desarrollo y entrega.",
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
      "Etapa inicial como desarrollador independiente, creando sitios web y pequeñas aplicaciones para clientes privados y cubriendo el ciclo completo desde requisitos hasta entrega.",
    highlights: [
      "Construí sitios web y aplicaciones para clientes privados como desarrollador independiente.",
      "Desarrollé proyectos completos cubriendo toma de requisitos, desarrollo y despliegue.",
      "Primera experiencia gestionando la relación con clientes y desarrollando software de forma independiente.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Máster",
    field: "Inteligencia Artificial, Reconocimiento de Patrones e Imagen Digital",
    institution: "Universidad Politécnica de Valencia",
  },
  {
    degree: "Grado",
    field: "Ingeniería Informática",
    institution: "Universidad Politécnica de Valencia",
  },
];

export const HONORS: string[] = [
  "Matrícula de Honor en Machine Learning, Estructuras de Datos y Algoritmos, Ingeniería del Software, Bases de Datos y Análisis Matemático — Universidad Politécnica de Valencia.",
  "Trabajo Final de Grado: Machine Learning aplicado a mutaciones genéticas.",
  "Lideré la certificación ISO 42001 de Heligráfics — una de las primeras empresas en España en obtenerla.",
  "Lidero el proceso de certificación ISO 27001 y la alineación con el ENS.",
];

export const STACK: SkillCategory[] = [
  {
    category: "Lenguajes y arquitectura",
    items: ["Python", "TypeScript", "DDD", "Arquitectura hexagonal", "Microservicios"],
  },
  {
    category: "IA / ML",
    items: ["PyTorch", "Transformers", "Vertex AI", "LLMs", "ONNX"],
  },
  {
    category: "Cumplimiento normativo",
    items: ["ISO 42001", "RGPD", "Privacidad de datos", "ISO 27001", "EU AI Act"],
  },
  {
    category: "Ingeniería de datos",
    items: ["Kafka", "Apache Spark", "Kubeflow"],
  },
  {
    category: "Infraestructura",
    items: ["GCP", "Kubernetes", "Docker", "Pulumi", "On-premises"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "PostgreSQL"],
  },
];
