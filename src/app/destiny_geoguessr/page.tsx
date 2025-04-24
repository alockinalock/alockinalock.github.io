import styles from "./destiny_geoguessr.module.css";
import Image from "next/image";

export default function destiny_geoguessr() {
        return (
                <div className="mainWrapper">
                        <main>
                            <div className={styles.subMainWrapper}>
                                <h1 className={styles.title} >
                                        <span>
                                                <a href = "/" className={styles.backtrackTitle}>alockinalock&nbsp;</a>
                                                / 
                                                <a href = "/projects" className={styles.backtrackTitle}>projects&nbsp;</a> 
                                                / destiny_geoguessr
                                        </span>
                                </h1>
                                <div style = { { display: "flex", flexDirection: "column"}}>
                                  
                                  <div style = {{ height: "20px" }}></div>

                                  <span>A rendition of the Geoguessr formula but for the video game Destiny 2. Inspired by <a href="https://valoguessr.com/" style = {{ fontStyle: "italic", textDecoration: "underline"}}>Valoguessr</a>.</span>
                                  <span style = {{opacity: "0.4"}}>In active development.</span>

                                  <div style={{ height: "10px" }}></div>

                                  <div className={styles.buttonGroup}>
                                        <a href="https://github.com/alockinalock/destiny-geoguessr" 
                                        className={styles.bigLink}>
                                                <div className={styles.bigLinkBackground}></div>
                                                GitHub
                                        </a>
                                  </div>

                                  <div style = {{ height: "30px" }}></div>
                                  
                                  <h3 style={{ width: "max-content"}}>Screenshots</h3>

                                  <Image 
                                  alt="The config page for Destiny Geoguessr which allows users to configure game settings"
                                  src="/dgcp.png"
                                  width={1920}
                                  height={1080}
                                  />
                                  <span style = {{opacity: "0.4", margin: "8px 0"}}>This image shows the [unstyled] configuration page.</span>

                                  <Image 
                                  alt="The geoguessr page for Destiny Geoguessr which users play in"
                                  src="/dggp.png"
                                  width={1920}
                                  height={1080}
                                  />
                                  <span style = {{opacity: "0.4",  margin: "8px 0"}}>This image shows the [unstyled] geoguessr page a.k.a. the game itself.</span>

                                  <div style={{ height: "120px" }}></div>

                                </div>

                            </div>
                        </main>  
                </div>
        );
}