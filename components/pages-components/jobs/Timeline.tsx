import React, { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    window.onscroll = () => {
      const element = document?.getElementById("timeline");
      const line = document?.getElementById("line");
      if (
        element !== undefined &&
        element !== null &&
        line !== undefined &&
        line !== null
      ) {
        if (element?.offsetTop && window?.pageYOffset) {
          if (element?.offsetTop - window.pageYOffset < 550) {
            const line = document.getElementById("line");
            const animations = ["first", "second", "third", "fourth"];
            let lineAnimationList = [];
            [0, 1, 2, 3, 4].forEach((item, i) => {
              if (item > 0) {
                const temp = `${animations[i - 1]} ease 0.2s ${
                  i ? i / 2 + "s" : ""
                } forwards`;
                lineAnimationList.push(temp);
              }
              const textElm = document.getElementById("textContainer" + item);
              textElm.style.animation = `typing 0.5s steps(40, end) ${
                item ? item / 2 + "s" : ""
              } forwards`;
              if (item === 4) {
                const circleOne = document.getElementById("top44");
                circleOne.style.animation = `fillBg 0.2s 2s forwards`;
                return;
              }
              if (item % 2 !== 0) {
                const circleOne = document.getElementById("bottom4" + item);
                circleOne.style.animation = `fillBg 0.5s ${
                  item / 2 + "s"
                } forwards`;
              } else {
                const circleTwo = document.getElementById("top4" + item);
                circleTwo.style.animation = `fillBg 0.5s ${
                  item / 2 + "s"
                } forwards`;
              }
            });
            if (window.innerWidth > 768)
              line.style.animation = lineAnimationList.toString();
          }
        }
      }
    };
  });
  return (
    <div
      id="timeline"
      className="z-0 flex h-[600px] w-[250px] md:w-[85%] md:h-[100px] xxl:w-[70%] mx-auto  justify-between items-center relative flex-col md:flex-row"
    >
      <div
        id="line"
        className="border-b-0 md:border-b-2 border-r-2 md:border-r-0 w-[1px] h-[100%] top-0 left-[50%] md:left-0 md:h-auto border-main-teal absolute md:top-[49.5%] md:w-0"
      ></div>
      <div
        id="top40"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10"
      ></div>
      <div
        id="bottom41"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10"
      ></div>
      <div
        id="top42"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10"
      ></div>
      <div
        id="bottom43"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10"
      ></div>
      <div
        id="top44"
        className="w-5 h-5 rounded-full border-2 border-main-teal bg-main-primary z-10"
      ></div>

      <div
        id="textContainer0"
        className="text-white font-miligramText400 absolute text-[0.9em] opacity-0 top-[-2%] left-[1%] w-[100px] md:w-fit text-right md:top-[13%] md:left-[-6%]"
      >
        Resume Submission
      </div>
      <div
        id="textContainer1"
        className="text-white font-miligramText400 absolute text-[0.9em] opacity-0 top-[22%] left-[60%]  md:top-[61.5%] md:left-[19.7%]"
      >
        Screening Round
      </div>
      <div
        id="textContainer2"
        className="text-white font-miligramText400 absolute text-[0.9em] opacity-0 top-[47%] left-[15%] w-[65px] md:w-fit text-right  md:top-[16.5%] md:left-[43%]"
      >
        Technical Interview
      </div>
      <div
        id="textContainer3"
        className="text-white  font-miligramText400 absolute text-[0.9em] opacity-0 top-[71%] left-[60%] w-[80px] md:w-fit md:top-[61.5%] md:left-[70%]"
      >
        HR Interview
      </div>
      <div
        id="textContainer4"
        className="text-white  font-miligrambold absolute text-[0.9em] opacity-0 top-[101%] left-[35%]  md:top-[39%] md:left-[101%]"
      >
        Onboarding
      </div>
    </div>
  );
};

export default Timeline;
