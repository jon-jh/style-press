// components/NavButton.jsx
"use client";

import Link from "next/link";
import styles from "../styles/NavButton.module.scss";

export default function NavButton({ href, children, isActive = false }) {
  return (
    <Link href={href}>
      <button className={`${styles.button} ${isActive ? styles.active : ""}`}>
        {children}
      </button>
    </Link>
  );
}
