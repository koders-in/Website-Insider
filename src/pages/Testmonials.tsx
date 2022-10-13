import React, { useEffect } from "react";
import { Button, GradientText, TestmonialCard } from "../components";
import { reviews } from "../helper/constant";

const Testmonials = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="pb-10 pt-28">
      <GradientText
        className="text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] w-[90%] mx-auto text-center bg-gradient-to-r from-white to-main-teal"
        text="Don't just take our word for it."
      />
      <p className="text-main-light_white text-center w-[80%] sm:w-[50%] lg:w-[40%] mx-auto text-[18px]">
        Take a look at what some of our customers have to say about Koders.
      </p>
      <div className="w-[75%] mx-auto flex flex-wrap gap-5 bg-main-primary pt-4 pb-8">
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          {reviews.map((item, i) => (
            <TestmonialCard
              key={i}
              {...{
                description: item.message,
                logo: item.logo,
                title: item.title,
              }}
            />
          ))}
        </div>
      </div>
      <Button
        OnClick={() => {}}
        text="Get Started"
        className="mx-auto block mt-10 bg-main-greenOpt-200 font-miligramMedium text-main-greenOpt-1000 py-2 px-8 rounded-lg border-2 border-main-greenOpt-1000 hover:bg-main-greenOpt-1000 hover:text-white"
      />
    </div>
  );
};

export default Testmonials;
