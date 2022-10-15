import React from "react";
import { add } from "../assets";

interface Props {
  question: string;
  answer: string;
}

const Faq = ({ answer, question }: Props) => {
  return (
    <div className="border-b-[1px] py-2 w-[97%] mx-auto border-b-main-light_white flex justify-between items-center">
      <p className="w-[90%] text-main-light_white font-miligramLight sm:font-miligramMedium text-[12px] sm:text-[18px]">
        {question}
      </p>
      <img
        src={add}
        alt=""
        className="h-6 cursor-pointer hover:brightness-75"
      />
    </div>
  );
};

export default Faq;
