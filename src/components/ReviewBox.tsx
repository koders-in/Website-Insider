import React from "react";
import { indianFlag } from "../assets";
import { TestmonialData } from "../helper/constant";

const ReviewBox = ({ description, logo, title }: TestmonialData) => {
  return (
    <div className="border-2 font-miligramLight sm:font-miligramMedium border-main-teal rounded-2xl w-[90%] sm:w-2/3 mx-auto sm:flex items-center justify-center sm:my-10 my-3 p-5 bg-main-secondary">
      <div className="items-center sm:hidden flex w-[90%] mx-auto mb-2">
        <img src={logo} alt="logo" className="mr-2 h-9" />
        <p className="text-white text-[18px]">{title}</p>
      </div>
      <div className="w-[90%] mx-auto sm:w-2/3 text-main-light_white sm:text-white sm:py-6 sm:px-9">
        {description}
      </div>
      <div className="items-center w-1/3 hidden sm:flex">
        <img src={logo} alt="logo" className="mr-6" />
        <p className="text-white text-[18px]">{title}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
