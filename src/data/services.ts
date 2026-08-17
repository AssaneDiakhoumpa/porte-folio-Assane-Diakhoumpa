// À placer dans : src/data/services.ts

import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "etl-elt",
    title: "Conception de pipelines ETL/ELT",
    description:
      "Automatisation de la collecte, transformation et chargement de vos données avec Python, Airflow et dbt.",
    longDescription:
      "Je conçois des pipelines de données automatisés, de la source brute (API, base de données, fichiers) jusqu'à une donnée propre et exploitable. L'objectif : que vos équipes n'aient plus à manipuler manuellement des fichiers Excel ou à lancer des scripts à la main.",
    deliverables: [
      "Pipeline ETL/ELT automatisé et planifié (Airflow)",
      "Documentation technique du flux de données",
      "Gestion des erreurs et alertes en cas d'échec",
      "Transformations versionnées avec dbt",
    ],
    stack: ["Python", "Airflow", "dbt", "PostgreSQL", "Docker"],
    audience:
      "Entreprises avec des processus manuels de collecte ou de traitement de données répétitifs.",
    icon: "Workflow",
  },
  {
    id: "data-warehouse",
    title: "Data Warehousing & modélisation",
    description:
      "Conception d'architectures Star Schema et Data Lake pour structurer vos données efficacement (PostgreSQL, dbt, Hadoop).",
    longDescription:
      "Une donnée bien structurée est une donnée facile à analyser. Je conçois des architectures de Data Warehouse (schéma en étoile, dimensions, faits) adaptées à vos besoins métier, pour que vos rapports et analyses soient rapides, fiables et cohérents dans le temps.",
    deliverables: [
      "Modélisation Star Schema (dimensions & faits)",
      "Data Warehouse structuré et documenté",
      "Couche de données 'curated' prête pour l'analyse",
      "Recommandations d'architecture évolutive",
    ],
    stack: ["PostgreSQL", "dbt", "Hadoop", "Star Schema"],
    audience:
      "Organisations qui veulent centraliser des données dispersées dans plusieurs outils ou fichiers.",
    icon: "Database",
  },
  {
    id: "data-quality",
    title: "Automatisation & Data Quality",
    description:
      "Mise en place de tests, validations et pipelines CI/CD fiables pour garantir l'intégrité de vos données.",
    longDescription:
      "Une donnée fausse ou incomplète coûte cher. Je mets en place des contrôles automatiques qui détectent les anomalies avant qu'elles n'atteignent vos tableaux de bord, ainsi que des pipelines CI/CD pour déployer vos changements en toute confiance.",
    deliverables: [
      "Tests automatisés de qualité de données",
      "Pipeline CI/CD (build, test, déploiement)",
      "Rapports de validation et détection d'anomalies",
      "Conteneurisation Docker pour la portabilité",
    ],
    stack: ["dbt tests", "GitLab CI/CD", "Docker", "Python"],
    audience:
      "Équipes qui ont déjà des pipelines mais souffrent d'erreurs ou d'incohérences récurrentes.",
    icon: "ShieldCheck",
  },
  {
    id: "bigdata-scraping",
    title: "Intégration Big Data & Web Scraping",
    description:
      "Collecte et intégration de données à grande échelle : scraping web (Selenium, BeautifulSoup) et ingestion dans des architectures Big Data (Spark, Hadoop, Kafka).",
    longDescription:
      "Quand la donnée dont vous avez besoin n'existe pas encore chez vous, je vais la chercher : extraction web à grande échelle, puis ingestion dans des architectures capables d'absorber de gros volumes en continu.",
    deliverables: [
      "Scripts de scraping robustes et respectueux des sites cibles",
      "Pipeline d'ingestion Big Data (Spark, Kafka)",
      "Stockage adapté au volume (Data Lake, Hadoop)",
      "Automatisation de la collecte récurrente",
    ],
    stack: ["Selenium", "BeautifulSoup", "Spark", "Hadoop", "Kafka"],
    audience:
      "Entreprises ayant besoin de données externes (marché, concurrence, prix) non disponibles nativement.",
    icon: "Globe",
  },
  {
    id: "reporting",
    title: "Analyse & Data Storytelling",
    description:
      "Dashboards et reporting clairs pour transformer vos données en décisions (Power BI, Tableau, Python).",
    longDescription:
      "Une donnée qui n'est pas comprise n'est pas utile. Je conçois des dashboards clairs et des analyses qui parlent aux décideurs, pas seulement aux data analysts — pour que chaque chiffre mène à une décision.",
    deliverables: [
      "Dashboard interactif (Power BI ou Tableau)",
      "Analyse commentée des tendances clés",
      "Visualisations adaptées à l'audience métier",
      "Formation rapide à l'utilisation du dashboard",
    ],
    stack: ["Power BI", "Tableau", "Python", "Matplotlib"],
    audience:
      "Dirigeants et équipes métier qui veulent des données lisibles, sans jargon technique.",
    icon: "BarChart3",
  },
  {
    id: "infra",
    title: "Infrastructure data & conteneurisation",
    description:
      "Conteneurisation et déploiement de vos projets data avec Docker pour plus de portabilité.",
    longDescription:
      "Un projet data qui fonctionne sur mon ordinateur doit aussi fonctionner sur le vôtre. Je conteneurise vos projets pour qu'ils soient reproductibles, faciles à déployer et à maintenir dans le temps.",
    deliverables: [
      "Projet conteneurisé (Docker / Docker Compose)",
      "Pipeline de déploiement automatisé",
      "Documentation d'installation et de maintenance",
      "Configuration prête pour la production",
    ],
    stack: ["Docker", "Docker Compose", "GitLab CI/CD", "Railway"],
    audience:
      "Équipes techniques qui veulent industrialiser un projet data existant.",
    icon: "Container",
  },
];