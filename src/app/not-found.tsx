"use client";

import styles from "./error.module.css";
import { useEffect, useRef } from "react";

export default function Custom404() {

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
          <span className={styles.titleText}>
            <a href = "/" className={styles.backtrackTitle}>alockinalock&nbsp;</a>
            /
          </span>
          <span className = {styles.titleText}>&nbsp;404</span>
        </h1>
        <div style={{ width: "10px" }}></div>
        <div>
          <a className={styles.pageLinks} href="/">
            <div className={styles.bg}></div>
            home
          </a>
        </div>
      </main>
    </div>
  );
}