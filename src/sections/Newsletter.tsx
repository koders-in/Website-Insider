import React from "react";
import { aeroUp } from "../assets";
import { GradientText } from "../components";

const Newsletter = () => {
  return (
    <div className="py-16">
      <GradientText
        className="w-[90%] sm:w-fit mx-auto text-[1.2rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Subscribe to our Newsletter!"
      />
      <p className="text-[0.8rem] sm:text-[1rem] w-[80%] sm:w-1/2 lg:w-1/3 mx-auto text-center text-main-light_white py-2 font-miligramMedium">
        Stay updated about the latest offers, insights, blogs, “technical” stuff
        and much more.
      </p>
      <div className="w-[80%] sm:w-1/2 lg:w-1/3 border-2 border-main-teal mx-auto rounded-lg overflow-hidden flex mt-4 shadow-sm shadow-main-teal">
        <input
          type="text"
          className="w-full px-4 outline-none border-none bg-transparent text-white font-miligramMedium"
          placeholder="Your Email Address"
        />
        <div className="w-14 h-10 bg-main-teal flex justify-center items-center p-4">
          <img
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
