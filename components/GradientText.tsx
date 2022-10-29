import React from "react";

interface Props {
  className?: string;
  text: string;
  aos?: string;
}
const GradientText = ({ className, text, aos }: Props) => {
  return (
    <h1
      data-aos={aos}
      className={`${className} font-medium bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
};

export default GradientText;
