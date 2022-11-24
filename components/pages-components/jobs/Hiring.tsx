import React from "react";
import { offersData } from "../../../helper/constant";
import Divider from "../../Divider";
import GradientText from "../../GradientText";
import Tile from "./Tile";
import Timeline from "./Timeline";

const Hiring = () => {
  return (
    <div>
      <div className=" border-b-2 border-main-teal"></div>
      <Divider className="h-10" />
      <GradientText
        className="w-[90%] sm:w-fit mx-auto text-[1.6rem] sm:text-[2.6rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Hiring Process"
      />
      <Divider className="h-20" />
      <Timeline />
      <Divider className="h-32" />
      <GradientText
        className="w-[90%] sm:w-fit mx-auto text-[1.6rem] sm:text-[2.6rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="What we Offer"
      />
      <p
        data-aos="slide-right"
        className="mx-auto text-[0.8rem] leading-none m-1 xl:w-[60%] sm:text-[1.3rem] text-center text-main-light_white font-miligramText400"
      >
        A real visualisation of Dunder-Mifflin with the Gen Z quoting- ‘work to
        live, not live to work’. Gen Z and Millenials vibe with each other like
        ‘peanut butter and jelly’ on a sandwich to kreate perfection.
      </p>
      <div className="w-[70%] flex-wrap gap-5  mx-auto mt-16 flex justify-between ">
        {[...offersData[0], ...offersData[1]].map((item, i) => {
          return (
            <Tile
              classes="gap-8 py-9"
              key={i}
              icon={item.icon}
              text={item.text}
              index={i}
            />
          );
        })}
      </div>
      {/* <div className="w-[70%] mx-auto mt-10 flex justify-between ">
        {offersData[1].map((item, i) => {
          return <Tile key={i} icon={item.icon} text={item.text} />;
        })}
      </div> */}
      <Divider className="h-16" />
    </div>
  );
};

export default Hiring;
