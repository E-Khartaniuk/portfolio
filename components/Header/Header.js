import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./Header.module.css";
import DownloadIcon from "../../img/DownloadIcon";
function Header() {
    return (_jsxs("header", { className: css.header, children: [_jsx("a", { href: "/", className: css.logo, children: "KHARTANIUK" }), _jsxs("nav", { className: css.navigation, children: [_jsx("a", { href: "\\", children: "logo" }), _jsx("a", { href: "", children: "About Me" }), _jsx("a", { href: "", children: "Skills" }), _jsx("a", { href: "", children: "Project" }), _jsx("a", { href: "", children: "Contact me" })] }), _jsxs("a", { href: "../../../public/KHARTANIUK YEVHENII.pdf", download: "KHARTANIUK YEVHENII1", className: css.downloadButton, children: ["Resume", _jsx(DownloadIcon, {})] })] }));
}
export default Header;
