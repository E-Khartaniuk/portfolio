import React from "react";
import css from "./Experience.module.css";

function Experience() {
  return (
    <section className={css.section}>
      <div className={css.containerExperience}>
        <h1 className={css.title}>
          My
          <span className={css.titleExperience}> Experience</span>
        </h1>
        <ul className={css.experienceList}>
          <li className={css.experienceListItem}>
            <h3 className={css.experienceListItemTitle}>Frontend Developer</h3>
            <p className={css.experienceListItemDescription}>
              One year of studying full-stack development. Over a year of
              experience as a frontend developer, creating personal applications
              using React. Skilled in developing modern SPAs with React.
            </p>
          </li>
          <li className={css.experienceListItem}>
            <h3 className={css.experienceListItemTitle}>Video editor</h3>
            <p className={css.experienceListItemDescription}>
              Creation of video content for business (motion design, promotional
              videos, corporate films, presentation video). Work with large
              international and Ukrainian companies. Bringing the stock
              direction to a stable profit
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
