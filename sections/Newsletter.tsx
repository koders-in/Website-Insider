import Image from "next/image";
import React from "react";
import { aeroUp } from "../assets";
import { Divider, GradientText } from "../components";

const Newsletter = () => {
  return (
    <div className="py-16 mb-2 xxl:py-[6rem]">
      <Divider className="mt-5" />
      <GradientText
        className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Subscribe to our Newsletter!"
      />
      <p className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-1/2 lg:w-1/3 mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none">
        Stay updated about the latest offers, insights, blogs, “technical” stuff
        and much more.
      </p>
      <div className="w-[80%] sm:w-1/2 lg:w-1/3 border-2 border-main-teal mx-auto rounded-lg overflow-hidden flex mt-6 shadow-sm shadow-main-teal xxl:mt-14">
        <input
          type="text"
          className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramMedium"
          placeholder="Your Email Address"
        />
        <div className="w-14 h-10 bg-main-teal flex justify-center items-center p-4">
          <Image
            src={aeroUp}
            alt="aero"
            className="hover:scale-110  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
