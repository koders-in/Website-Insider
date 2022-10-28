import Image from "next/image";
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
      {testmonialLogo.map((item, i) => {
        return (
          <div
            key={i}
            className={`border-4 font-miligramMedium border-main-teal rounded-2xl w-[90%] sm:w-2/3 mx-auto lg:flex items-center justify-start sm:my-10 my-3 p-6 lg:p-12 bg-main-secondary transition-all duration-200 animate-fadeOut xxl:w-[60%]`}
            style={item.title === title ? {} : { display: "none" }}
          >
            <div className="items-center lg:hidden flex mb-4 transition-all">
              <Image src={logo} alt="logo" className="mr-2 h-9" />
              <p className="text-white text-[18px]">{title}</p>
            </div>
            <div className="text-[0.9rem] leading-none md:text-[1.2rem] lg:w-2/3 text-main-light_white sm:text-white lg:py-6 lg:px-9 transition-all">
              {description}
            </div>
            <div className="items-center w-1/3 hidden lg:flex transition-all">
              <Image src={logo} alt="logo" className="mr-5 ml-2 h-11" />
              <p className="text-white text-[18px]">{title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewBox;
