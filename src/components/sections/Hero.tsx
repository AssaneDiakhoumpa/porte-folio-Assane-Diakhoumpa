// À placer dans : src/components/sections/Hero.tsx

import Image from "next/image";
import styles from "./Hero.module.css";

const stats = [
  { value: "98%", label: "précision — modèle prédictif de vol" },
  { value: "10K+", label: "enregistrements/jour traités" },
  { value: "80%", label: "temps de migration réduit" },
];

const socials = [
  {
    href: "https://github.com/AssaneDiakhoumpa",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/assane-diakhoumpa-7aa399280",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://drive.google.com/drive/folders/1Ql0xlDAEo8gW75kYab-QQMgXKS0rFixo?usp=sharing",
    label: "Certificats",
    icon: "googledrive",
  },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <p className="eyebrow">Data Engineer — Dakar, Sénégal</p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={styles.socialLink}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${social.icon}/94a3b8`}
                    alt=""
                    width={16}
                    height={16}
                  />
                </a>
              ))}
            </div>
          </div>
          <h1 className={styles.title}>
            Assane <span>Diakhoumpa</span>
          </h1>
          <p className={styles.subtitle}>
            Je conçois des pipelines de données fiables et évolutifs — de la
            collecte brute à la décision.
          </p>
          <p className={styles.description}>
            Spécialisé dans l&apos;intégration, la transformation et
            l&apos;automatisation des données avec Python, SQL, Airflow et
            Docker. Disponible en <strong>freelance</strong>, en{" "}
            <strong>full remote</strong>.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className="btn btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-outline">
              Me contacter
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoFrame}>
            <Image
              src="/images/profile.jpeg"
              alt="Assane Diakhoumpa"
              width={480}
              height={560}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>

      <div className={styles.statsBar}>
        <div className={`container ${styles.statsInner}`}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={`mono ${styles.statValue}`}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}