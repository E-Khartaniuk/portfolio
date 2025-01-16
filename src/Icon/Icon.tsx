import React, { FC, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  className?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, className = "", ...props }) => {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={size}
      height={size}
      {...props}>
      <use xlinkHref={`../img/sprite.svg${name}`} />
    </svg>
  );
};

export default Icon;
