import React, { useState } from "react";

interface Props {
  className?: string;
  text: string;
  logo?: string;
  hoverLogo?: string;
  OnClick: () => void;
}
const Button = ({ className, text, logo, OnClick, hoverLogo }: Props) => {
  const [iconStyle, setIconStyle] = useState("");
  return (
    <button
      onClick={OnClick}
      className={`hover:text-gray-400 cursor-pointer text-[12px] sm:text-[15px] flex items-center justify-center ${className}`}
      onMouseEnter={() => setIconStyle("brightness-50")}
      onMouseLeave={() => setIconStyle("")}
    >
      {logo ? (
        iconStyle && hoverLogo ? (
          <img src={hoverLogo} className={`h-5 mr-2`} alt="icon" />
        ) : (
          <img
            src={logo}
            alt="icon"
            className={`h-5 mr-2 hover:brightness-75 ${iconStyle}`}
          />
        )
      ) : null}
      {text}
    </button>
  );
};

export default Button;
