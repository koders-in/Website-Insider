import React from "react";

interface Props {
  text: string;
  type: "top" | "bottom";
  position: string;
  index: number;
}
const TimelinePoint = ({ text, type, position, index }: Props) => {
  return (
    <div
      className={`absolute gap-2 items-center  md:block ${position} ${
        index === 4 ? " md:flex gap-2 w-fit" : "flex"
      }`}
    >
      {type === "top" && (
        <div
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal h-2 w-2 mx-auto ${
            index === 4 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
      <span className="text-main-light_white w-fit text-center block leading-normal">
        {text}
      </span>
      {type === "bottom" && (
        <div
          className={`p-2 bg-main-primary rounded-full border-[0.5px] border-main-teal w-2 h-2 mx-auto ${
            index === 4 ? "bg-main-teal" : ""
          }`}
        ></div>
      )}
    </div>
  );
};

export default TimelinePoint;
