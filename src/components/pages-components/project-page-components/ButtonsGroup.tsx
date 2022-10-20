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
          technologies: prev.technologies.filter((elm) => elm !== item)
        }
      })
    } else {
      setFormState((prev: FormState) => {
        return {
          ...prev,
          technologies: [...prev.technologies, item]
        }
      })
    }
  };
  return (
    <div className="flex flex-wrap gap-8 items-center font-miligramMedium pl-4">
      {buttonsArray.map((item, i) => (
        <Button
          key={i}
          OnClick={() => handleClick(item)}
          text={item}
          logo={add}
          hoverLogo={tick}
          hoveLogoStyle="h-[12px]"
          isSelect={formState?.technologies?.find((elm) => elm === item)}
          className="text-white border-2 text-[1.1rem] border-main-teal rounded-lg px-4 py-3 hover:bg-main-teal hover:text-black"
        />
      ))}
    </div>
  );
};

export default ButtonsGroup;
