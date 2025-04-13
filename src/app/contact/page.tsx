"use client";

import styles from "./contact.module.css";
import Image from "next/image";

// Note: This page's CSS, more specifically for the links, is unique compared to the rest of the files.
// In short, it's fucked. Margins are used a lot to tweaks minor things. Not sure if it works or is just a bandaid.
export default function Contact() {
        const handleClick = () => {
                navigator.clipboard.writeText("alockinalock@gmail.com")
        }

        return (
                <div className="mainWrapper">
                        <main>
                                <h1 className={styles.title} >
                                        <span>
                                                <a href = "/" className={styles.backtrackTitle}>alockinalock&nbsp;</a>
                                                 / contact
                                        </span>
                                </h1>
                                <div style={{ width: "10px"}}></div>
                                <div className = {styles.emailWrapper} style={{ marginBottom: "5px" }}>
                                        <div className={styles.iconTTContainer}>
                                                <a className={`${styles.emailLink} ${styles.noMargin}`} style={{top: "5px"}}>
                                                        <div className={styles.bg} style={{ marginTop: "-6px", marginBottom: "-2px" }}></div>
                                                        <Image
                                                                src="/content_copy_white_24dp.svg"
                                                                alt="Copy to clipboard icon"
                                                                className={`${styles.icon}`}
                                                                width={24}
                                                                height={24}
                                                                style={{ color: "transparent", marginTop: "7px", paddingLeft: "8px", paddingRight: "8px"}}
                                                                onClick={handleClick}
                                                                
                                                        />
                                                </a>
                                        </div>
                                        <hr className={styles.seperator}></hr>
                                        <a className={`${styles.emailLink} ${styles.noMargin}`} href="mailto:alockinalock@gmail.com" style={{paddingLeft: "8px", paddingRight: "8px", marginTop: "9px"}}>
                                                <div className={styles.bg}  style={{ margin: "-5px 0 -3px 0" }}></div>
                                                alockinalock@gmail.com
                                        </a>
                                </div>
                        </main>
                </div>
        );
}