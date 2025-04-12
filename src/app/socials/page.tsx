import styles from "./socials.module.css";

export default function Socials() {
        return (
                <div className="mainWrapper">
                        <main>
                                <h1 className={styles.title} >
                                        <span>
                                                <a href = "/" className={styles.backtrackTitle}>alockinalock&nbsp;</a>
                                                / socials
                                        </span>
                                </h1>
                                <div style={{ width: "10px"}}></div>
                                <div>
                                        <a className={styles.socialLinks} href="https://github.com/alockinalock">
                                                <div className={styles.bg}></div>
                                                github
                                        </a>
                                        <a className={styles.socialLinks} href="https://www.youtube.com/@alockinalock">
                                                <div className={styles.bg}></div>
                                                hobby_youtube
                                        </a>
                                        <a className={styles.socialLinks} href="https://www.youtube.com/@alockinalock_dev">
                                                <div className={styles.bg}></div>
                                                dev_youtube
                                        </a>
                                        <a className={styles.socialLinks} href="https://twitter.com/alockinalock">
                                                <div className={styles.bg}></div>
                                                twitter
                                        </a>
                                </div>
                        </main>  
                </div>
        );
}