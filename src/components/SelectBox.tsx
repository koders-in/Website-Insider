import React from "react";
import { aeroDown } from "../assets";

interface Props {
  placeholder: string;
  handleSelect: (data: any) => void;
  list: Array<string>;
  value: string;
  name: string;
}

const SelectBox = ({ handleSelect, list, name, placeholder, value }: Props) => {
  return (
    <div className="flex gap-2 items-center border-b-2 border-main-light_white w-full p-1">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        contentEditable={false}
        name={name}
        className="px-1 bg-transparent border-none outline-none text-main-light_white w-full"
      />
      <img
        src={aeroDown}
        alt="show"
        className="h-3 w-3 mr-2 cursor-pointer hover:brightness-75"
      />
    </div>
  );
};

export default SelectBox;
