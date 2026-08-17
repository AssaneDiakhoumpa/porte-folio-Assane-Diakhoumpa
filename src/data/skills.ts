// À placer dans : src/data/skills.ts

import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Ingestion & Orchestration",
    skills: ["Airflow", "Kafka", "Docker", "Spark", "Hadoop (HDFS)"],
  },
  {
    category: "Frameworks Python",
    skills: ["Flask", "FastAPI", "Selenium", "BeautifulSoup (Web Scraping)"],
  },
  {
    category: "Langages & Data",
    skills: ["Python", "SQL", "R", "VBA"],
  },
  {
    category: "Bases de données",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Visualisation & BI",
    skills: ["Power BI", "Tableau Desktop", "Matplotlib", "Seaborn"],
  },
  {
    category: "Outils collaboratifs",
    skills: ["Git", "GitHub", "GitLab CI/CD"],
  },
];