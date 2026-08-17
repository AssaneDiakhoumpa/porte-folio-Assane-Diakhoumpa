// À placer dans : src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expériences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          AD<span>.</span>
        </a>

        <nav className={styles.desktopNav}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          Me contacter
        </a>

        <button
          className={styles.burger}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}