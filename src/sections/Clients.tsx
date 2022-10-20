import React from "react";
import { img1, img2, img3, projectOne } from "../assets";
import { Divider, GradientText } from "../components";
import { sleep } from "../helper";

let TEMP_COUNT = 0;

const Clients = () => {
  const isRunning = React.useRef(false);
  const [count, setCount] = React.useState(TEMP_COUNT);
  const [leftOutStyle, setLeftOutStyle] = React.useState("");
  const [rightOutStyle, setRightOutStyle] = React.useState("rightOut-animate");

  React.useEffect(() => {
    const updateAnimation = async () => {
      setLeftOutStyle("");
      setRightOutStyle("");
      if (TEMP_COUNT < 3) {
        TEMP_COUNT = TEMP_COUNT + 1;
      } else TEMP_COUNT = 0;
      setCount(TEMP_COUNT);
      await sleep(2000);
      setLeftOutStyle("animate-leftOut");
      setRightOutStyle("animate-rightOut");
      await sleep(100);
      updateAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      updateAnimation();
    }
  }, []);

  return (
    <div className="py-16 overflow-hidden xxl:py-[10rem]">
      <Divider className="mt-5" />
      <GradientText
        text="Trusted by the"
        className="text-[1.6rem] sm:text-[2.6rem] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
      />
      {count === 0 && (
        <h2
          className={`text-center text-[1.6rem] sm:text-[2.6rem]  font-miligrambold text-white font-medium animate-leftIn ${leftOutStyle}`}
        >
          Google
        </h2>
      )}
      {count === 1 && (
        <h2
          className={`text-center text-[1.6rem] sm:text-[2.6rem]  font-miligrambold text-white font-medium animate-rightIn ${rightOutStyle}`}
        >
          Microsoft
        </h2>
      )}
      {count === 2 && (
        <h2
          className={`text-center text-[1.6rem] sm:text-[2.6rem]  font-miligrambold text-white font-medium animate-leftIn ${leftOutStyle}`}
        >
          Facebook
        </h2>
      )}
      {count === 3 && (
        <h2
          className={`text-center text-[1.6rem] sm:text-[2.6rem]  font-miligrambold text-white font-medium animate-rightIn ${rightOutStyle}`}
        >
          Amazon
        </h2>
      )}
      <div className="w-[85%] h-[63vh] overflow-hidden sm:w-[55%] mt-10 mx-auto shadow-client shadow-main-teal border-2 border-main-light_white">
        {count === 0 && (
          <img src={projectOne} alt="project" className="w-full h-full" />
        )}
        {count === 1 && (
          <img src={img1} alt="project" className="w-full h-full" />
        )}
        {count === 2 && (
          <img src={img2} alt="project" className="w-full h-full" />
        )}
        {count === 3 && (
          <img src={img3} alt="project" className="w-full h-full" />
        )}
      </div>
      <Divider className="mt-3" />
    </div>
  );
};

export default Clients;
