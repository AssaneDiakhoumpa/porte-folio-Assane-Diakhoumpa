// À placer dans : src/components/sections/About.tsx

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <p className="eyebrow">À propos</p>

        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              De l&apos;analyse à l&apos;ingénierie des données
            </h2>
            <p>
              Je m&apos;appelle <strong>Assane Diakhoumpa</strong>, Data
              Engineer junior basé à Dakar. Mon parcours a commencé par
              l&apos;analyse de données — comprendre les chiffres, raconter
              une histoire à partir d&apos;eux — avant de me spécialiser dans
              l&apos;ingénierie : construire les fondations qui rendent cette
              analyse possible, fiable et automatisée.
            </p>
            <p>
              Formé en Statistique et Informatique décisionnelle (UADB -
              Bambey) puis au programme DevData de Sonatel Academy /
              Orange Digital Center, j&apos;ai appris à concevoir des
              pipelines ETL/ELT, des architectures Data Warehouse et des
              systèmes de qualité de données robustes — avec Python, SQL,
              PostgreSQL, dbt, Airflow et Docker.
            </p>
            <p>
              Rigoureux et autonome, j&apos;aime les problèmes concrets :
              automatiser un processus manuel, fiabiliser un pipeline,
              structurer une donnée brute pour qu&apos;elle devienne une
              décision.
            </p>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/Zoucana.jpeg"
                alt="Assane Diakhoumpa"
                width={480}
                height={560}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}