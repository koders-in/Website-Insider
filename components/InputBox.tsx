import Image from "next/image";
import React from "react";
import { error } from "../assets";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  type: string;
  styling?: string;
  errorText?: any;
  onBlur?: (props: any) => void;
  id?: string;
}

const InputBox = ({
  handleChange,
  name,
  placeholder,
  value,
  styling,
  type,
  errorText,
  onBlur,
  id,
}: Props) => {
  return (
    <div className="w-full relative">
      <span
        className={`absolute text-red-600 text-xs bottom-[-20px] left-0 flex justify-center items-center font-miligramTextMedium ${
          errorText ? "opacity-100" : "opacity-0"
        } `}
      >
        <Image
          src={error}
          alt={error}
          width={17}
          height={17}
          className="mr-1"
        />
        {errorText}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onBlur={onBlur}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={`font-miligramLight px-1 text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] text-main-light_white sm:mt-5 pb-1 sm:pb-3 bg-transparent tracking-[1px] sm:tracking-[2px] border-b-2 outline-none border-main-light_white placeholder:text-main-light_white w-full ${styling}`}
      />
    </div>
  );
};

export default InputBox;
