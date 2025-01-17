import React from "react";
import css from "./Projects.module.css";
import { ReactComponent as LinkIcon } from "../../img/link-icon.svg";

function Projects() {
  return (
    <section className={css.section}>
      <div className={css.containerProjects}>
        <h2 className={css.projectsTitle}>
          My<span className={css.projectsTitleMe}> Projects</span>
        </h2>
        <ul className={css.projectsList}>
          <li className={css.projectsListItem}>
            <img src="" alt="" className={css.projectsListImage} />
            <div className={css.projectsListItemContainer}>
              <p className={css.projectNumber}>01</p>
              <h3 className={css.projectTitle}>Project1</h3>
              <p className={css.projectDecription}>
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <a href="" className={css.projectLink}>
                <LinkIcon className={css.linkIcon} />
              </a>
            </div>
          </li>
          <li className={css.projectsListItem}>
            <img src="" alt="" className={css.projectsListImage} />
            <div className={css.projectsListItemContainer}>
              <p className={css.projectNumber}>01</p>
              <h3 className={css.projectTitle}>Project1</h3>
              <p className={css.projectDecription}>
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <a href="" className={css.projectLink}>
                <LinkIcon className={css.linkIcon} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
