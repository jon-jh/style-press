"use client"; // required in Next.js App Router for hooks

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  const pathname = usePathname();

  const navigationLinks = ["portfolio", "e-commerce", "blog", "event"];

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          StylePress
        </Link>

        {/* Navigation Links */}
        <nav className={styles.links}>
          {navigationLinks.map((link, index) => {
            const href = `/${link}`;
            const isActive = pathname === href;

            return (
              <Link
                key={link}
                href={href}
                className={`
                  ${index === 0 ? styles.first : ""}
                  ${index === navigationLinks.length - 1 ? styles.last : ""}
                  ${index !== navigationLinks.length - 1 ? styles.divider : ""}
                  ${isActive ? styles.active : ""}
                `}
              >
                {link}
              </Link>
            );
          })}
        </nav>

        {/* Profile / Avatar */}
        <div className={styles.profile}>
          <img src="/globe.svg" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
