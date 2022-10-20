import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, GradientText, ReviewBox } from "../components";
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
    <div className="py-16 xxl:py-[10rem]">
            <Divider className="mt-5" />
      <GradientText
        className="w-[90%] mx-auto sm:w-fit text-[1.6rem] sm:text-[2.6rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Don’t just take our word for it."
      />
      <p className="text-[0.8rem] leading-none m-1 sm:text-[1.3rem] w-[80%] sm:w-1/2  lg:w-1/3 mx-auto text-center text-main-light_white font-miligramText400">
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <ReviewBox
        {...{
          logo: currentItem.logo,
          description: currentItem.description,
          title: currentItem.title,
          animationStyle: "animate-fadeOut",
          testmonialLogo: testmonialLogo,
        }}
      />
      <div className="w-[60%] sm:w-1/4 mx-auto flex items-center gap-3  sm:gap-7 xxl:gap-9 justify-center  mt-7 sm:mt-0">
        {testmonialLogo.map((item, i) => (
          <div
            onClick={() => setCurrentItem(item)}
            key={i}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full"
            style={
              currentItem.title === item.title
                ? { boxShadow: "0px 0px 11px 2px #38D8CC" }
                : {}
            }
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
        text="Read More"
        className="mx-auto block mt-8 sm:mt-10 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[10px] px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
      />
    </div>
  );
};

export default Testmonials;
