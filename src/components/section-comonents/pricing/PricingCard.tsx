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
      className={`shadow-lg shadow-black py-5 px-6 rounded-xl bg-main-lightBg hover:bg-black hover:shadow-main-teal cursor-pointer ${className}`}
    >
      <div className="w-[75%] text-center text-[13px] lg:text-[15px] font-miligrambold mx-auto  py-2 text-black bg-main-teal rounded-lg -translate-y-7">
        {title}
      </div>
      <p className="text-center text-[12px] lg:text-[15px] text-white font-miligramMedium">
        {description}
      </p>
      <div className="py-2 lg:py-3 text-main-light_white text-center font-miligramMedium text-[0.8rem] border-b-2 border-main-teal">
        <span className="text-[1.5rem] lg:text-[2rem] text-white">
          {price}&nbsp;
        </span>
        /month
      </div>
      <Button
        OnClick={() => {}}
        text="Get Started"
        className="mx-auto text-[12px] lg:text-[14px] w-full block mt-3 sm:mt-5 bg-main-greenOpt-200 font-miligramMedium text-main-greenOpt-1000 py-2 px-8 rounded-lg border-2 border-main-greenOpt-1000 hover:text-main-teal"
      />
      <ul className="mt-3 lg:mt-4">
        {services.map((item, i) => (
          <li
            key={i}
            className="text-white flex text-[12px] lg:text-[15px] items-center mt-1 lg:mt-2"
          >
            <img src={check} alt="checked" className="h-2 mr-2" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
