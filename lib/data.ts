import {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Workflow,
  BrainCircuit,
  Plug,
  BarChart3,
  AppWindow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Desarrollo Web",
    description:
      "Sitios corporativos rápidos, escalables y optimizados para conversión, construidos con tecnología moderna.",
    icon: Globe,
  },
  {
    title: "Tiendas Online",
    description:
      "E-commerce a medida con pasarelas de pago, gestión de stock y una experiencia de compra fluida.",
    icon: ShoppingCart,
  },
  {
    title: "Sistemas de Gestión",
    description:
      "ERPs y CRMs adaptados a tu operación, para centralizar procesos y tomar mejores decisiones.",
    icon: LayoutDashboard,
  },
  {
    title: "Automatizaciones",
    description:
      "Flujos automáticos que eliminan tareas repetitivas y conectan tus herramientas de trabajo.",
    icon: Workflow,
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integramos modelos de IA en tu producto para potenciar datos, atención al cliente y análisis.",
    icon: BrainCircuit,
  },
  {
    title: "APIs e Integraciones",
    description:
      "Conectamos tus sistemas entre sí y con servicios externos mediante APIs robustas y seguras.",
    icon: Plug,
  },
  {
    title: "Dashboards",
    description:
      "Paneles de control con datos en tiempo real, pensados para decisiones rápidas y claras.",
    icon: BarChart3,
  },
  {
    title: "Aplicaciones Web",
    description:
      "Plataformas y productos digitales completos, con foco en rendimiento y experiencia de usuario.",
    icon: AppWindow,
  },
];

export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  href: string;
};

export const projects: Project[] = [
  {
    name: "AgroBrain",
    description:
      "Plataforma inteligente de gestión agropecuaria con análisis de datos y monitoreo de campo en tiempo real. Actualmente en desarrollo.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    href: "https://agrobrain-nu.vercel.app/",
  },
  {
    name: "Deivid Store",
    description:
      "Marketplace para compra y venta de skins de Counter-Strike 2, con catálogo dinámico y checkout integrado.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Docker"],
    href: "https://deivid-store.netlify.app/",
  },
  {
    name: "NegocIA",
    description:
      "Aplicación de finanzas personales con seguimiento de gastos, presupuestos y reportes automáticos.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Node.js"],
    href: "https://negocia-one.vercel.app/",
  },
  {
    name: "TaxiApp",
    description:
      "Aplicación de viajes tipo Uber, con solicitud de traslados y seguimiento en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "APIs"],
    href: "https://taxiappl.netlify.app/",
  },
  {
    name: "JunkFood",
    description:
      "Menú digital de comidas con catálogo visual y navegación pensada para pedidos rápidos.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS"],
    href: "https://junkfood1.netlify.app/",
  },
  {
    name: "Típica Cocina",
    description:
      "Menú digital para restaurante, con presentación de platos y precios de forma clara y moderna.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS"],
    href: "https://tipica-cocina.netlify.app/",
  },
  {
    name: "Modo Urbano",
    description:
      "Sistema de reservas de turnos para barbería, con agenda online y gestión de disponibilidad.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    href: "https://modourbano.vercel.app/#mis-turnos",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Reunión",
    description:
      "Escuchamos tu idea, entendemos tu negocio y definimos los objetivos del proyecto.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Creamos una propuesta visual y funcional alineada con tu marca y tus usuarios.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos el producto con código limpio, escalable y probado en cada etapa.",
  },
  {
    number: "04",
    title: "Lanzamiento",
    description:
      "Publicamos tu proyecto y te acompañamos en el soporte y la mejora continua.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "100%", label: "Desarrollo a medida" },
  { value: "A+", label: "Diseño premium" },
  { value: "99.9%", label: "Código escalable" },
  { value: "<1s", label: "Alto rendimiento" },
  { value: "SEO", label: "Optimizado" },
  { value: "24/7", label: "Seguridad" },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Martín Alarcón",
    role: "CEO, Agro Norte",
    quote:
      "Boujon Software entendió exactamente lo que necesitábamos. El sistema que construyeron nos ahorra horas de trabajo cada semana.",
  },
  {
    name: "Lucía Fernández",
    role: "Fundadora, Fintrack",
    quote:
      "El nivel de detalle en el diseño y la calidad del código superaron nuestras expectativas por completo.",
  },
  {
    name: "Diego Ramos",
    role: "COO, Tradeit Hub",
    quote:
      "Profesionales de punta a punta. La plataforma que desarrollaron escala sin problemas y el soporte es excelente.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Tailwind",
  "AWS",
  "Vercel",
];

export const trustedCompanies = [
  "Nimbus",
  "Corebit",
  "Vantage",
  "Northline",
  "Datawell",
  "Fluxo",
];

export const socialLinks = {
  instagram: "https://www.instagram.com/boujon.software/",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  email: "mailto:kevinboujon76@gmail.com",
  whatsapp: "https://wa.me/5490000000000",
  instagramDM: "https://www.instagram.com/direct/t/17842400913591533/",
};
