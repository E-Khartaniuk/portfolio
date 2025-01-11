import React from "react";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";
// import { ReactComponent as Download } from "../../img/download.svg";
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
        href="../../../public/KHARTANIUK YEVHENII.pdf"
        download="KHARTANIUK YEVHENII1"
        className={css.downloadButton}>
        Resume
        <DownloadIcon />
        {/* <Download /> */}
      </a>
    </header>
  );
}

export default Header;
