import React from "react";

import css from "./Hero.module.css";
import banner from "../../img/Banner-min.svg";
import ContactsLinks from "../ContactsLinks/ContactsLinks";

function AboutMe() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1 className={css.title}>
          <span className={css.thin}>Hello I’am </span>
          <span className={css.bold}>Yevhenii Khartaniuk. Frontend</span>
          <samp className={css.stroke}> Developer </samp>
          <span className={css.thin}>Based In</span>
          <span className={css.bold}> Ukraine.</span>
        </h1>
        <p className={css.heroDescription}>
          Frontend developer with experience in HTML, CSS, JavaScript, React,
          and Node.js. I create beautiful interfaces and efficient web
          applications. Possess good communication skills and a positive outlook
          on life. Seeking an opportunity to grow and contribute to your team.
        </p>
        <ContactsLinks gitHub={true} />
      </div>
      <img src={banner} alt="Banner" className={css.banner} />
    </section>
  );
}

export default AboutMe;
