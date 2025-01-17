import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import { useState } from 'react'
import About from "../components/About/About";
import Contacts from "../components/contacts/contacts";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMe from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import "./App.module.css";
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(AboutMe, {}), _jsx(Skills, {}), _jsx(Experience, {}), _jsx(About, {}), _jsx(Projects, {}), _jsx(Contacts, {}), _jsx(Footer, {})] }), _jsx(Footer, {})] }));
};
export default App;
