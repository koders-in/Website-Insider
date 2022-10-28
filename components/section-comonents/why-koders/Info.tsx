import React, { ReactNode } from "react";
import Divider from "../../Divider";
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
      className={`${className} w-full md:w-1/4`}
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
        className="text-[10rem] leading-none xl:text-[14rem] text-center xl:leading-[14rem] bg-gradient-to-r from-white via-main-lightTeal to-main-teal font-battambangMedium"
        text={stat}
      />
      <p className="text-center text-white text-[1.5rem] leading-none xl:text-[1.8rem] my-1 lg:mt-5  font-miligramMedium">
        {title}
      </p>
      <Divider className="mt-3 md:hidden" />
      <div className="mt-2" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
};

export default Info;
