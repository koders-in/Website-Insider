import React from "react";

interface Props {
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name: string;
  errorText?: any;
  onBlur?: (props: any) => void;
  title: string;
  textareaStyle?: string;
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
}: Props) => {
  return (
    <div className="border-b-2 text-[0.9rem] md:text-[1.2rem] border-main-light_white pr-1 relative  py-4  pl-2">
      <div className="text-main-light_white pb-4">{title}</div>
      {errorText && (
        <span
          className={`absolute text-red-600 text-xs top-10 left-3${
            errorText ? "opacity-100" : "opacity-0"
          } `}
        >
          {errorText}
        </span>
      )}
      <textarea
        placeholder={placeholder}
        onBlur={onBlur}
        className={`w-full outline-none text-main-light_white ${
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
