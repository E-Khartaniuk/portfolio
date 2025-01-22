import React from "react";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";

function Header() {
  return (
    <header className={css.header}>
      <a href="/" className={css.logo}>
        KHARTANIUK
      </a>
      <nav className={css.navigation}>
        <a href="#AboutMe">About Me</a>
        <a href="#Skills">Skills</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact me</a>
      </nav>

      <a
        href="../../../public/KHARTANIUK YEVHENII.pdf"
        download="KHARTANIUK YEVHENII1"
        className={css.downloadButton}>
        Resume
        <DownloadIcon />
      </a>
    </header>
  );
}

export default Header;
