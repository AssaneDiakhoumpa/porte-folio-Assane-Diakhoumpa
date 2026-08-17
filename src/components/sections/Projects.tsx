// À placer dans : src/components/sections/Projects.tsx
"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import styles from "./Projects.module.css";

const categories: Array<Project["category"] | "Tous"> = [
  "Tous",
  "Data Engineering",
  "Data Analysis",
  "Data Science",
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Tous");

  const filtered =
    filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projets</p>
        <h2 className={styles.title}>Réalisations</h2>
        <p className={styles.subtitle}>
          Une sélection de projets académiques et personnels, avec un accent
          sur l&apos;ingénierie des données.
        </p>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterBtn} ${
                filter === cat ? styles.filterActive : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={`mono ${styles.category}`}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className={styles.featuredBadge}>★ Phare</span>
                )}
              </div>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>

              <ul className={styles.highlights}>
                {project.highlights.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {(project.githubUrl || project.demoUrl || project.datasetUrl) && (
                <div className={styles.links}>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Code →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Démo →
                    </a>
                  )}
                  {project.datasetUrl && (
                    <a href={project.datasetUrl} target="_blank" rel="noopener noreferrer">
                      Dataset →
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
