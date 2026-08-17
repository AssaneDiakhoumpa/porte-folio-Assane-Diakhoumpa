// À placer dans : src/components/sections/Services.tsx
"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Service } from "@/types";
import styles from "./Services.module.css";
import ServiceIcon from "./Serviceicon";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section id="services" className={`section section-alt ${styles.services}`}>
      <div className="container">
        <p className="eyebrow">Services</p>
        <h2 className={styles.title}>Ce que je peux faire pour vous</h2>
        <p className={styles.subtitle}>
          Disponible en freelance et en full remote, pour des missions
          ponctuelles ou récurrentes. Cliquez sur un service pour en savoir
          plus.
        </p>

        <div className={styles.grid}>
          {services.map((service) => (
            <button
              key={service.id}
              className={styles.card}
              onClick={() => setSelected(service)}
            >
              <div className={styles.iconWrap}>
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <span className={styles.more}>En savoir plus →</span>
            </button>
          ))}
        </div>

        <div className={styles.ctaBlock}>
          <p>Un projet en tête ? Discutons-en.</p>
          <a href="#contact" className="btn btn-primary">
            Démarrer une conversation
          </a>
        </div>
      </div>

      {selected && (
        <ServiceModal service={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

