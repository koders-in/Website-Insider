import React from "react";

import Button from "../../Button";
import { add, tick } from "../../../assets";
import { FormState } from "../../../pages/StartProject";

interface Props {
  projectData: FormState;
  setProjectData: (data: any) => void;
  buttonsArray: Array<string>;
}

const ButtonsGroup = ({ buttonsArray, projectData, setProjectData }: Props) => {
  const handleClick = (item: string) => {
    if (projectData?.technologies?.find((elm) => elm === item)) {
      setProjectData((prev: FormState) => {
        return {
          ...prev,
          technologies: prev.technologies.filter((elm) => elm !== item),
        };
      });
    } else {
      setProjectData((prev: FormState) => {
        return {
          ...prev,
          technologies: [...prev.technologies, item],
        };
      });
    }
  };
  return (
    <div className="flex flex-wrap gap-3 md:gap-8 items-center font-miligramMedium md:pl-4">
      {buttonsArray.map((item, i) => (
        <Button
          key={i}
          OnClick={() => handleClick(item)}
          text={item}
          logo={add}
          hoverLogo={tick}
          hoveLogoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          logoStyle="h-[8px] md:w-[18px] md:h-[18px]"
          isSelect={projectData?.technologies?.find((elm) => elm === item)}
          className="border-[1px] sm:border-2 text-[0.8rem] sm:text-[1.1rem] text-white border-main-teal rounded-lg px-2 py-1 sm:px-4 sm:py-3 hover:bg-main-teal hover:text-black"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
