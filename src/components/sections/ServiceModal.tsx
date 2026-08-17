// À placer dans : src/components/sections/ServiceModal.tsx
"use client";

import { useEffect } from "react";
import { Service } from "@/types";
import ServiceIcon from "./Serviceicon";
import styles from "./ServiceModal.module.css";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
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
      aria-labelledby="service-modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <div className={styles.iconWrap}>
          <ServiceIcon name={service.icon} />
        </div>

        <h3 id="service-modal-title" className={styles.title}>
          {service.title}
        </h3>
        <p className={styles.longDesc}>{service.longDescription}</p>

        <div className={styles.block}>
          <p className={styles.blockLabel}>Ce que vous obtenez</p>
          <ul className={styles.list}>
            {service.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <p className={styles.blockLabel}>Stack technique</p>
          <div className={styles.tags}>
            {service.stack.map((tech) => (
              <span key={tech} className={`mono ${styles.tag}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <p className={styles.blockLabel}>Pour qui</p>
          <p className={styles.audience}>{service.audience}</p>
        </div>

        <a href="#contact" className="btn btn-primary" onClick={onClose}>
          Discuter de ce besoin
        </a>
      </div>
    </div>
  );
}

