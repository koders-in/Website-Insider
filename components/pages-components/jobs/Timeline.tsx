import React, { useState } from "react";
import { timelinePoints } from "../../../helper/constant";
import TimelinePoint from "./TimelinePoint";

const Timeline = () => {
  const [dataPoints, setDataPoints] = useState([
    "left-[-4.8rem] top-[-2rem]",
    "top-[-0.5rem] left-[16%]",
    "left-[42%] top-[-2rem]",
    "top-[-0.5rem] left-[68%]",
    "right-[-6rem] top-[-0.5rem]",
  ]);
  return (
    <div className="w-[70%] mx-auto relative">
      <div className="absolute left-0 top-0 border-b-[1px] border-main-teal w-full"></div>
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
