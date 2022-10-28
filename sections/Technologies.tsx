import React, { useEffect, useRef, useState } from "react";
import { toolsAndtechLogo } from "../assets";
import { CombCell, GradientText } from "../components";
import { getRandomInt, sleep } from "../helper";
const { v4 } = require("uuid");

let COUNTER = 0;
let arrOfIds: any = [];
const Technologies = () => {
  const isAnimationStart = useRef(false);
  const [combStats, setCombStats] = useState([]);
  let tempArr: Array<any> = [];
  useEffect(() => {
    if (typeof window !== "undefined" && window?.screen) {
      const combInLine = Math.floor(window?.screen?.width / 70) + 2;
      const rowsOfComb = Math.floor(window?.screen?.height / 80) + 2;
      for (let i = 0; i < rowsOfComb; i++) {
        for (let j = 0; j <= combInLine; j++) {
          if (tempArr[i]?.length) {
            tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]].concat(
              tempArr[i]
            );
            setCombStats(tempArr);
          } else {
            tempArr[i] = [toolsAndtechLogo[getRandomInt(0, 40)]];
            setCombStats(tempArr);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      const parallelAnimatedComb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let tempArrOne: Array<any> = [];
      parallelAnimatedComb.forEach(() => {
        tempArrOne.push(getRandomInt(0, arrOfIds?.length));
      });

      for (let i = 0; i < tempArrOne.length; i++) {
        const comb = document.getElementById(arrOfIds[tempArrOne[i]]);
        if (comb) {
          comb.style.animation = `fading 3s ease-in-out`;
        }
        await sleep(getRandomInt(100, 200));
      }
      for (let i = 0; i < tempArrOne.length; i++) {
        const comb = document.getElementById(arrOfIds[tempArrOne[i]]);
        if (comb) {
          comb.style.animation = `none`;
          await sleep(getRandomInt(100, 200));
        }
      }

      let tempArrTwo: Array<any> = [];
      parallelAnimatedComb.forEach(() => {
        tempArrTwo.push(getRandomInt(0, arrOfIds?.length));
      });
      await sleep(getRandomInt(500, 800));
      startAnimation();
    };
    if (!isAnimationStart.current) {
      isAnimationStart.current = true;
      for (let i = 0; i < 50; i++) {
        startAnimation();
      }
    }
  });

  return (
    <div className="bg-main-secondary overflow-hidden h-[90vh] md:h-[60vh] lg:h-[90vh] xl:h-[90vh] xxl:h-[90vh]  relative flex justify-center items-center">
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="p-10 z-10 bg-main-secondary w-full mt-4">
          <GradientText
            className="w-[90%] leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2rem] sm:text-[3rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
            text="Technologies that make sense"
          />
          <p className="text-[0.8rem] sm:text-[1.3rem] mx-auto text-center text-main-light_white font-miligramText400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {combStats?.map((item, i) => {
        const top = 65 * i - 43;
        return item.map((item2: any, j: any) => {
          let left = 0;
          if (i % 2 === 0) left = 76 * j - 30;
          else left = 76 * j - 68;
          COUNTER += 1;
          const ii = v4();
          arrOfIds.push(ii);
          return (
            <CombCell
              key={i + j}
              logo={item2.src}
              x={top.toString()}
              y={left.toString()}
              id={ii}
            />
          );
        });
      })}
    </div>
  );
};

export default Technologies;
