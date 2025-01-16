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
      <h2>My Skills</h2>
      <ul className={css.skillsList}>
        <li className={css.skillsListItem}>
          <TypescriptLogo />
          <p>Typescript</p>
        </li>
        <li className={css.skillsListItem}>
          <SassLogo />
          <p>Sass</p>
        </li>
        <li className={css.skillsListItem}>
          <ReactLogo />
          <p>React</p>
        </li>
        <li className={css.skillsListItem}>
          <JavscriptLogo />
          <p>JavScript</p>
        </li>
        <li className={css.skillsListItem}>
          <GitLogo />
          <p>Git</p>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
