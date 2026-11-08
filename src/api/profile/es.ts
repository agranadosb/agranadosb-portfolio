import type { ProfileContent } from "@/api/profile/ProfileContent";

export const CONTENT: ProfileContent = {
  meta: {
    title: "Alejandro Granados · Portfolio",
    description:
      "Alejandro Granados, CTO y arquitecto de software en Valencia, especializado en gestión del dato e inteligencia artificial en producción. Ámbitos: lucha contra incendios, gestión forestal, gestión de emergencias y fertirrigación; con monitorización de activos, videovigilancia, telemetría y observabilidad dentro de ellos.",
  },

  profile: {
    name: "Alejandro Granados",
    role: "CTO en Heligráfics · Arquitecto de software · Valencia",
    headline: {
      lead: "Arquitectura de datos e IA para ",
      highlight:
        "lucha contra incendios, gestión forestal, emergencias y monitorización de activos.",
    },
    about: [
      "Empecé a desarrollar software en 2015 y desde 2021 trabajo en IA aplicada a imagen aérea, datos geoespaciales y emergencias, llevando modelos de prototipo de investigación a sistemas que funcionan en campo.",
      "Como CTO defino la arquitectura, los estándares de ingeniería y el cumplimiento normativo, y formo a los equipos para diseñar software, no solo para escribirlo.",
    ],
    summary: [
      { term: "Experiencia", highlight: "10+ años", detail: " · Máster en IA (UPV)" },
      { term: "Liderazgo", highlight: "7 equipos", detail: " · ~28 personas · POs y Tech Leads" },
      { term: "Especialidad", highlight: "Gestión del dato e IA en producción" },
      { term: "Metodología", detail: "DDD · Arquitectura hexagonal · SOLID" },
      { term: "Stack núcleo", detail: "Python · PostgreSQL / PostGIS · GCP · Kubernetes · Claude" },
      {
        term: "Hitos",
        detail: "ISO 42001 · IA sobre terabytes de imagen aérea · De AI Scientist a CTO",
      },
    ],
    email: null,
    linkedin: "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
    github: "https://github.com/agranadosb",
  },

  methodology: {
    figure: {
      core: { number: "1", label: "DOMINIO" },
      ports: "2 · PUERTOS",
      adapters: "3 · ADAPTADORES",
    },
    principle: "El código refleja el negocio, no al revés.",
    text: "Diseño y pruebo guiado por el comportamiento y asumo que los requisitos van a cambiar. Por eso el dominio va en el centro y todo lo demás se puede sustituir.",
    concepts: [
      {
        term: "DDD",
        description:
          "El código habla el idioma del negocio: un experto en incendios reconocería los conceptos del modelo.",
      },
      {
        term: "Hexagonal",
        description:
          "Cambio de nube, de modelo de IA o de base de datos sin tocar el dominio: son adaptadores.",
      },
      { term: "SOLID", description: "Amplío el sistema sin romper lo que ya funciona." },
    ],
    practice: [
      {
        title: "Un dominio, muchos casos",
        description:
          "Diseño núcleos de dominio reutilizables: un mismo modelo sirve a casos distintos sin reescribirse.",
      },
      {
        title: "Datos agrupados por negocio, no por cliente",
        description:
          "Cada línea de negocio es un producto de datos, aunque sus clientes vengan de sectores distintos.",
      },
      {
        title: "Capas para validar rápido",
        description:
          "Persistencia, datos y presentación por separado: un prototipo o un MVP sale pronto y se construye sobre el mismo dominio.",
      },
    ],
    legend: [
      { number: "1", text: "Dominio: el negocio." },
      { number: "2", text: "Puertos: capacidades técnicas." },
      { number: "3", text: "Adaptadores: herramientas intercambiables." },
    ],
  },

  capabilities: [
    "Gestión del dato",
    "Backend",
    "Infraestructura",
    "Observabilidad",
    "Normativa",
    "Liderazgo",
  ],

  areas: [
    {
      id: "incendios",
      code: "Á-01",
      title: "Lucha contra incendios",
      appliesAI: true,
      items: [
        {
          text: "Monitorización de activos en tiempo real: aeronaves, brigadas y vehículos",
          keywords: "real-time asset tracking",
        },
        {
          text: "Videovigilancia con streaming de vídeo aéreo en directo, en extinción y en prevención",
          keywords: "live video streaming",
        },
        {
          text: "Gestión de misiones y asignación de recursos",
          keywords: "mission management, resource allocation",
        },
        { text: "Sincronización con conectividad intermitente", keywords: "offline-first" },
        { text: "Visión por computador sobre imagen aérea", keywords: "computer vision" },
        { text: "Estimación de superficie quemada", keywords: "burned area mapping" },
        { text: "Telemetría de aeronaves y vehículos", keywords: "IoT, MQTT" },
      ],
    },
    {
      id: "forestal",
      code: "Á-02",
      title: "Gestión forestal",
      appliesAI: true,
      items: [
        { text: "Gestión de contratos forestales" },
        { text: "Partes de actividad y maquinaria", keywords: "field operations" },
        {
          text: "Monitorización de activos: posición, estado e histórico de la maquinaria",
          keywords: "fleet tracking",
        },
        { text: "Videovigilancia y telemetría de maquinaria", keywords: "IoT, live video" },
        {
          text: "Detección de plantas y malas hierbas en imagen aérea",
          keywords: "computer vision, object detection",
        },
        { text: "Georreferenciación y mosaicos", keywords: "geospatial, GIS" },
        { text: "Imagen multiespectral", keywords: "remote sensing" },
        { text: "Arquitectura híbrida on-premises / cloud", keywords: "hybrid cloud" },
      ],
    },
    {
      id: "emergencias",
      code: "Á-03",
      title: "Gestión de emergencias",
      appliesAI: true,
      items: [
        {
          text: "Gestión de misiones y asignación de recursos",
          keywords: "mission management, resource allocation",
        },
        { text: "Generación automática de planes", keywords: "automated planning" },
        { text: "Seguimiento de incidentes", keywords: "incident management" },
        { text: "Videovigilancia y telemetría de recursos en campo", keywords: "live video, IoT" },
      ],
    },
    {
      id: "fertirrigacion",
      code: "Á-04",
      title: "Fertirrigación",
      appliesAI: false,
      items: [
        { text: "Agricultura de precisión", keywords: "precision agriculture" },
        { text: "Control de riego y nutrientes", keywords: "industrial automation" },
        {
          text: "Datos y telemetría de sensores de cultivo y suelo",
          keywords: "IoT, time series",
        },
      ],
    },
  ],

  stack: [
    {
      capability: "Gestión del dato",
      tools: [
        "Data Mesh (Data as a Product)",
        "Data pipelines (Airflow, Apache Spark)",
        "Event streaming (Kafka)",
        "Relational databases (PostgreSQL)",
        "Columnar storage (Parquet)",
      ],
    },
    {
      capability: "IA y MLOps",
      tools: [
        "Computer vision & image segmentation (U-Net, ViT)",
        "Deep learning (PyTorch)",
        "MLOps (Vertex AI, Kubeflow)",
        "Model serving (ONNX)",
      ],
    },
    {
      capability: "Modelos de lenguaje",
      tools: ["LLMs (Claude)", "RAG", "AI agents (MCP)", "LLM evaluation"],
    },
    {
      capability: "Geoespacial",
      tools: [
        "Spatial databases (PostGIS, SpatiaLite)",
        "Raster processing (GDAL, Cloud Optimized GeoTIFF)",
        "Map services (GeoServer)",
        "Python geo (GeoPandas, Rasterio)",
      ],
    },
    {
      capability: "Tiempo real y vídeo",
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
      capability: "Infraestructura",
      tools: [
        "GCP (Cloud Run, Cloud Storage)",
        "Containers (Docker, Kubernetes)",
        "Infrastructure as code (Pulumi)",
        "On-premises (VPS, NAS)",
        "Hybrid cloud",
        "FinOps (cloud cost optimization)",
      ],
    },
    { capability: "Observabilidad", tools: ["Logs, metrics & tracing (OpenTelemetry)"] },
    { capability: "Entrega y calidad", tools: ["CI/CD (GitHub Actions)", "Testing (pytest)"] },
    { capability: "Lenguajes", tools: ["Python", "SQL", "Go", "TypeScript", "C++"] },
    {
      capability: "Arquitectura y diseño",
      tools: ["DDD", "Arquitectura hexagonal", "SOLID", "BDD"],
    },
    {
      capability: "Seguridad e identidad",
      tools: ["Identity & access management (Keycloak, OIDC / OAuth2, RBAC)"],
    },
    {
      capability: "IoT industrial",
      tools: ["PLC programming (Structured Text, IEC 61131-3, matiec)"],
    },
    {
      capability: "Liderazgo",
      tools: [
        "Estrategia técnica",
        "Gestión de equipos de ingeniería",
        "Contratación",
        "Metodología ágil (Scrum, roadmaps)",
        "Estándares de ingeniería",
      ],
    },
    {
      capability: "Normativa",
      tools: [
        "ISO/IEC 42001 (gestión de IA)",
        "ISO/IEC 27001 (seguridad de la información)",
        "ENS (Esquema Nacional de Seguridad)",
        "RGPD (protección de datos)",
        "EU AI Act (reglamento europeo de IA)",
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
        end: { label: "hoy" },
        note: "con un año en New Work",
        progression: ["AI Scientist", "Senior AI Engineer", "Staff AI Engineer", "CTO"],
        roles: [
          {
            id: "heligrafics-cto",
            title: "CTO",
            start: { label: "Ene 2026", datetime: "2026-01" },
            end: { label: "Actualidad" },
            current: true,
            summary:
              "Dirijo la tecnología de la empresa: estrategia, arquitectura, equipos y cumplimiento normativo (ISO 27001 y ENS).",
            achievements: [
              "Definí la estrategia tecnológica de la empresa y sus estándares de desarrollo y arquitectura.",
              "Diseñé los productos de datos por dominio de cada línea de negocio y coordino su desarrollo y despliegue.",
              "Coordino 7 equipos de unas 4 personas, con sus Product Owners y Tech Leads, y su forma de trabajar: tareas, proyectos y ceremonias. Participo en la contratación de perfiles técnicos y me coordino con el consejo de dirección.",
              "Elegí la herramienta de desarrollo asistido por IA mediante un test A/B entre Claude y GitHub Copilot.",
              "Reduje los costes de infraestructura en GCP.",
            ],
          },
          {
            id: "heligrafics-staff",
            title: "Staff AI Engineer",
            start: { label: "Feb 2024", datetime: "2024-02" },
            end: { label: "Dic 2025", datetime: "2025-12" },
            summary:
              "Llevé a producción los productos de IA para gestión forestal y gestioné cinco proyectos simultáneos con equipos multifuncionales.",
            achievements: [
              "Puse en producción sistemas de análisis de calidad de plantaciones forestales que procesan terabytes de imagen aérea.",
              "Lideré la certificación ISO 42001 implantando los procedimientos y estándares de gestión de datos e IA: de las primeras empresas en España en obtenerla.",
              "Creé librerías internas de gestión del dato y de infraestructura como código.",
              "Migré la empresa de GitLab a GitHub y desplegué CI/CD en todos los equipos.",
            ],
          },
          {
            id: "heligrafics-senior",
            title: "Senior AI Engineer",
            start: { label: "Sep 2023", datetime: "2023-09" },
            end: { label: "Feb 2024", datetime: "2024-02" },
            summary:
              "Convertí prototipos de IA en productos en producción. Ascendido a Staff AI Engineer en cinco meses.",
            achievements: [
              "Desplegué una aplicación de transmisión bidireccional de datos entre aeronaves y centros de control, preparada para conectividad intermitente.",
              "Diseñé una plataforma MLOps interna para gestionar datasets, versiones de modelos y experimentos.",
              "Llevé a producción los prototipos de detección en imagen aérea y de segmentación de imagen para lucha contra incendios.",
            ],
          },
          {
            id: "heligrafics-scientist",
            title: "AI Scientist",
            start: { label: "Jul 2021", datetime: "2021-07" },
            end: { label: "Sep 2022", datetime: "2022-09" },
            summary:
              "Visión por computador sobre imagen aérea, implementando arquitecturas a partir de artículos de investigación.",
            achievements: [
              "Desplegué un modelo de predicción de zonas quemadas a partir de imagen aérea.",
              "Mejoré las librerías internas de ejecución paralela.",
              "Inicié el proyecto de detección de defectos en torres eléctricas.",
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
              "Pipelines de datos distribuidos basados en eventos, en un equipo con Scala como lenguaje principal.",
            achievements: [
              "Construí pipelines Kafka de eventos de usuario con borrado en cascada conforme al RGPD.",
              "Desarrollé un clasificador de sentimiento con modelos de lenguaje.",
              "Fui el referente interno de Python para las iniciativas de IA y LLMs.",
            ],
          },
        ],
      },
    ],
    early: {
      id: "inicios",
      name: "Inicios",
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
          summary: "Aplicaciones web y prototipos de generación de imagen (VAE y GAN).",
        },
        {
          id: "praxya",
          title: "Software Engineer",
          company: "Praxya",
          start: { label: "Oct 2019", datetime: "2019-10" },
          end: { label: "Mar 2020", datetime: "2020-03" },
          summary: "Integraciones ERP y migraciones de datos con Python y Odoo.",
        },
        {
          id: "visiion-solutec",
          title: "Junior Software Engineer",
          company: "Visiion-Solutec",
          start: { label: "Ago 2017", datetime: "2017-08" },
          end: { label: "Jun 2019", datetime: "2019-06" },
          summary:
            "Soluciones ERP y algoritmos de distribución, con responsabilidad completa sobre los proyectos.",
        },
        {
          id: "independiente",
          title: "Desarrollador independiente",
          company: "Clientes propios",
          start: { label: "2015", datetime: "2015" },
          end: { label: "Ago 2017", datetime: "2017-08" },
          summary: "Webs y aplicaciones a medida, de los requisitos a la entrega.",
        },
      ],
    },
  },

  education: {
    institution: "Universitat Politècnica de València",
    degrees: [
      {
        level: "Máster",
        title: "Inteligencia Artificial, Reconocimiento de Patrones e Imagen Digital",
      },
      {
        level: "Grado",
        title: "Ingeniería Informática",
        note: "Trabajo final: machine learning aplicado a mutaciones genéticas.",
      },
    ],
    honors: [
      "Machine Learning",
      "Estructuras de Datos y Algoritmos",
      "Ingeniería del Software",
      "Bases de Datos",
      "Análisis Matemático",
    ],
  },
};
