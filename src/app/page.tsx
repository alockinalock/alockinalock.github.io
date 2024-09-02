"use client";

import styles from "./page.module.css";
import { useEffect, useRef } from "react";

export default function Home() {

  let titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let titleElement = titleRef.current
    if (titleElement) {
      requestAnimationFrame(() => {
        titleElement.classList.remove(styles.titleHide);
      });
    }
  }, []);

  return (
    <div className="mainWrapper">
      <main>
        <h1 className={`${styles.title} ${styles.titleHide}`} ref={titleRef}>
          <span className={styles.titleText}>alockinalock</span>
        </h1>
        <div style={{ width: "10px" }}></div>
        <div>
          <a className={styles.pageLinks} href="/socials">
            <div className={styles.bg}></div>
            socials
          </a>
          <a className={styles.pageLinks} href="/projects">
            <div className={styles.bg}></div>
            projects
          </a>
          <a className={styles.pageLinks} href="/contact">
            <div className={styles.bg}></div>
            contact
          </a>
        </div>

      </main>
    </div>
  );
}