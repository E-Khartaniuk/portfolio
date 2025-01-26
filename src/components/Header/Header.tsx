import React, { useState } from "react";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={css.header}>
      <button className={css.burgerButton} onClick={toggleMenu}>
        {isMenuOpen ? "<CloseIcon />" : "<MenuIcon />"}
      </button>
      <a href="/" className={css.logo}>
        KHARTANIUK
      </a>
      <nav className={`${css.navigation} ${isMenuOpen ? css.open : ""}`}>
        <a href="#AboutMe" onClick={() => setIsMenuOpen(false)}>
          About Me
        </a>
        <a href="#Skills" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
        <a href="#Project" onClick={() => setIsMenuOpen(false)}>
          Project
        </a>
        <a href="#Contact" onClick={() => setIsMenuOpen(false)}>
          Contact me
        </a>
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
