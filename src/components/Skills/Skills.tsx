import React from "react";
import css from "./Skills.module.css";

import { ReactComponent as TypescriptLogo } from "../../img/icon-typescript.svg";
import { ReactComponent as SassLogo } from "../../img/icon-sass.svg";
import { ReactComponent as ReactLogo } from "../../img/icon-react.svg";
import { ReactComponent as JavscriptLogo } from "../../img/icon-javscript.svg";
import { ReactComponent as GitLogo } from "../../img/icon-git.svg";

function Skills() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        My
        <span className={css.titleSkills}> Skills</span>
      </h2>
      <ul className={css.skillsList}>
        <li className={css.skillsListItem}>
          <TypescriptLogo className={css.skillsLogo} />
          <p className={css.skillDecription}>Typescript</p>
        </li>
        <li className={css.skillsListItem}>
          <SassLogo className={css.skillsLogo} />
          <p className={css.skillDecription}>Sass</p>
        </li>
        <li className={css.skillsListItem}>
          <ReactLogo className={css.skillsLogo} />
          <p className={css.skillDecription}>React</p>
        </li>
        <li className={css.skillsListItem}>
          <JavscriptLogo className={css.skillsLogo} />
          <p className={css.skillDecription}>JavScript</p>
        </li>
        <li className={css.skillsListItem}>
          <GitLogo className={css.skillsLogo} />
          <p className={css.skillDecription}>Git</p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
