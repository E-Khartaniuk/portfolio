import React from "react";
import css from "./contactsLinks.module.css";
import { ReactComponent as TelegramLogo2 } from "../../img/telegram.svg";
import { ReactComponent as FacebookLogo } from "../../img/facebook.svg";
import { ReactComponent as LinkedinkLogo } from "../../img/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../../img/github-mark.svg";

interface ContactsLinksProps {
  gitHub: boolean;
}

const ContactsLinks: React.FC<ContactsLinksProps> = ({
  gitHub,
}: ContactsLinksProps) => {
  return (
    <ul className={css.socialIconList}>
      <li className={css.socialIconItem}>
        <a href="https://t.me/hartanyuk" className={css.socialIconItemLink}>
          <TelegramLogo2 className={css.socialIconItemLogo} />
        </a>
      </li>
      <li className={css.socialIconItem}>
        <a
          href="https://www.facebook.com/profile.php?id=100011354949673&locale=ru_RU"
          className={css.socialIconItemLink}>
          <FacebookLogo className={css.socialIconItemLogo} />
        </a>
      </li>
      <li className={css.socialIconItem}>
        <a
          href="https://www.linkedin.com/in/yevhenii-khartaniuk-45b279251/"
          className={css.socialIconItemLink}>
          <LinkedinkLogo className={css.socialIconItemLogo} />
        </a>
      </li>

      {gitHub && (
        <li className={css.socialIconItem}>
          <a
            href="https://github.com/E-Khartaniuk"
            className={css.socialIconItemLink}>
            <GitHubLogo className={css.socialIconItemLogo} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default ContactsLinks;
