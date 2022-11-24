import React from "react";

interface Props {
  title: string;
}

const TextArea = ({ title }: Props) => {
  return (
    <div className="border-2 text-[0.9rem] md:text-[1.2rem] border-main-light_white p-1">
      <div className="text-main-light_white">{title}</div>
      <textarea
        className="w-full bg-main-secondary outline-none text-main-light_white"
        name=""
        id=""
        cols={30}
        rows={4}
      ></textarea>
    </div>
  );
};

export default TextArea;
