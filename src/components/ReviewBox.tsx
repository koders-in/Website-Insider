import React from "react";
import { indianFlag } from "../assets";
import { TestmonialData } from "../helper/constant";

interface Props {
  testmonialLogo: Array<TestmonialData>;
}

const ReviewBox = ({
  description,
  logo,
  title,
  testmonialLogo,
}: TestmonialData & Props) => {
  return (
    <>
      {testmonialLogo.map((item) => {
        return (
          <div
            className={`border-4 font-miligramLight sm:font-miligramMedium border-main-teal rounded-2xl w-[90%] sm:w-2/3 mx-auto sm:flex items-center justify-start sm:my-10 my-3 p-12 bg-main-secondary transition-all duration-200 animate-fadeOut xxl:w-[60%]`}
            style={item.title === title ? {} : { display: "none" }}
          >
            <div className="items-center sm:hidden flex w-[90%] mx-auto mb-2 transition-all">
              <img src={logo} alt="logo" className="mr-2 h-9" />
              <p className="text-white text-[18px]">{title}</p>
            </div>
            <div className="text-[1.2rem] leading-[1.3rem] sm:w-2/3 text-main-light_white sm:text-white sm:py-6 sm:px-9 transition-all">
              {description}
            </div>
            <div className="items-center w-1/3 hidden sm:flex transition-all">
              <img src={logo} alt="logo" className="mr-5 ml-2 h-11" />
              <p className="text-white text-[18px]">{title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewBox;
