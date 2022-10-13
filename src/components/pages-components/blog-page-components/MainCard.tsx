import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { blogMain, blogProfile } from "../../../assets";

const MainCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname; // to get current route

  return (
    <div className="lg:flex mt-10 gap-6">
      <div className="w-full lg:w-[60%] py-2">
        <img src={blogMain} alt="blogMain" className="w-full h-full" />
      </div>
      <div className="w-full lg:w-[40%]">
        <h1
          className="text-white text-[20px] cursor-pointer font-miligrambold"
          onClick={() => navigate(`${currentPath}/read-more`)}
        >
          Hacking Humans is easier than hacking Computers
        </h1>
        <span className="text-main-teal text-[13px] mt-6 sm:font-miligramMedium font-miligramLight">
          Cyber Security &nbsp;&nbsp; Ethical Hacking
        </span>
        <p className="text-main-light_white text-[15px] mt-6 sm:font-miligramMedium font-miligramLight">
          Being a hacker isn't as easy as it may sound. And you should beware of
          snake oil salesmen who guarantee you to make the next 'Kevin Mitnick'
          for a few bucks. Raiding area 51 would be a better plan, just in case.
          After jeopardizing NASA and the US Military, he was sentenced to
          prison for 70...
        </p>
        <button className="border-b-2 border-main-teal text-main-teal cursor-pointer text-[13px] sm:font-miligramMedium font-miligramLight">
          Read More
        </button>
        <div className="flex mt-14 justify-between items-center">
          <span className=" text-white block sm:font-miligramMedium font-miligramLight">
            SEP 6, 2022
          </span>
          <img src={blogProfile} alt="profile" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
