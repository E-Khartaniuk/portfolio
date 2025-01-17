import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./Hero.module.css";
import { ReactComponent as TelegramLogo2 } from "../../img/telegram.svg";
import { ReactComponent as FacebookLogo } from "../../img/facebook.svg";
import { ReactComponent as LinkedinkLogo } from "../../img/linkedin.svg";
import { ReactComponent as GitHubLogo } from "../../img/github-mark.svg";
import banner from "../../img/Banner-min.svg";
function AboutMe() {
    return (_jsxs("section", { className: css.heroSection, children: [_jsxs("div", { className: css.heroContainer, children: [_jsxs("h1", { className: css.title, children: [_jsx("span", { className: css.thin, children: "Hello I\u2019am " }), _jsx("span", { className: css.bold, children: "Yevhenii Khartaniuk. Frontend" }), _jsx("samp", { className: css.stroke, children: " Developer " }), _jsx("span", { className: css.thin, children: "Based In" }), _jsx("span", { className: css.bold, children: " Ukraine." })] }), _jsx("p", { className: css.heroDescription, children: "Frontend developer with experience in HTML, CSS, JavaScript, React, and Node.js. I create beautiful interfaces and efficient web applications. Possess good communication skills and a positive outlook on life. Seeking an opportunity to grow and contribute to your team." }), _jsxs("ul", { className: css.socialIconList, children: [_jsx("li", { className: css.socialIconItem, children: _jsx("a", { href: "https://t.me/hartanyuk", className: css.socialIconItemLink, children: _jsx(TelegramLogo2, { className: css.socialIconItemLogo }) }) }), _jsx("li", { className: css.socialIconItem, children: _jsx("a", { href: "https://www.facebook.com/profile.php?id=100011354949673&locale=ru_RU", className: css.socialIconItemLink, children: _jsx(FacebookLogo, { className: css.socialIconItemLogo }) }) }), _jsx("li", { className: css.socialIconItem, children: _jsx("a", { href: "https://www.linkedin.com/in/yevhenii-khartaniuk-45b279251/", className: css.socialIconItemLink, children: _jsx(LinkedinkLogo, { className: css.socialIconItemLogo }) }) }), _jsx("li", { className: css.socialIconItem, children: _jsx("a", { href: "https://github.com/E-Khartaniuk", className: css.socialIconItemLink, children: _jsx(GitHubLogo, { className: css.socialIconItemLogo }) }) })] })] }), _jsx("img", { src: banner, alt: "Banner", className: css.banner })] }));
}
export default AboutMe;
