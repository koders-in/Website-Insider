import React, { useEffect, useState } from "react";
import Image from "next/image";

import { aeroDown } from "../assets";
import Divider from "./Divider";

interface Props {
  placeholder: string;
  handleSelect: (data: Object) => void;
  list: Array<string>;
  value: string;
  name: string;
  mainStyle?: string;
  innelStyle?: string;
  dropdownStyle?: string;
  errorText?: string;
}

const SelectBox = ({
  handleSelect,
  list,
  name,
  placeholder,
  value,
  mainStyle,
  innelStyle,
  dropdownStyle,
  errorText,
}: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onclick = function (event) {
      if (
        !(
          event.target.matches(".select") ||
          event.target.matches(".down-list") ||
          event.target.matches(".select-img") ||
          event.target.matches(".select-label") ||
          event.target.matches(".items")
        )
      ) {
        setShow(false);
      }
    };
  });

  return (
    <div
      onClick={() => setShow(!show)}
      className={`select relative ${
        mainStyle
          ? mainStyle
          : `flex gap-2 cursor-pointer items-center border-b-2 w-full pb-1 sm:pb-3 text-[0.9rem] md:text-[1.2rem] sm:mt-5 relative ${
              show ? "border-main-teal" : "border-main-light_white"
            }`
      } `}
    >
      <span
        className={`absolute text-red-600 text-xs -top-6 left-0 ${
          errorText ? "opacity-100" : "opacity-0"
        } `}
      >
        {errorText}
      </span>
      <div
        className={`font-miligramLight relative select-label px-1 text-main-light_white bg-transparent border-none outline-none tracking-[1px] sm:tracking-[2px] placeholder:text-main-light_white w-full ${innelStyle}`}
      >
        {value ? value : placeholder}
      </div>
      <Image
        src={aeroDown}
        alt="show"
        className={`select-img h-3 w-3 mr-2 hover:brightness-75 transition-all duration-300 ${
          show ? "rotate-180" : ""
        }`}
      />
      <ul
        className={`down-list ${
          dropdownStyle
            ? dropdownStyle
            : "w-full z-50 rounded-md absolute top-10 sm:top-12 transition-all duration-500 bg-main-secondary text-main-light_white overflow-hidden"
        } ${show ? "max-h-[300px]" : "max-h-0"}`}
      >
        <Divider className="mt-1" />
        {list.map((item, i) => (
          <React.Fragment key={i}>
            <li
              onClick={() => {
                setShow(!show);
                handleSelect({ name: name, value: item });
              }}
              className="items mx-3 z-30 hover:text-white cursor-pointer hover:bg-gray-600 px-3 py-2 border-b-[1px] border-gray-600"
            >
              {item}
            </li>
          </React.Fragment>
        ))}
        <Divider className="mt-3" />
      </ul>
    </div>
  );
};

export default SelectBox;
