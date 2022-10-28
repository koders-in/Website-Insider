import React, { useState } from "react";

interface Props {
  handleToogle?: (data: boolean) => void;
}

const Toogler = ({ handleToogle }: Props) => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = "transition duration-300 ease transform translate-x-5";
  return (
    <div
      className={`w-12 mx-auto h-6 flex items-center rounded-full p-1 cursor-pointer bg-main-teal`}
      onClick={() => {
        setToggle(!toggle);
        handleToogle(!toggle);
      }}
    >
      <div
        className={
          "bg-white h-5 w-5 rounded-full transform shadow-xl" +
          (toggle ? "transition duration-300 ease" : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Toogler;
