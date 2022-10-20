import React, { useState } from "react";

interface Props {
  className?: string;
  text: string;
  logo?: string;
  hoverLogo?: string;
  OnClick: () => void;
  logoStyle?: string;
  hoveLogoStyle?: string;
  isSelect?: string;
}
const Button = ({
  className,
  text,
  logo,
  OnClick,
  hoverLogo,
  logoStyle,
  hoveLogoStyle,
  isSelect
}: Props) => {
  const [iconStyle, setIconStyle] = useState("");
  return (
    <button
      onClick={OnClick}
      className={`hover:text-gray-400 cursor-pointer flex items-center justify-center ${className} ${isSelect ? "bg-main-teal text-black scale-110" : ""} `}
      onMouseEnter={() => setIconStyle("brightness-50")}
      onMouseLeave={() => setIconStyle("")}
    >
      {logo ? (
        iconStyle && hoverLogo || isSelect ? (
          <img src={hoverLogo} className={`h-5 mr-2 ${hoveLogoStyle}`} alt="icon" />
        ) : (
          <img
            src={logo}
            alt="icon"
            className={`h-5 mr-2 hover:brightness-75 ${iconStyle} ${logoStyle}`}
          />
        )
      ) : null}
      {text}
    </button>
  );
};

export default Button;
