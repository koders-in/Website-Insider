import React, { useState } from "react";
import Image from "next/image";

import AnimatedBorder from "./AnimatedBorder";

interface Props {
  className?: string;
  text: string;
  logo?: string;
  hoverLogo?: string;
  OnClick: () => void;
  logoStyle?: string;
  hoveLogoStyle?: string;
  isSelect?: string;
  isBorder?: true;
  eleId?: string;
}
const Button = ({
  className,
  text,
  logo,
  OnClick,
  hoverLogo,
  logoStyle,
  hoveLogoStyle,
  isSelect,
  isBorder,
  eleId,
}: Props) => {
  const [iconStyle, setIconStyle] = useState("");
  return (
    <button
      id={eleId}
      onClick={OnClick}
      className={`group relative cursor-pointer flex items-center justify-center  ${className} ${
        isSelect ? "bg-main-teal text-black scale-105 md:scale-110" : ""
      } `}
      onMouseEnter={() => setIconStyle("brightness-50")}
      onMouseLeave={() => setIconStyle("")}
    >
      {logo ? (
        (iconStyle && hoverLogo) || isSelect ? (
          <Image
            src={hoverLogo}
            className={`h-5 mr-2 ${hoveLogoStyle}`}
            alt="icon"
          />
        ) : (
          <Image
            src={logo}
            alt="icon"
            className={`h-5 mr-2 hover:brightness-75 ${iconStyle} ${logoStyle}`}
          />
        )
      ) : null}
      {text}
      {isBorder && <AnimatedBorder />}
    </button>
  );
};
export default Button;
