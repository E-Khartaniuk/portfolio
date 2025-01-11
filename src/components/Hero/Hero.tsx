import React from "react";

import css from "./Hero.module.css";
import { ReactComponent as Banner } from "../../img/Banner-min.svg";

function AboutMe() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1>
          <span className={css.thin}>Hello I’am </span>
          <span className={css.bold}>Yevhenii Khartaniuk. Frontend</span>
          <samp className={css.stroke}> Developer </samp>
          <span className={css.thin}> Based In</span>
          <span className={css.bold}>Ukraine.</span>
        </h1>
        <p>
          Frontend developer with experience in HTML, CSS, JavaScript, React,
          and Node.js. I create beautiful interfaces and efficient web
          applications. Possess good communication skills and a positive outlook
          on life. Seeking an opportunity to grow and contribute to your team.
        </p>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
      <Banner className={css.banner} />
    </section>
  );
}

export default AboutMe;
