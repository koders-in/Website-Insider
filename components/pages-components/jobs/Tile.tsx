import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  text: string;
  classes?: string;
  index?: number;
}
const Tile = ({ icon, text, classes, index }: Props) => {
  return (
    <div
      className={`py-8 w-full lg:w-[45%] xl:w-[30%] border-2 border-main-teal rounded-xl bg-main-secondary flex flex-col gap-3 items-center justify-center ${
        index < 3 ? classes : ""
      }`}
    >
      <Image src={icon} alt={icon} width={40} height={40} />
      <p
        className="text-main-whiteVar1 text-[1.5em] text-center m-0 p-0 leading-none"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default Tile;
