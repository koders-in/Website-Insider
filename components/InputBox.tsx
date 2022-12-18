import React from "react";
import Image from "next/image";
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
  fontSize?: string;
  labelID: string;
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
  fontSize,
  labelID,
}: Props) => {
  const handleFocus = () => {
    try {
      const animatedLabel = document.getElementById(labelID);
      animatedLabel.style.animation = "moveLabelUp 0.5s ease forwards";
    } catch (error) {
      console.log(error);
    }
  };
  const handleBlur = () => {
    try {
      const animatedLabel = document.getElementById(labelID);
      animatedLabel.style.animation = "moveLabelDown 0.5s ease forwards";
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (value) {
      handleFocus();
    }
  });

  return (
    <div className="w-full relative">
      <p
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
      </p>
      {placeholder && (
        <span
          id={labelID}
          className={`z-0 absolute transition-all duration-200 top-[20px] left-[4px] font-miligramLight text-main-light_white tracking-[1px] sm:tracking-[2px] ${
            fontSize
              ? fontSize
              : "text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]"
          }`}
        >
          {placeholder}
        </span>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onBlur={(e) => {
          onBlur(e);
          if (!value) handleBlur();
        }}
        onFocus={handleFocus}
        name={name}
        onChange={handleChange}
        // placeholder={placeholder}
        className={`z-10 font-miligramLight relative px-1 text-main-light_white sm:mt-5 pb-1 sm:pb-3 bg-transparent tracking-[1px] sm:tracking-[2px] border-b-2 outline-none border-main-light_white placeholder:text-main-light_white w-full ${styling} ${
          fontSize ? fontSize : "text-[0.9rem] md:text-[1rem] lg:text-[1.2rem]"
        }`}
      />
    </div>
  );
};

export default InputBox;
