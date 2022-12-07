import React from "react";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name: string;
  errorText?: any;
  onBlur?: (props: any) => void;
  title?: string;
  textareaStyle?: string;
  id?: string;
}

const TextArea = ({
  title,
  placeholder,
  handleChange,
  value,
  name,
  errorText,
  onBlur,
  textareaStyle,
  id,
}: Props) => {
  return (
    <div className=" text-[0.9rem] md:text-[1.2rem] relative  py-4">
      {title && (
        <div className="text-main-light_white tracking-[1px] sm:tracking-[2px] pb-3 font-miligramLight text-[0.9rem] md:text-[1.2rem] ">
          {title}
        </div>
      )}
      {errorText && (
        <span
          className={`absolute text-red-600 text-xs top-0 left-3${
            errorText ? "opacity-100" : "opacity-0"
          } `}
        >
          {errorText}
        </span>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`border-b-2 border-main-light_white font-miligramLight w-full outline-none text-main-light_white tracking-[1px] sm:tracking-[2px] placeholder:text-main-light_white  ${
          textareaStyle ? textareaStyle : "bg-main-secondary"
        }`}
        name={name}
        cols={30}
        rows={2}
        onChange={handleChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
