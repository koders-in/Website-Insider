import React, { useEffect } from "react";
import { github, go, tech, toolsAndtechLogo } from "../assets";
import { CombCell, GradientText } from "../components";
const Technologies = () => {
  return (
    <div className="bg-main-secondary overflow-hidden h-[235px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px]  relative flex justify-center items-center">
      <img src={tech} alt="" className="absolute left-0 -top-3  w-fit" />
      <div className="w-full p-5 bg-main-secondary z-10">
        <GradientText
          className="w-[90%] mx-auto sm:w-fit text-[1.2rem] sm:text-[2rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Technologies that make sense"
        />
        <p className="text-[0.8rem] sm:text-[1rem] w-full mx-auto text-center text-main-light_white font-miligramMedium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Technologies;

// import { polygonStyle } from "../helper/style";
// import { defineHex, Grid, Hex, rectangle } from "honeycomb-grid";
// import { SVG } from "@svgdotjs/svg.js";
// let ROW_COUNT = 0;
// let SPACE_COUNT = 0;
// const Technologies = () => {
//   // const WideHex = defineHex({
//   //   dimensions: 30, // wide hexes
//   // });
//   // const grid = new Grid(WideHex, rectangle({ width: 5, height: 5 }));

//   // useEffect(() => {
//   //   const elm = document.getElementById("mm");
//   //   const draw = SVG().addTo(elm).size("100%", "100%");
//   //   grid.forEach(renderSVG);
//   //   function renderSVG(hex: Hex) {
//   //     const arg: any = hex.corners.map(({ x, y }) => `${x},${y}`);
//   //     const polygon = draw
//   //       // create a polygon from a hex's corner points
//   //       .polygon(arg)
//   //       .fill("none")
//   //       .stroke({ width: 2, color: "#999" });

//   //     return draw.group().add(polygon);
//   //   }
//   // }, []);
//   return (
//     <div className="bg-main-secondary overflow-hidden">
//       {/* <GradientText
//         className="text-[35px] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
//         text="Technologies that make sense"
//       /> */}
//       <div className="relative h-[50vh]" id="mm">
//         {toolsAndtechLogo.map((item, i) => {
//           if (i % 24 === 0) {
//             console.log(i, ROW_COUNT);
//             if (i > 0) ROW_COUNT++;
//             SPACE_COUNT = 0;
//           }
//           // const top = "top-" + `[${ROW_COUNT * 4}%]`;
//           // const left = "left-" + `[${SPACE_COUNT * 4}%]`;
//           const top = ROW_COUNT * 4 - 4;
//           const left = SPACE_COUNT * 4.2;
//           SPACE_COUNT += 1;
//           // if (i > 2) return;
//           return (
//             <div
//               key={i}
//               className={`absolute`}
//               style={{ left: `${left}%`, top: `${top}%` }}
//             >
//               <CombCell key={i} x={item.x} y={item.y} logo={item.src} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
