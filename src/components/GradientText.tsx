import React from "react";

interface Props {
  className?: string;
  text: string;
}
const GradientText = ({ className, text }: Props) => {
  return (
    <h1 className={`${className} font-medium bg-clip-text text-transparent`}>
      {text}
    </h1>
  );
};

export default GradientText;
