import React from "react";

interface Props {
  placeholder: string;
  handleChange: (data: any) => void;
  value: string;
  name: string;
}

const InputBox = ({ handleChange, name, placeholder, value }: Props) => {
  return (
    <input
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      className="px-1 bg-transparent border-b-2 outline-none border-main-light_white text-main-light_white w-full"
    />
  );
};

export default InputBox;
