import React from "react";

interface Props {
  text: string;
  type: "top" | "bottom";
  position: string;
  index: number;
}
const TimelinePoint = ({ text, type, position, index }: Props) => {
  return (
    <div className={`absolute ${position} ${index === 4 ? "flex gap-2" : ""}`}>
      {type === "top" && (
        <div
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal w-2 mx-auto ${
            index === 4 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
      <span className="text-main-light_white leading-none">{text}</span>
      {type === "bottom" && (
        <div
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal w-2 mx-auto ${
            index === 4 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
    </div>
  );
};

export default TimelinePoint;
