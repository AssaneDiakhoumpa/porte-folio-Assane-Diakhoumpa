// À placer dans : src/components/layout/Footer.tsx

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.name}>Assane Diakhoumpa</p>
          <p className={styles.tagline}>
            Data Engineer — Disponible en freelance, full remote
          </p>
        </div>

        <div className={styles.links}>
          <a href="https://github.com/AssaneDiakhoumpa" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:assanediakhoumpa4@gmail.com">Email</a>
          <a href="tel:+221770920740">+221 77 092 07 40</a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} Assane Diakhoumpa. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

