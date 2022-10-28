import Image from "next/image";
import React from "react";
import { search, work } from "../../../assets";
import Divider from "../../Divider";
import GradientText from "../../GradientText";
import SelectBox from "../../SelectBox";

interface Props {
  selectedFile: any;
  setSelectedFile: (data: any) => void;
}

const LandingSection = ({ selectedFile, setSelectedFile }: Props) => {
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSelectedFile((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };
  const handleSelect = (data: any) => {
    const { name, value } = data;
    setSelectedFile((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };
  return (
    <div className="">
      <GradientText
        text="Work at Koders"
        className="w-[90%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
      />
      <p className="mx-auto text-[0.8rem] leading-none m-1 xl:w-[60%] sm:text-[1.3rem] text-center text-main-light_white font-miligramText400">
        At Koders we build softwares with new dimensions by utilizing the full
        potential of our team to bring out the best for our customers.
      </p>
      <Divider className="mt-8" />
      <div className="w-[90%] sm:w-1/2 md:w-[60%] lg:w-[40%] xl:w-[35%] border-[1.5px] border-main-teal mx-auto rounded-lg overflow-hidden flex mt-6 xxl:mt-14">
        <div className="flex items-center w-full border-r-[1.5px] border-main-teal">
          <Image src={work} alt="aero" className="ml-5" />
          <input
            type="text"
            className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramMedium"
            placeholder="Job Title"
            name="jobTitle"
            onChange={handleChange}
            value={selectedFile?.jobTitle}
          />
        </div>
        <div className="w-14 h-10 bg-main-greenOpt-200 flex justify-center items-center p-4">
          <Image
            src={search}
            alt="aero"
            className="scale-90 hover:scale-100  cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[90%] flex-wrap md:flex-nowrap md:w-[60%] lg:w-[40%] xl:w-[35%]  mx-auto gap-3 mt-8 flex items-center justify-between text-main-light_white ">
        <span className="text-[0.9rem] w-full block text-center md:inline md:w-fit mr-3">
          FILTER BY:
        </span>
        <SelectBox
          handleSelect={handleSelect}
          list={["UK", "UP", "BR", "HR", "MP", "RJ"]}
          name="location"
          placeholder="Location"
          value={selectedFile?.location}
          innelStyle="p-0"
          mainStyle="cursor-pointer bg-main-secondary w-full md:w-[30%] rounded-xl px-2 text-[0.9rem] z-30 flex items-center justify-between relative py-[3px]"
        />
        <SelectBox
          handleSelect={handleSelect}
          list={["A", "B", "C", "D"]}
          name="categories"
          placeholder="Categories"
          value={selectedFile?.categories}
          innelStyle="p-0"
          mainStyle="cursor-pointer bg-main-secondary w-full md:w-[30%] rounded-xl px-2 text-[0.9rem] z-30 flex items-center justify-between relative py-[3px]"
        />
      </div>
    </div>
  );
};

export default LandingSection;
