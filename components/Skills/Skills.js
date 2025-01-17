import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./Skills.module.css";
import { ReactComponent as TypescriptLogo } from "../../img/icon-typescript.svg";
import { ReactComponent as SassLogo } from "../../img/icon-sass.svg";
import { ReactComponent as ReactLogo } from "../../img/icon-react.svg";
import { ReactComponent as JavscriptLogo } from "../../img/icon-javscript.svg";
import { ReactComponent as GitLogo } from "../../img/icon-git.svg";
function Skills() {
    return (_jsxs("section", { className: css.section, children: [_jsxs("h2", { className: css.title, children: ["My", _jsx("span", { className: css.titleSkills, children: " Skills" })] }), _jsxs("ul", { className: css.skillsList, children: [_jsxs("li", { className: css.skillsListItem, children: [_jsx(TypescriptLogo, { className: css.skillsLogo }), _jsx("p", { className: css.skillDecription, children: "Typescript" })] }), _jsxs("li", { className: css.skillsListItem, children: [_jsx(SassLogo, { className: css.skillsLogo }), _jsx("p", { className: css.skillDecription, children: "Sass" })] }), _jsxs("li", { className: css.skillsListItem, children: [_jsx(ReactLogo, { className: css.skillsLogo }), _jsx("p", { className: css.skillDecription, children: "React" })] }), _jsxs("li", { className: css.skillsListItem, children: [_jsx(JavscriptLogo, { className: css.skillsLogo }), _jsx("p", { className: css.skillDecription, children: "JavScript" })] }), _jsxs("li", { className: css.skillsListItem, children: [_jsx(GitLogo, { className: css.skillsLogo }), _jsx("p", { className: css.skillDecription, children: "Git" })] })] })] }));
}
export default Skills;
