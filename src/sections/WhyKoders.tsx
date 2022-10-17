import React from "react";

import { Info } from "../components";
import { rightAero } from "../assets";
import { whyWe } from "../helper/constant";

import { useUpdateSlide } from "../helper/hook";

const WhyKoders = () => {
  const handleSliding = useUpdateSlide();
  React.useEffect(() => {
    handleSliding.onSlide("whyKoders");
  });
  return (
    <div className="py-16 bg-main-secondary h-[90vh] xxl:h-auto">
      <h1 className="w-[90%] mx-auto sm:w-full text-[1.2rem] sm:text-[2rem] text-center font-medium text-white font-miligrambold">
        Why trust&nbsp;
        <span className="bg-gradient-to-r from-white to-main-teal bg-clip-text text-transparent">
          Koders
        </span>
        &nbsp;to
        <br />
        <span className="bg-gradient-to-r from-white to-main-teal bg-clip-text text-transparent">
          Supercharge&nbsp;
        </span>
        your business?
      </h1>

      <div className="hidden md:flex gap-2 mt-16 w-[95%] lg:w-[85%] mx-auto">
        {whyWe.map((item, i) => (
          <Info
            className={item.class}
            stat={item.state}
            title={item.title}
            html={item.html}
            key={i}
          />
        ))}
      </div>
      <div
        className="flex bg-main-white-500 py-4 px-3 rounded-xl w-[90%] md:hidden relative mt-10 justify-center items-center mx-auto overflow-x-clip h-[300px]"
        id="whyKoders"
      >
        {!(handleSliding.activeIndex <= 0) && (
          <div
            onClick={handleSliding.handleRightSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium  absolute left-2"
          >
            <img src={rightAero} alt="" className="h-2 rotate-180" />
            &nbsp;
            {handleSliding.activeIndex <= 0
              ? ""
              : whyWe[handleSliding.activeIndex - 1]?.state}
          </div>
        )}
        {!(handleSliding.activeIndex >= 3) && (
          <div
            onClick={handleSliding.handleLeftSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium absolute right-2"
          >
            {handleSliding.activeIndex >= 3
              ? ""
              : whyWe[handleSliding.activeIndex + 1]?.state}
            &nbsp;
            <img src={rightAero} alt="" className="h-2" />
          </div>
        )}
        {whyWe.map((item, i) => (
          <Info
            className={
              "text-center absolute w-[200px] transition-all duration-500"
            }
            stat={item.state}
            title={item.title}
            html={item.html}
            key={i}
            translateX={handleSliding.translatePosition[i]}
            isMobile={true}
          />
        ))}
      </div>
      <div className="flex md:hidden justify-center items-center gap-2 mt-2">
        {handleSliding.translatePosition.map((item, i) => {
          return (
            <div
              key={i}
              className={`rounded-full w-2 h-2 ${
                item === 0 ? "bg-white" : "bg-main-light_white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyKoders;
