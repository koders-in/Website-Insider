import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, GradientText, ReviewBox } from "../components";
import { sleep } from "../helper";
import { TestmonialData, testmonialLogo } from "../helper/constant";

const Testmonials = () => {
  const isRunning = useRef(false);
  const [currentItem, setCurrentItem] = useState<TestmonialData>(
    testmonialLogo[0]
  );
  const navigate = useNavigate();

  function handleClick() {
    navigate("/reviews");
  }

  useEffect(() => {
    const startAnimation = async () => {
      for (let i = 0; i < testmonialLogo.length; i++) {
        setCurrentItem(testmonialLogo[i]);
        await sleep(5000);
      }
      startAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      startAnimation();
    }
  });
  return (
    <div className="py-16">
      <GradientText
        className="w-[90%] mx-auto sm:w-fit text-[1.2rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Don’t just take our word for it."
      />
      <p className="text-[0.8rem] sm:text-[1rem] w-[80%] sm:w-1/2  lg:w-1/3 mx-auto text-center text-main-light_white py-5 font-miligramMedium">
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <ReviewBox
        {...{
          logo: currentItem.logo,
          description: currentItem.description,
          title: currentItem.title,
        }}
      />
      <div className="w-[60%] sm:w-1/4 mx-auto flex items-center gap-3  sm:gap-2 justify-center  mt-7 sm:mt-0">
        {testmonialLogo.map((item, i) => (
          <div
            onClick={() => setCurrentItem(item)}
            key={i}
            className="w-8 h-8 sm:w-12 sm:h-12"
          >
            <img
              src={item.logo}
              alt="logo"
              style={{ opacity: item.title === currentItem.title ? "0,.5" : 1 }}
              className={`w-full h-full`}
            />
          </div>
        ))}
      </div>
      <Button
        OnClick={handleClick}
        text="Read more"
        className="mx-auto block mt-8 sm:mt-10 bg-main-greenOpt-200 font-miligramMedium text-main-greenOpt-1000 py-2 px-8 rounded-lg border-2 border-main-greenOpt-1000 hover:bg-main-greenOpt-1000 hover:text-white"
      />
    </div>
  );
};

export default Testmonials;
