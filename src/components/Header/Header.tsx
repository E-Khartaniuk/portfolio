import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";
import { ReactComponent as HamburgerMenu } from "../../img/hamburger-menu.svg";
import { ReactComponent as CloseIcon } from "../../img/close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={css.header}>
      <a href="/" className={css.logo}>
        KHARTANIUK
      </a>
      <nav
        ref={menuRef}
        className={`${css.navigation} ${isMenuOpen ? css.open : ""}`}>
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
        download="KHARTANIUK YEVHENII"
        className={`${css.downloadButton} ${css.color8}`}>
        Resume
        <DownloadIcon />
      </a>
      <button className={css.burgerButton} onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <HamburgerMenu />}
      </button>
    </header>
  );
}

export default Header;
