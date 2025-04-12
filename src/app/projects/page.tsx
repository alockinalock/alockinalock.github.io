import styles from "./projects.module.css";

export default function Socials() {
        return (
                <div className="mainWrapper">
                        <main>
                                <h1 className={styles.title} >
                                        <span>
                                                <a href = "/" className={styles.backtrackTitle}>alockinalock&nbsp;</a>
                                                / projects
                                        </span>
                                </h1>
                                <div style={{ width: "10px"}}></div>
                                <div>
                                        <a className={styles.projectLinks} href="/destiny_geoguessr">
                                                <div className={styles.bg}></div>
                                                destiny_geoguessr
                                        </a>
                                </div>
                        </main>  
                </div>
        );
}