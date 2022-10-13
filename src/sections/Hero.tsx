import React from "react";
import { homeBg, homeBgBottom } from "../assets";
import { Divider, GradientText } from "../components";

const Hero = () => {
  return (
    <div className="bg-main-primary pt-28 relative overflow-hidden h-[100vh]">
      <Divider className="mt-[35vh]" />
      <img src={homeBg} alt="" className="absolute top-0 left-0 w-96" />
      <img
        src={homeBgBottom}
        alt=""
        className="absolute -bottom-10 right-0 h-96"
      />
      <h1 className="leading-[38px] sm:leading-[30px] text-[1.5rem] xsm:text-[2.5rem] sm:text-[4rem] text-white text-center m-0 p-0 font-medium font-miligrambold">
        Infrastructure for
      </h1>
      <GradientText
        className="leading-[28px] xsm:leading-[38px] sm:leading-[70px] sm:mt-3 w-[95%] mx-auto text-[1.5rem] xsm:text-[2.5rem] sm:text-[4rem] text-center bg-gradient-to-r from-white via-main-lightTeal to-main-teal font-miligrambold"
        text="High Quality Applications"
      />
      <p className="w-[90%] sm:w-fit mx-auto text-center text-[0.8rem] sm:text-[1.5rem] text-main-light_white pt-6 pb-28 font-miligramLight">
        WEBSITES | MOBILE APPS | TOOLBOTS | <br className="visible sm:hidden" />
        MONITORS | UI/UX
      </p>
    </div>
  );
};

export default Hero;
