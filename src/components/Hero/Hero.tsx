import React from "react";

import css from "./Hero.module.css";
// import { ReactComponent as Banner } from "../../img/Banner-min.svg";
import banner from "../../img/Banner-min.svg";
import telegramLogo from "../../img/telegram.svg";
import facebookLogo from "../../img/facebook.svg";
import linkedinkLogo from "../../img/linkedin.svg";
import gitHubLogo from "../../img/github-mark.svg";

function AboutMe() {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContainer}>
        <h1>
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
        <ul className={css.socialIconList}>
          <li className={css.socialIconItem}>
            <a href="https://t.me/hartanyuk" className={css.socialIconItemLink}>
              <img
                src={telegramLogo}
                alt=""
                className={css.socialIconItemLogo}
              />
            </a>
          </li>
          <li className={css.socialIconItem}>
            <a href="https://www.facebook.com/profile.php?id=100011354949673&locale=ru_RU">
              <img src={facebookLogo} alt="" />
            </a>
          </li>
          <li className={css.socialIconItem}>
            <a href="https://www.linkedin.com/in/yevhenii-khartaniuk-45b279251/">
              <img src={linkedinkLogo} alt="" />
            </a>
          </li>
          <li className={css.socialIconItem}>
            <a href="https://github.com/E-Khartaniuk">
              <img src={gitHubLogo} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <img src={banner} alt="Banner" className={css.banner} />
      {/* <Banner className={css.banner} /> */}
    </section>
  );
}

export default AboutMe;
