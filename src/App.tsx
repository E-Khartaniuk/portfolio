// import { useState } from 'react'
import About from "./components/About/About";
import Contacts from "./components/contacts/contacts";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutMe from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
// import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </main>
      <Footer />
    </>
  );
};

export default App;
