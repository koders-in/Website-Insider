import React from "react";

import Button from "../../Button";
import { add, tick } from "../../../assets";
import { FormState } from "../../../pages/start-project";

interface Props {
  technologies: Array<string>;
  handleClick: (data: string) => void;
  buttonsArray: Array<string>;
  containerStyle?: string;
}

const ButtonsGroup = ({
  buttonsArray,
  technologies,
  handleClick,
  containerStyle,
}: Props) => {
  return (
    <div
      className={`flex flex-wrap gap-3 md:gap-7 items-center font-miligramMedium md:pl-4 ${containerStyle}`}
    >
      {buttonsArray.map((item, i) => (
        <Button
          key={i}
          OnClick={() => handleClick(item)}
          text={item}
          logo={add}
          hoverLogo={tick}
          hoveLogoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          logoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          isSelect={technologies?.find((elm) => elm === item)}
          className="border-[1px] sm:border-2 text-[0.8rem] sm:text-[1.1rem] text-white border-main-teal rounded-lg px-2 py-1 sm:px-[0.9rem] sm:py-[0.6rem] hover:bg-main-teal hover:text-black"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
