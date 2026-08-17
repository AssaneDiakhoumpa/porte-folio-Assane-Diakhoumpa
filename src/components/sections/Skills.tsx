// À placer dans : src/components/sections/Skills.tsx

import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

// Slugs Simple Icons (https://simpleicons.org) pour les outils qui ont un logo officiel disponible
const iconSlugs: Record<string, string> = {
  Python: "python",
  R: "r",
  Airflow: "apacheairflow",
  Kafka: "apachekafka",
  Docker: "docker",
  Spark: "apachespark",
  "Hadoop (HDFS)": "apachehadoop",
  Flask: "flask",
  FastAPI: "fastapi",
  Selenium: "selenium",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  MongoDB: "mongodb",
  "Power BI": "powerbi",
  "Tableau Desktop": "tableau",
  Git: "git",
  GitHub: "github",
  "GitLab CI/CD": "gitlab",
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">Compétences</p>
        <h2 className={styles.title}>Ma boîte à outils</h2>
        <p className={styles.subtitle}>
          Une stack pensée pour l&apos;ingénierie des données, de
          l&apos;ingestion à la restitution.
        </p>

        <div className={styles.grid}>
          {skills.map((group) => (
            <div key={group.category} className={styles.card}>
              <h3 className={styles.category}>{group.category}</h3>
              <div className={styles.tags}>
                {group.skills.map((skill) => {
                  const slug = iconSlugs[skill];
                  return (
                    <span key={skill} className={`mono ${styles.tag}`}>
                      {slug && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://cdn.simpleicons.org/${slug}/f5f7fa`}
                          alt=""
                          className={styles.tagIcon}
                          loading="lazy"
                        />
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}