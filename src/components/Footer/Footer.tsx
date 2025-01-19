import React from "react";
import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <a href="">logo</a>
      <div>
        <p>@2025</p>
        <p>Made In Figma</p>
      </div>
    </footer>
  );
}

export default Footer;
