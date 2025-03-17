"use client";

import Link from "next/link";
import styles from "@/styles/dashboard.module.css";

const RightNav = () => {
  return (
    <div className={styles.rightNav}>
      <Link href="https://www.linkedin.com/in/prajwal-naveen-863664258/" className={styles.navLink}>
        LinkedIn
      </Link>
      <Link href="https://github.com/prajwalnaveeenn" className={styles.navLink}>
        GitHub
      </Link>
    </div>
  );
};

export default RightNav;
