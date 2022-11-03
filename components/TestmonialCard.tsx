import React from "react";
import Image from "next/image";
import { startBlank, startFill } from "../assets";

interface Props {
  title: string;
  logo: string;
  description: string;
  rating: number;
  link: string;
}
const TestmonialCard = ({ title, logo, description, rating, link }: Props) => {
  const rainggArray = [];
  for (let i = 0; i < rating; i++) {
    rainggArray.push(i);
  }
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="border-2 border-main-teal rounded-lg p-5 bg-main-secondary mt-5 cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <Image src={logo} alt="logo" width="50" height="50" className=" mr-4" />
        <div className="text-white text-[20px]">
          <span>{title}</span>
          <div className="flex bg-white px-1 py-[1px] w-fit gap-1">
            {[1, 2, 3, 4, 5].map((item) => {
              if (item > rating)
                return (
                  <img
                    key={item}
                    src={startBlank.src}
                    alt=""
                    width="14"
                    height="14"
                  />
                );
              else
                return (
                  <img
                    key={item}
                    src={startFill.src}
                    alt=""
                    width="14"
                    height="14"
                  />
                );
            })}
          </div>
        </div>
      </div>
      <p className="text-main-light_white text-justify">{description}</p>
    </div>
  );
};

export default TestmonialCard;
