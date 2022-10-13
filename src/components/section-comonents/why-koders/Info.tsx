import React, { ReactNode } from "react";
import GradientText from "../../GradientText";

interface Props {
  stat: string;
  title: string;
  html?: string;
  className: string;
  isMobile?: boolean;
  translateX?: number;
}

const Info = ({
  stat,
  html,
  title,
  className,
  isMobile,
  translateX,
}: Props) => {
  return (
    <div
      className={`md:w-1/4 ${className}`}
      style={
        isMobile
          ? {
              transform: `translateX(${translateX}px) ${
                translateX === 0 ? "scale(1.1)" : "scale(0)"
              }`,
            }
          : {}
      }
    >
      <GradientText
        className="text-[10rem] text-center leading-[135px] bg-gradient-to-r from-white via-main-lightTeal to-main-teal font-battambangMedium"
        text={stat}
      />
      <p className="text-center text-white text-[15px] lg:text-[22px] my-1 font-battambangMedium">
        {title}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Info;
