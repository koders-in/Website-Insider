import React from "react";

const Loader = () => {
  return (
    <div className="absolute w-full h-full backdrop-blur-md z-50 flex justify-center items-center">
      <div className="border-2 border-white border-b-transparent rounded-full w-[90px] h-[90px] animate-spin"></div>
    </div>
  );
};

export default Loader;
