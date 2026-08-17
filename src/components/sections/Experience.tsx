// À placer dans : src/components/sections/Experience.tsx
"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences";
import { Experience as ExperienceType } from "@/types";
import styles from "./Experience.module.css";
import ExperienceModal from "./ExperienceModal";

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceType | null>(null);

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="eyebrow">Parcours</p>
        <h2 className={styles.title}>Expériences professionnelles</h2>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.markerCol}>
                <span
                  className={`${styles.dot} ${exp.current ? styles.dotCurrent : ""}`}
                />
                <span className={styles.line} />
              </div>

              <button
                className={styles.card}
                onClick={() => setSelected(exp)}
              >
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <span className={`mono ${styles.period}`}>
                    {exp.period}
                    {exp.current && (
                      <span className={styles.badge}>En cours</span>
                    )}
                  </span>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <span className={styles.more}>Voir la structure →</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}