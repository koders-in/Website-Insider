import React, { useEffect, useRef } from "react";
import { toolsAndtechLogo } from "../assets";
import { CombCell, GradientText } from "../components";
import { getRandomInt, sleep } from "../helper";
import { techIconsKeyframs } from "../helper/style";

let COUNTER = 0;
const Technologies = () => {
  const isAnimationStart = useRef(false);
  const combInLine = Math.floor(window.screen.width / 70) + 2;
  const rowsOfComb = Math.floor(window.screen.height / 80) + 2;
  let tempArr: Array<any> = [];
  for (let i = 0; i < rowsOfComb; i++) {
    for (let j = 0; j <= combInLine; j++) {
      if (tempArr[i]?.length)
        tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]].concat(tempArr[i]);
      else tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]];
    }
  }
  useEffect(() => {
    COUNTER = 0;
    const startAnimation = async () => {
      const tempNum = [
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
        getRandomInt(253, 503),
      ];
      tempNum.forEach((item) => {
        const id = ("tech" + item).toString();
        const comb = document.getElementById(id);
        if (comb)
          comb.style.animation = `fading ${getRandomInt(
            3,
            5
          )}s ease-in-out ${getRandomInt(1, 5)}s infinite reverse`;
      });

      await sleep(getRandomInt(3000, 6000));
      tempNum.forEach((item) => {
        const id = ("tech" + item).toString();
        // console.log(id);
        const comb = document.getElementById(id);
        if (comb)
          comb.style.animation = "none 0.4s ease-in-out infinite reverse";
      });
      startAnimation();
    };
    if (!isAnimationStart.current) {
      isAnimationStart.current = true;
      [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].forEach((item) => {
        startAnimation();
      });
    }
  });

  return (
    <div className="bg-main-secondary overflow-hidden h-[90vh] sm:h-[300px] md:h-[60vh] lg:h-[90vh] xl:h-[90vh] xxl:h-[60vh]  relative flex justify-center items-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="p-4 z-10 bg-main-secondary w-full mt-4">
          <GradientText
            className="w-[90%] mx-auto sm:w-fit text-[1.6rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
            text="Technologies that make sense"
          />
          <p className="text-[0.8rem] sm:text-[1rem] mx-auto text-center text-main-light_white font-miligramMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {tempArr.map((item, i) => {
        const top = 65 * i - 43;
        return item.map((item2: any, j: any) => {
          let left = 0;
          if (i % 2 === 0) left = 76 * j - 30;
          else left = 76 * j - 68;
          COUNTER += 1;

          return (
            <CombCell
              key={i + j}
              logo={item2.src}
              x={top.toString()}
              y={left.toString()}
              id={"tech" + COUNTER}
            />
          );
        });
      })}
    </div>
  );
};

export default Technologies;
