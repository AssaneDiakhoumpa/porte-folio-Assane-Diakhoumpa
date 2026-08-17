// À placer dans : src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contact portfolio — ${form.name || "Nouveau message"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:assanediakhoumpa4@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section section-alt">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <p className="eyebrow">Contact</p>
          <h2 className={styles.title}>Discutons de votre projet</h2>
          <p className={styles.text}>
            Ouvert aux missions freelance et aux opportunités en full remote.
            N&apos;hésitez pas à me contacter, je réponds rapidement.
          </p>

          <div className={styles.availability}>
            <span className={styles.pulse} />
            Disponible actuellement
          </div>

          <div className={styles.details}>
            <a href="mailto:assanediakhoumpa4@gmail.com" className={styles.detailItem}>
              <span className={styles.detailLabel}>Email</span>
              <span>assanediakhoumpa4@gmail.com</span>
            </a>
            <a href="tel:+221770920740" className={styles.detailItem}>
              <span className={styles.detailLabel}>Téléphone</span>
              <span>+221 77 092 07 40</span>
            </a>
            <a
              href="https://github.com/AssaneDiakhoumpa"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailItem}
            >
              <span className={styles.detailLabel}>GitHub</span>
              <span>github.com/AssaneDiakhoumpa</span>
            </a>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Localisation</span>
              <span>Rufisque / Dakar, Sénégal</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.field}>
            <span>Nom</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Votre nom"
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="vous@exemple.com"
            />
          </label>

          <label className={styles.field}>
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Parlez-moi de votre projet..."
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
          <p className={styles.formNote}>
            Ouvre votre client email avec le message pré-rempli.
          </p>
        </form>
      </div>
    </section>
  );
}

