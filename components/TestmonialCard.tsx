import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  logo: string;
  description: string;
}
const TestmonialCard = ({ title, logo, description }: Props) => {
  return (
    <div className="border-2 border-main-teal rounded-lg p-5 bg-main-secondary mt-5">
      <div className="flex items-center mb-4">
        <Image src={logo} alt="logo" className="h-10 w-10 mr-4" />
        <div className="text-white text-[22px]">{title}</div>
      </div>
      <p className="text-main-light_white text-justify">{description}</p>
    </div>
  );
};

export default TestmonialCard;
