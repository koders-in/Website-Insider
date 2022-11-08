import React from "react";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  type: string;
  styling?: string;
  errorText?: string;
}

const InputBox = ({
  handleChange,
  name,
  placeholder,
  value,
  styling,
  type,
  errorText,
}: Props) => {
  return (
    <div className="w-full relative">
      <span
        className={`absolute text-red-600 text-xs top-0 left-0 ${
          errorText ? "opacity-100" : "opacity-0"
        } `}
      >
        {errorText}
      </span>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={`px-1 text-[0.9rem] md:text-[1.2rem] text-main-light_white sm:mt-5 pb-1 sm:pb-3 bg-transparent tracking-[1px] sm:tracking-[2px] border-b-2 outline-none border-main-light_white placeholder:text-main-light_white w-full ${styling}`}
      />
    </div>
  );
};

export default InputBox;
