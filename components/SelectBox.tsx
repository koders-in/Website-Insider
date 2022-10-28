import Image from "next/image";
import React, { useState } from "react";
import { aeroDown } from "../assets";

interface Props {
  placeholder: string;
  handleSelect: (data: Object) => void;
  list: Array<string>;
  value: string;
  name: string;
  mainStyle?: string;
  innelStyle?: string;
}

const SelectBox = ({
  handleSelect,
  list,
  name,
  placeholder,
  value,
  mainStyle,
  innelStyle,
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className={`mr-2 ${
        mainStyle
          ? mainStyle
          : "flex gap-2 cursor-pointer items-center border-b-2 border-main-light_white w-full pb-1 sm:pb-3 text-[0.9rem] md:text-[1.2rem] sm:mt-5 relative"
      } `}
    >
      <div
        placeholder={placeholder}
        className={`px-1 text-main-light_white bg-transparent border-none outline-none tracking-[1px] sm:tracking-[2px] placeholder:text-main-light_white w-full ${innelStyle}`}
      >
        {value ? value : placeholder}
      </div>
      <Image
        src={aeroDown}
        alt="show"
        className={`h-3 w-3 mr-2 hover:brightness-75 transition-all duration-300 ${
          show ? "rotate-180" : ""
        }`}
      />
      <ul
        className={`w-full z-50 rounded-md absolute top-10 sm:top-12 transition-all duration-500 bg-main-secondary text-main-light_white overflow-hidden ${
          show ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {list.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              setShow(!show);
              handleSelect({ name: name, value: item });
            }}
            className="m-3 z-30 hover:text-white cursor-pointer hover:bg-gray-600 px-3 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
