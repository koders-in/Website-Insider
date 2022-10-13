import React from "react";
import { rightAero } from "../assets";
import { Info } from "../components";
import { handleSlider } from "../helper";
import { whyWe } from "../helper/constant";
import { gradientStleObj } from "../helper/style";

const WhyKoders = () => {
  const [translatePosition, setTranslatePosition] = React.useState([
    -233, 0, 233, 466,
  ]);
  const [activeIndex, setActiveIndex] = React.useState(1);

  function getIndexOfActiveSlide(newArr: Array<number>) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === 0) {
        setActiveIndex(i);
      }
    }
  }

  function handleRightSlide() {
    if (!(translatePosition[3] === 699)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item < 0 ? item + 233 : item;
          case 1:
            return item < 233 ? item + 233 : item;
          case 2:
            return item < 466 ? item + 233 : item;
          default:
            return item < 699 ? item + 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }

  function handleLeftSlide() {
    if (!(translatePosition[3] === 0)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item > -699 ? item - 233 : item;
          case 1:
            return item > -466 ? item - 233 : item;
          case 2:
            return item > -233 ? item - 233 : item;
          default:
            return item > 0 ? item - 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }
  React.useEffect(() => {
    handleSlider("whyKoders", handleLeftSlide, handleRightSlide);
  });
  return (
    <div className="py-16 bg-main-secondary">
      <h1 className="w-[90%] mx-auto sm:w-full text-[1.2rem] sm:text-[2rem] text-center font-medium text-white font-miligrambold">
        Why trust&nbsp;
        <span
          className="bg-gradient-to-r from-white to-main-teal"
          style={{ ...gradientStleObj }}
        >
          Koders
        </span>
        &nbsp;to
        <br />
        <span
          className="bg-gradient-to-r from-white to-main-teal"
          style={{ ...gradientStleObj }}
        >
          Supercharge&nbsp;
        </span>
        your business?
      </h1>

      <div className="hidden md:flex gap-2 mt-10 w-[95%] lg:w-[85%] mx-auto">
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
        {!(activeIndex <= 0) && (
          <div
            onClick={handleRightSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium  absolute left-2"
          >
            <img src={rightAero} alt="" className="h-2 rotate-180" />
            &nbsp;{activeIndex <= 0 ? "" : whyWe[activeIndex - 1]?.state}
          </div>
        )}
        {!(activeIndex >= 3) && (
          <div
            onClick={handleLeftSlide}
            className="z-10 p-1 w-10 h-10 flex justify-center items-center bg-white cursor-pointer rounded-full font-miligramMedium absolute right-2"
          >
            {activeIndex >= 3 ? "" : whyWe[activeIndex + 1]?.state}&nbsp;
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
            translateX={translatePosition[i]}
            isMobile={true}
          />
        ))}
      </div>
      <div className="flex md:hidden justify-center items-center gap-2 mt-2">
        {translatePosition.map((item) => {
          return (
            <div
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
