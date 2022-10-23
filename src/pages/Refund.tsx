import React from "react";
import { Divider, GradientText } from "../components";

const Refund = () => {
  return (
    <div className="pb-10 pt-28 w-[90%] sm:w-[95%] mx-auto">
      <GradientText
        className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] mx-auto w-fit bg-gradient-to-r from-white to-main-teal font-miligrambold mt-16"
        text="Refund"
      />
      <Divider className="mt-8" />
      <p></p>
    </div>
  );
};

export default Refund;
