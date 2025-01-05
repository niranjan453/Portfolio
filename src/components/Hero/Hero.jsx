import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,  I'm Niranjan Kumar</h1>
        <p className={styles.description}>
          I'm a web developer using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/12lCf6rY6flghX0l07Jh5uEU3zYm4Urti/view?usp=drivesdk" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/profilpff.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
