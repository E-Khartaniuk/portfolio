import React from "react";
import css from "./contacts.module.css";

function Contacts() {
  return (
    <section className={css.section}>
      <h2 className={css.contactsTitle}>
        Contact<span className={css.contactsTitleMe}> Me</span>
      </h2>

      <p>Let’s talk for Something special</p>
      <a href="mailto:co6alt@gmail.com" className={css.email}>
        co6alt@gmail.com
      </a>
      <a href="tel:+380634406416" className={css.number}>
        +380634406416
      </a>
    </section>
  );
}

export default Contacts;
