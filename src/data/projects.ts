// À placer dans : src/data/projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "assistant-voyageur",
    slug: "assistant-voyageur-intelligent",
    title: "Assistant Voyageur Intelligent",
    category: "Data Engineering",
    description:
      "Plateforme data end-to-end d'aide au voyage — mémoire de fin de cycle, Sonatel Academy (2025-2026). Projet en équipe de 3, méthode Kanban.",
    context:
      "Conception complète d'une architecture data, de l'ingestion à la restitution utilisateur.",
    stack: [
      "Python",
      "Airflow",
      "MongoDB",
      "PostgreSQL",
      "XGBoost",
      "FastAPI",
      "Llama (RAG)",
      "Flutter",
    ],
    highlights: [
      "Pipeline ELT (Python, Airflow, MongoDB → PostgreSQL)",
      "Data Warehouse en schéma étoile",
      "Modèle de prédiction de retards de vol (XGBoost) — précision 98%",
      "Moteur de recommandation multi-critères (hôtels, transport)",
      "Chatbot RAG (Llama) via API FastAPI",
    ],
    githubUrl: "https://github.com/SDSaliou/AssitantVoyage.git",
    featured: true,
  },
  {
    id: "pipeline-dataflow",
    slug: "pipeline-dataflow-meteo",
    title: "Pipeline Dataflow — Données météo",
    category: "Data Engineering",
    description:
      "Pipeline automatisé de collecte et de traitement de données météorologiques à grande échelle.",
    stack: ["Python", "Cassandra", "Hadoop (Data Lake)", "Airflow", "PostgreSQL"],
    highlights: [
      "Pipeline opérationnel traitant +10 000 enregistrements/jour",
      "Architecture Data Lake avec Hadoop",
      "Orchestration automatisée via Airflow",
    ],
    githubUrl: "https://github.com/AssaneDiakhoumpa/Projet-ETL-ELT-ED.git",
    featured: true,
  },
  {
    id: "migration-mysql-postgresql",
    slug: "migration-mysql-postgresql",
    title: "Migration MySQL → PostgreSQL",
    category: "Data Engineering",
    description:
      "Outil Python de migration automatisée de bases de données (clés, dépendances, IDs), avec interface de suivi.",
    stack: ["Python", "MySQL", "PostgreSQL", "Flask"],
    highlights: [
      "Réduction de 80% du temps de migration manuelle",
      "Gestion automatisée des clés étrangères et dépendances",
      "Interface de suivi en temps réel sous Flask",
    ],
    githubUrl:
      "https://github.com/AssaneDiakhoumpa/migration-mysql-postgresql-flask.git",
    featured: true,
  },
  {
    id: "prediction-prix-laptop",
    slug: "prediction-prix-laptop-ml",
    title: "Prédiction du prix des ordinateurs portables",
    category: "Data Science",
    description:
      "Projet de Machine Learning dans le domaine de la vente au détail : prédire le prix d'un ordinateur portable à partir de ses caractéristiques techniques.",
    context:
      "Comparaison de plusieurs modèles de régression sur un dataset brut (non nettoyé), avec un travail approfondi de préparation des données.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    highlights: [
      "Comparaison de 4 modèles : Régression Linéaire, Lasso, K-NN, Random Forest",
      "Meilleur modèle : Random Forest — RMSE 133 192.83, R² 0.714",
      "Nettoyage complet d'un dataset brut (uncleaned)",
    ],
    githubUrl: "https://github.com/AssaneDiakhoumpa/Projet_Machine_Learning.git",
    datasetUrl:
      "https://www.kaggle.com/datasets/ehtishamsadiq/uncleaned-laptop-price-dataset",
  },
  {
    id: "performances-scolaires",
    slug: "analyse-performances-scolaires",
    title: "Analyse des performances scolaires",
    category: "Data Analysis",
    description:
      "Analyse de résultats d'élèves avec pipeline conteneurisé et déploiement automatisé.",
    stack: ["Python", "Pandas", "Docker", "GitLab CI/CD", "Railway"],
    highlights: [
      "Conteneurisation complète avec Docker",
      "Pipeline CI/CD GitLab (tests, build, déploiement)",
      "Déploiement automatisé sur Railway",
      "Approche data-driven de bout en bout",
    ],
    githubUrl:
      "https://gitlab.com/assanediakhoumpa4/analyse-des-performance-des-eleves.git",
  },
  {
    id: "hackathon-benin",
    slug: "hackathon-anip-benin",
    title: "Hackathon International ANIP — Bénin",
    category: "Data Engineering",
    description:
      "Participation au hackathon international organisé par l'ANIP (Agence Nationale d'Identification des Personnes) du Bénin, en équipe.",
    context:
      "Mon coéquipier s'est classé 1er de la compétition, avec mon appui sur la partie data du projet.",
    stack: ["Python", "SQL"],
    highlights: [
      "Résolution d'une problématique data en temps limité",
      "1ère place obtenue par mon coéquipier",
      "Travail d'équipe en environnement de compétition internationale",
    ],
    githubUrl:
      "https://gitlab.com/assanediakhoumpa4-group/hackathon_benin.git",
  },
];