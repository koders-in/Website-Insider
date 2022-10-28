import Image from "next/image";
import React from "react";
import { check } from "../../../assets";
import { CardObject } from "../../../helper/constant";
import Button from "../../Button";

const PricingCard = ({
  description,
  price,
  services,
  title,
  isMobile,
  translateX,
  className,
}: CardObject) => {
  return (
    <div
      style={
        isMobile
          ? {
              transform: `translateX(${translateX}px) ${
                translateX === 0 ? "scale(1.1)" : ""
              }`,
            }
          : {}
      }
      className={`shadow-lg shadow-black py-5 px-3 xl:px-6 rounded-xl bg-main-lightBg hover:bg-black hover:shadow-main-teal ${className}`}
    >
      <div className="w-[80%] text-center text-[13px] sm:text-[0.9rem] xl:text-[1rem] font-miligrambold mx-auto  py-[8px] text-black bg-main-teal rounded-lg -translate-y-8">
        {title}
      </div>
      <p className="text-center text-[0.8rem] xl:text-[1rem] lg:w-[75%] lg:mx-auto text-white font-miligramLight">
        {description}
      </p>
      <div className="py-2 lg:py-3 text-main-light_white text-center font-miligramLight text-[0.8rem] xl:text-[0.9rem] border-b-[1px] border-main-teal">
        <span className="text-[1.2rem] xl:text-[1.5rem] text-white font-miligramMedium">
          {price}&nbsp;
        </span>
        / month
      </div>
      <Button
        OnClick={() => {}}
        text="Get Started"
        className="mx-auto text-[0.8rem] xl:text-[1rem] w-full block mt-3 sm:mt-5 bg-main-greenOpt-200 font-miligramLight text-main-lightTeal py-[6px] px-8 rounded-lg border-[1px] border-main-lightTeal hover:text-main-teal"
      />
      <ul className="mt-3 lg:mt-4 w-full lg:w-[90%] xxl:w-[80%] mx-auto">
        {services.map((item, i) => (
          <li
            key={i}
            className="text-white flex text-[0.8rem] xl:text-[1rem] items-center mt-1 lg:mt-2"
          >
            <Image src={check} alt="checked" className="h-2 mr-2" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
