import React, { useState } from "react";

interface Props {
  logo: string;
  x?: string;
  y?: string;
}

const CombCell = ({ logo, x, y }: Props) => {
  const [iconStyle, setIconStyle] = useState(false);
  return (
    <div className="relative bg-main-teal w-[3.5rem] h-[2rem]">
      <div className="h-[2rem] w-[2rem] bg-main-teal rotate-[139deg] translate-x-[11px] translate-y-[-16px] skew-x-[19deg] skew-y-[10deg]"></div>
      <div className="h-[2rem] w-[2rem] bg-main-teal rotate-[139deg] translate-x-[11px] translate-y-[-16px] skew-x-[19deg] skew-y-[10deg]"></div>
      <div className="absolute left-[0.2rem] top-[0.12rem] bg-gray-500 w-[3.08rem] h-[1.7rem]">
        <div className="h-[1.71rem] w-[1.71rem] bg-gray-500 rotate-[139deg] translate-x-[10px] translate-y-[-13px] skew-x-[19deg] skew-y-[10deg]"></div>
        <div className="h-[1.71rem] w-[1.71rem] bg-gray-500 rotate-[139deg] translate-x-[10px] translate-y-[-12.9px] skew-x-[19deg] skew-y-[10deg]"></div>
        <img
          src={logo}
          alt=""
          className="w-full h-full left-0 top-0 absolute"
        />
      </div>
    </div>
  );
};

export default CombCell;

// <div
//   // className="absolute left-[70%] top-[10%]"
//   className={`absolute ${x} ${y}`}
// >
//   <div className="relative h-[49px] w-[100px] bg-main-teal flex justify-center items-center">
//     <div className="absolute bottom-[-123%] border-b-transparent border-r-transparent border-l-transparent border-t-[30px] border-b-[30px] border-r-[49.5px] border-l-[49.5px] border-t-main-teal"></div>
//     <div className="absolute top-[-122%] border-t-transparent border-r-transparent border-l-transparent border-t-[30px] border-b-[30px] border-r-[49.5px] border-l-[49.5px] border-b-main-teal"></div>
//     {/* Inner shape */}
//     <div
//       onMouseEnter={() => setIconStyle(true)}
//       onMouseLeave={() => setIconStyle(false)}
//       className={`h-[45px] w-[94px] relative z-10 flex items-center justify-center cursor-pointer ${
//         iconStyle ? "bg-white" : "bg-main-secondary"
//       }`}
//     >
//       <div
//         className={`absolute bottom-[-116%] border-b-transparent border-r-transparent border-l-transparent border-t-[28px] border-b-[24px] border-r-[47px] border-l-[47px] ${
//           iconStyle ? "border-t-white" : "border-t-main-secondary"
//         }`}
//       ></div>
//       <div
//         className={`absolute top-[-115%] left-[1px] border-t-transparent border-r-transparent border-l-transparent border-t-[24px] border-b-[28px] border-r-[46px] border-l-[46px]
//     ${iconStyle ? "border-b-white" : "border-b-main-secondary "}
//     `}
//       ></div>
//       <img
//         src={logo}
//         alt="tech"
//         className={`z-10 h-10 ${iconStyle ? "invert" : ""}`}
//       />
//     </div>
//   </div>
// </div>
