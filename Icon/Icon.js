import { jsx as _jsx } from "react/jsx-runtime";
const Icon = ({ name, size = 24, className = "", ...props }) => {
    return (_jsx("svg", { className: `icon icon-${name} ${className}`, width: size, height: size, ...props, children: _jsx("use", { xlinkHref: `../img/sprite.svg${name}` }) }));
};
export default Icon;
