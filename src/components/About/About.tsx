import React from "react";
import css from "./About.module.css";

function About() {
  return (
    <section id="AboutMe" className={css.section}>
      <div className={css.aboutImage} aria-hidden="true"></div>
      <div className={css.containerAbout}>
        <h2 className={css.aboutTitle}>
          About<span className={css.aboutTitleMe}> Me</span>
        </h2>
        <p className={css.aboutDescription}>
          I am a junior frontend developer passionate about creating modern and
          user-friendly web applications. I have completed a full-stack
          development course, where I gained proficiency in key technologies
          such as HTML, CSS, JavaScript, React, Redux, and TypeScript.
        </p>
        <p className={css.aboutDescription}>
          Every project is an opportunity for me to enhance my skills, explore
          new approaches, and deliver solutions that provide seamless and
          enjoyable user experiences.
        </p>
        <p className={css.aboutDescription}>
          My goal is to grow as a skilled frontend developer, contribute to
          building cutting-edge digital products, and continue advancing in this
          exciting field.
        </p>
      </div>
    </section>
  );
}

export default About;
