import React from "react";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";
// import DownloadIcon from "../../img/DownloadIcon";

function Header() {
  return (
    <header className={css.header}>
      <a href="/" className={css.logo}>
        KHARTANIUK
      </a>
      <nav className={css.navigation}>
        <a href="\">logo</a>
        <a href="">About Me</a>
        <a href="">Skills</a>
        <a href="">Project</a>
        <a href="">Contact me</a>
      </nav>

      <a
        href="path/to/your/file.zip"
        download="KHARTANIUK YEVHENII"
        className={css.downloadButton}>
        Resume
        <DownloadIcon />
      </a>
    </header>
  );
}

export default Header;
