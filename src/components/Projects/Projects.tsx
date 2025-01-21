import React from "react";
import css from "./Projects.module.css";
import { ReactComponent as LinkIcon } from "../../img/link-icon.svg";

import img from "../../img/2_1_1.gif";

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
              <h3 className={css.projectTitle}>Ape-NFT</h3>
              <p className={css.projectDecription}>
                Ape-NFT is a blockchain startup site. Responsive layout has been
                completed. Validation in the registration field, slider.
                Drop-down menu. Role: developer. Individual project.
              </p>
              <a
                href="https://e-khartaniuk.github.io/Ape-NFT/"
                className={css.projectLink}>
                <LinkIcon className={css.linkIcon} />
              </a>
            </div>
          </li>
          <li className={css.projectsListItem}>
            <img src={img} alt="a" className={css.projectsListImage} />
            <div className={css.projectsListItemContainer}>
              <p className={css.projectNumber}>02</p>
              <h3 className={css.projectTitle}> Filmoteka</h3>
              <p className={css.projectDecription}>
                The application shows a list of trending movies. Search movies
                by title and get detailed information. Create your own list of
                favorite movies. Role: developer. Worked on pagination and
                search for movies by keyword.
              </p>
              <a
                href="https://aleksandremchenko.github.io/project-group-4-filmoteka/"
                className={css.projectLink}>
                <LinkIcon className={css.linkIcon} />
              </a>
            </div>
          </li>
          <li className={css.projectsListItem}>
            <img src="" alt="" className={css.projectsListImage} />
            <div className={css.projectsListItemContainer}>
              <p className={css.projectNumber}>03</p>
              <h3 className={css.projectTitle}>TaskPro</h3>
              <p className={css.projectDecription}>
                Task-Pro pro is an application for monitoring and planning work
                and tasks in everyday life. The application allows you to create
                boards and cards with tasks with different priorities and
                deadlines. Role: developer. Worked on Add card, Change card and
                Need help components.
              </p>
              <a
                href="https://romarionik.github.io/task-pro-team-project/"
                className={css.projectLink}>
                <LinkIcon className={css.linkIcon} />
              </a>
            </div>
          </li>
          <li className={css.projectsListItem}>
            <img src="" alt="" className={css.projectsListImage} />
            <div className={css.projectsListItemContainer}>
              <p className={css.projectNumber}>04</p>
              <h3 className={css.projectTitle}>IceCream</h3>
              <p className={css.projectDecription}>
                Ice company website with responsive layout, burger menu, modal
                window and attractive design. Role: developer. Worked on the
                products section and the modal window in this section.
              </p>
              <a
                href="https://aleksandremchenko.github.io/project-group-6-ice-cream/"
                className={css.projectLink}>
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
