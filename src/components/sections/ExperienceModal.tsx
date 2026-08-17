// À placer dans : src/components/sections/ExperienceModal.tsx
"use client";

import { useEffect } from "react";
import { Experience } from "@/types";
import styles from "./ExperienceModal.module.css";

export default function ExperienceModal({
  experience,
  onClose,
}: {
  experience: Experience;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="experience-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
          ×
        </button>

        <p className="eyebrow">{experience.role}</p>
        <h3 id="experience-modal-title" className={styles.title}>
          {experience.company}
        </h3>
        <p className={styles.period}>{experience.period}</p>

        {experience.sector && (
          <div className={styles.block}>
            <p className={styles.blockLabel}>Secteur</p>
            <p className={styles.text}>{experience.sector}</p>
          </div>
        )}

        {experience.companyDescription && (
          <div className={styles.block}>
            <p className={styles.blockLabel}>À propos de la structure</p>
            <p className={styles.text}>{experience.companyDescription}</p>
          </div>
        )}

        <div className={styles.block}>
          <p className={styles.blockLabel}>Comment j&apos;y ai géré la donnée</p>
          <ul className={styles.list}>
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {experience.website && (
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visiter le site de l&apos;entreprise ↗
          </a>
        )}
      </div>
    </div>
  );
}

