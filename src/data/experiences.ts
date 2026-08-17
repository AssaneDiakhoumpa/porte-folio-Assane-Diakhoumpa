// À placer dans : src/data/experiences.ts

import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "agl",
    role: "Data Engineer",
    company: "Africa Global Logistique (AGL)",
    period: "Juin 2026 - Aujourd'hui",
    current: true,
    sector: "Logistique & transport multimodal",
    companyDescription:
      "AGL (Africa Global Logistics) est l'opérateur logistique de référence en Afrique, actif dans les solutions portuaires, maritimes, logistiques et ferroviaires. Le groupe, membre de la famille MSC depuis fin 2022, est présent dans plus de 45 pays africains.",
    website: "https://www.aglgroup.com",
    points: [
      "Conception d'un pipeline ETL automatisé (Excel/VBA)",
      "Gestion automatisée des stocks et des mouvements",
      "Modélisation de bases de données relationnelles",
      "Reporting automatisé et facturation multi-clients",
    ],
  },
  {
    id: "cuberfit",
    role: "Data Engineer",
    company: "Cuberfit",
    period: "Avril 2026 - Juin 2026",
    sector: "Sport & bien-être (startup, application mobile)",
    companyDescription:
      "Cuberfit est une startup sénégalaise basée à Dakar qui propose une application de réservation d'activités sport et bien-être sans abonnement — plus de 100 expériences et 50 studios partenaires, avec plus de 2 000 membres actifs.",
    website: "https://cuberfit.com",
    points: [
      "Architecture Data Platform : Data Warehouse, dbt, PostgreSQL, Docker",
      "Data Modeling : Star Schema, Dimensions, Facts, Curated Layer",
      "Data Transformation : SQL, dbt, ETL/ELT, Business Rules",
      "Data Quality : tests automatisés, validation, intégrité des données",
    ],
  },
  {
    id: "centre-sante-rufisque",
    role: "Data Analyst",
    company: "Centre de Santé de Rufisque",
    period: "Juin 2024 - Octobre 2024",
    sector: "Santé publique",
    companyDescription:
      "Structure de santé publique située à Rufisque, au Sénégal, assurant des soins de proximité à la population locale.",
    points: [
      "Collecte & intégration de données sanitaires multi-sites",
      "Préparation des données : Power Query, nettoyage et transformation",
      "Analyse & visualisation : Excel, Python (Pandas, Matplotlib)",
      "Prédiction & décision : séries temporelles (ARIMA) et recommandations",
    ],
  },
];

