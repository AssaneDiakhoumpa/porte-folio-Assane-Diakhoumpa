// À placer dans : src/types/index.ts

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  points: string[];
  sector?: string;
  companyDescription?: string;
  website?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Data Engineering" | "Data Analysis" | "Data Science";
  description: string;
  context?: string;
  stack: string[];
  highlights: string[]; // résultats chiffrés / points forts
  githubUrl?: string;
  demoUrl?: string;
  datasetUrl?: string;
  featured?: boolean; // mis en avant sur la home
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  stack: string[];
  audience: string;
  icon?: string; // nom d'icône (lucide-react)
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}