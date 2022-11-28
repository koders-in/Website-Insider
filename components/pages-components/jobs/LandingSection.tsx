import React, { useState } from "react";
import Image from "next/image";
import Fuse from "fuse.js";

import Divider from "../../Divider";
import GradientText from "../../GradientText";
import { search, work } from "../../../assets";
import Toogler from "../../Toogler";
import { jobTypes } from "../../../helper/constant";

interface Props {
  setPinJobs: (data: any) => void;
  pinJobs: any;
  tempData: any;
  setNoMatch: (data: boolean) => void;
}
const LandingSection = ({
  pinJobs,
  setPinJobs,
  setNoMatch,
  tempData,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [isRemote, setIsRemote] = useState(true);
  const [department, setDepartment] = useState("All");

  const handleChange = async (e: any) => {
    const { value } = e.target;
    if (!value) {
      setPinJobs(tempData);
      setNoMatch(false);
      return;
    }
    if (tempData?.length) {
      const fuse = new Fuse(tempData, {
        location: 0,
        shouldSort: true,
        keys: ["job.title"],
      });
      let pattern = value;
      const res: any = fuse.search(pattern);
      if (res?.length === 0) {
        setPinJobs([]);
        setNoMatch(true);
        return;
      }
      if (res?.length) {
        setNoMatch(false);
        const temp = res?.map(({ item }) => {
          return item;
        });
        setPinJobs(temp);
      }
    }
  };
  const handleToogle = (data: any) => {
    setIsRemote(data);
    if (tempData?.length) {
      const fuse = new Fuse(tempData, {
        location: 0,
        shouldSort: true,
        keys: ["location"],
      });
      const pattern = data ? "Remote" : "Dehradun, Uttarakhand";
      const res: any = fuse.search(pattern);
      if (res?.length === 0) {
        setPinJobs([]);
        setNoMatch(true);
        return;
      }
      if (res?.length) {
        setNoMatch(false);
        const temp = res?.map(({ item }) => {
          return item;
        });
        setPinJobs(temp);
      }
    }
  };

  const handleClick = (data: string) => {
    setDepartment(data);
    if (data === "All") {
      setPinJobs(tempData);
      setNoMatch(false);
      return;
    }
    if (tempData?.length) {
      const fuse = new Fuse(tempData, {
        location: 0,
        shouldSort: true,
        keys: ["job.department"],
      });
      console.log(tempData);
      const pattern = data;
      const res: any = fuse.search(pattern);
      if (res?.length === 0) {
        setPinJobs([]);
        setNoMatch(true);
        return;
      }
      if (res?.length) {
        setNoMatch(false);
        const temp = res?.map(({ item }) => {
          return item;
        });
        setPinJobs(temp);
      }
    }
  };

  return (
    <div className="">
      <GradientText
        aos="slide-left"
        text="Work at Koders"
        className="w-[90%] mx-auto sm:w-fit text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
      />
      <p
        data-aos="slide-right"
        className="mx-auto text-[0.8rem] leading-none m-1 xl:w-[60%] sm:text-[1.3rem] text-center text-main-light_white font-miligramText400"
      >
        At Koders we build softwares with new dimensions by utilizing the full
        potential of our team to bring out the best for our customers.
      </p>
      <Divider className="mt-8" />

      <div className="flex-wrap sm:flex-nowrap justify-center w-[90%] md:w-[75%] lg:w-[65%] xl:w-[50%] mt-6 xxl:mt-14 flex mx-auto gap-8 items-center sm:justify-between">
        <div className="w-full border-[1.5px] border-main-teal mx-auto rounded-lg overflow-hidden flex">
          <div className="flex items-center w-full border-r-[1.5px] border-main-teal">
            <Image src={work} alt="aero" className="ml-5" />
            <input
              type="text"
              className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramMedium"
              placeholder="Job Title"
              name="jobTitle"
              onChange={handleChange}
              // value={filterDetails?.jobTitle}
            />
          </div>
          <div
            className="w-14 h-10 bg-main-greenOpt-200 flex justify-center items-center p-4 cursor-pointer"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Image
              src={search}
              alt="aero"
              className={`${isHover ? "scale-110" : "scale-90"}`}
            />
          </div>
        </div>
        <div className="w-48 flex items-center gap-3">
          <span className="text-white font-miligramText400">
            {/* {isRemote ? "Remote" : "In Office"} */}
            Remote
          </span>
          <Toogler handleToogle={handleToogle} />
        </div>
      </div>
      <Divider className="h-8" />
      <div className="flex w-full lg:w-[90%]  xl:w-[80%] mx-auto flex-wrap gap-3 justify-center">
        {jobTypes.map((item, i) => {
          return (
            <button
              onClick={() => handleClick(item)}
              className={`border-2 border-main-teal font-miligramText400 px-6 py-2 rounded-md hover:text-black hover:bg-main-teal ${
                department === item ? "bg-main-teal text-black" : "text-white"
              } `}
              key={i}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Divider className="h-12" />
      <div className=" border-b-2 border-main-teal"></div>
    </div>
  );
};

export default LandingSection;
