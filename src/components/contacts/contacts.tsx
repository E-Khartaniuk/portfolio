import React from "react";
import css from "./contacts.module.css";
import ContactsLinks from "../ContactsLinks/ContactsLinks";

function Contacts() {
  return (
    <section id="Contact" className={css.section}>
      <h2 className={css.contactsTitle}>
        Contact<span className={css.contactsTitleMe}> Me</span>
      </h2>
      <div className={css.contactsContainer}>
        <p>Let’s talk for Something special</p>
        <a href="mailto:hartanyuk.e@gmail.com" className={css.contact}>
          hartanyuk.e@gmail.com
        </a>
        <a href="tel:+380634406416" className={css.contact}>
          +380634406416
        </a>
      </div>
      <ContactsLinks gitHub={false} />
    </section>
  );
}

export default Contacts;
