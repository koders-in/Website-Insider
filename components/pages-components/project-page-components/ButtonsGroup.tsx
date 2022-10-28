import React from "react";
import { add, tick } from "../../../assets";
import { FormState } from "../../../pages/StartProject";
import Button from "../../Button";

interface Props {
  buttonsArray: Array<string>;
  setFormState: (data: object) => void;
  formState: FormState;
}

const ButtonsGroup = ({ buttonsArray, setFormState, formState }: Props) => {
  const handleClick = (item: string) => {
    if (formState?.technologies?.find((elm) => elm === item)) {
      setFormState((prev: FormState) => {
        return {
          ...prev,
          technologies: prev.technologies.filter((elm) => elm !== item),
        };
      });
    } else {
      setFormState((prev: FormState) => {
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
          isSelect={formState?.technologies?.find((elm) => elm === item)}
          className="border-[1px] sm:border-2 text-[0.8rem] sm:text-[1.1rem] text-white border-main-teal rounded-lg px-2 py-1 sm:px-4 sm:py-3 hover:bg-main-teal hover:text-black"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
