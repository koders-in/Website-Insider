import React, { useState } from "react";
import Image from "next/image";

import Divider from "../../Divider";
import { aeroUp } from "../../../assets";
import GradientText from "../../GradientText";
import { useSetDataOnServer } from "../../../helper/careerHooks";

const JobAlert = () => {
  const [isHover, setIsHover] = useState(false);
  const [email, setEmail] = useState("");
  const getJobAlert = useSetDataOnServer();

  const handleClick = async () => {
    try {
      const res = await getJobAlert("job-alert", { email });
      if (res.status === 200) {
        window.alert("Successfully register!");
        setEmail("");
      } else {
        window.alert("Something is wrong");
      }
    } catch (error) {
      if (error.response.data.code === "constraint-violation") {
        window.alert("Already registered!");
      } else {
        window.alert("Something is wrong");
      }
    }
  };
  return (
    <div>
      <Divider className="mt-10" />
      <GradientText
        className="w-[90%] sm:w-fit mx-auto text-[1.6rem] sm:text-[2.6rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Get Job Alerts!"
      />
      <p className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-1/2 lg:w-[40%] mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none">
        Subscribe to our Newsletter and stay updated about the latest job
        postings.
      </p>
      <div className="w-[90%] md:w-[80%] sm:w-1/2 lg:w-1/3 border-2 border-main-teal mx-auto rounded-lg overflow-hidden flex mt-5 md:mt-7 shadow-sm shadow-main-teal xxl:mt-14">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="w-full px-4 py-1 outline-none border-none text-main-light_white placeholder:tracking-[2px] bg-transparent placeholder:text-main-light_white lett font-miligramMedium"
          placeholder="Your Email Address"
        />
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="w-14 h-10 bg-main-teal flex justify-center items-center p-4 cursor-pointer"
          onClick={handleClick}
        >
          <Image
            src={aeroUp}
            alt="aero"
            className={`${isHover ? "scale-110" : "scale-90"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default JobAlert;
