import React from "react";

const Loader = () => {
  return (
    <div className="absolute w-full h-full backdrop-blur-md z-50 flex justify-center items-center">
      <p className="text-white text-2xl"> Loading...</p>
    </div>
  );
};

export default Loader;
