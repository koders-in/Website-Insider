import React, { useEffect, useState } from "react";
import { Divider, GradientText, PricingCard, Toogler } from "../components";
import { handleSlider } from "../helper";
import { pricingCardData } from "../helper/constant";
import { useUpdateSlide } from "../helper/hook";

const Pricing = () => {
  const handleSliding = useUpdateSlide();
  const [toggle, setToggle] = useState(true);

  function handleToogle(data: boolean) {
    setToggle(data);
  }

  React.useEffect(() => {
    handleSliding.onSwipe("pricing");
  });

  return (
    <div className="py-16 bg-main-secondary">
      <GradientText
        className="w-[90%] mx-auto sm:w-fit text-[1.6rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Pricing that suits your needs."
      />
      <p className="text-[0.8rem] sm:text-[1rem] w-[80%] sm:w-1/2  lg:w-1/3 mx-auto text-center text-main-light_white py-5 font-miligramMedium">
        Choose your best plan, pay monthly or yearly and change or cancel any
        time.
      </p>
      <div className="flex gap-4 w-fit mx-auto text-main-light_white font-miligramMedium">
        <span
          className={`text-[0.8rem] sm:text-[1rem] ${
            toggle ? "text-white" : ""
          }`}
        >
          Billed Monthly
        </span>
        <Toogler handleToogle={handleToogle} />
        <span
          className={`text-[0.8rem] sm:text-[1rem] ${
            !toggle ? "text-white" : ""
          }`}
        >
          Billed Yearly
        </span>
      </div>
      <Divider className="h-16" />
      <div className="hidden justify-center items-center md:flex gap-3 lg:gap-8 w-[96%] lg:w-[90%] mx-auto">
        {pricingCardData.map((item, i) => (
          <PricingCard key={i} {...item} />
        ))}
      </div>
      <div
        className="flex md:hidden gap-8 w-[100%] justify-center items-center overflow-hidden mx-auto relative h-[450px] overflow-x-clip"
        id="pricing"
      >
        <div
          className="absolute h-full hidden xsm:block w-[15%] msm:w-[27%] md:w-[30%] left-0 z-20"
          onClick={handleSliding.handleRightSlide}
        ></div>
        <div
          className="absolute h-full hidden xsm:block w-[15%] msm:w-[27%] md:w-[30%] right-0 z-20"
          onClick={handleSliding.handleLeftSlide}
        ></div>
        {pricingCardData.map((item, i) => (
          <PricingCard
            translateX={handleSliding.translatePosition[i]}
            className={`absolute top-10 w-[200px] transition-all duration-500 ${
              handleSliding.translatePosition[i] === 0 ? "z-10" : ""
            }`}
            key={i}
            isMobile={true}
            {...item}
          />
        ))}
        <div className="flex justify-center items-center absolute bottom-0 gap-2">
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
    </div>
  );
};

export default Pricing;
