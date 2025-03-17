"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button className={styles.openButton} onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={styles.sidebar}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <p><br></br></p>
        <nav className={styles.nav}>
          <Link href="/weather" className={styles.navLink}>
            🌤️
          </Link>
          <Link href="/news" className={styles.navLink}>
            📰
          </Link>
          <Link href="/stocks" className={styles.navLink}>
            📈
          </Link>
          <Link href="/movies" className={styles.navLink}>
            🎬
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
