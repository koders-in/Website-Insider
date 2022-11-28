import React, { useState } from "react";
import { timelinePoints } from "../../../helper/constant";
import TimelinePoint from "./TimelinePoint";

const Timeline = () => {
  const [dataPoints, setDataPoints] = useState([
    "top-[-2rem] left-[-6.1rem] md:left-[-4.8rem] md:top-[-2rem]",
    "top-[65px] left-[-0.55rem] md:top-[-0.5rem] md:left-[16%]",
    "top-[175px] left-[-5.05rem] md:left-[42%] md:top-[-2rem]",
    "top-[280px] left-[-0.55rem] md:top-[-0.5rem] md:left-[68%]",
    "right-[-2.4rem] bottom-[-2rem] md:right-[-6rem] md:top-[-1.9rem]",
  ]);
  return (
    <div className="w-fit h-[400px] md:h-auto md:w-[70%] mx-auto relative border-r-[1px] md:border-b-[1px] border-main-teal">
      {timelinePoints.map((item, i) => {
        return (
          <TimelinePoint
            key={i}
            text={item.text}
            type={item.type}
            position={dataPoints[i]}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
