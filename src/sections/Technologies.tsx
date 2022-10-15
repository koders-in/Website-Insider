import React from "react";
import { toolsAndtechLogo } from "../assets";
import { CombCell, GradientText } from "../components";
import { getRandomInt } from "../helper";
const Technologies = () => {
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
  return (
    <div className="bg-main-secondary overflow-hidden h-[235px] sm:h-[300px] md:h-[350px] lg:h-[90vh] xl:h-[90vh]  relative flex justify-center items-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="p-4 z-10 bg-main-secondary w-full">
          <GradientText
            className="w-[90%] mt-4 mx-auto sm:w-fit text-[1.2rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
            text="Technologies that make sense"
          />
          <p className="text-[0.8rem] sm:text-[1rem] mx-auto text-center text-main-light_white font-miligramMedium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {tempArr.map((item, i) => {
        const top = 65 * i;
        return item.map((item2: any, j: any) => {
          let left = 0;
          if (i % 2 === 0) left = 76 * j - 30;
          else left = 76 * j - 68;
          return (
            <CombCell
              key={i + j}
              logo={item2.src}
              x={top.toString()}
              y={left.toString()}
            />
          );
        });
      })}
    </div>
  );
};

export default Technologies;
