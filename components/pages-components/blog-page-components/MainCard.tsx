import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { blogMain, blogProfile } from "../../../assets";
import Tag from "../../Tag";

const MainCard = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  const currentPath = router?.pathname; // to get current route

  return (
    <div className="lg:flex mt-16 gap-9">
      <div className="w-full lg:w-[68%] py-2">
        <Image src={blogMain} alt="blogMain" className="w-full h-full" />
      </div>
      <div className="w-full lg:w-[32%] mt-2 sm:mt-0 relative pb-14 lg:pb-0">
        <h1 className="text-white text-[1.4rem] leading-[1.4rem] mt-2  cursor-pointer font-miligrambold">
          Hacking Humans is easier than hacking Computers
        </h1>
        <div className="flex items-center justify-start gap-3 mt-5">
          <Tag className="" text="Ethical Hacking" />
          <Tag className="" text="Cyber Security" />
        </div>
        <p className="text-main-light_white text-[1rem] mt-5 font-miligramTextBook">
          Being a hacker isn't as easy as it may sound. And you should beware
          <span className="hidden xl:visible">
            snake oil salesmen who guarantee you to make the next 'Kevin
            Mitnick' for a few bucks. Raiding area 51 would be a better plan,
            just in case. After jeopardizing NASA and the US Military, he was
            sentenced to snake oil salesmen who guarantee you to make the next
            'Kevin Mitnick'
          </span>
          <br />
          for a few bucks. Raiding area 51 would be a better plan, just in case.
          After jeopardizing NASA and the US Military, he was sentenced to
          prison for 70...
          <button
            onClick={() => handleNavigate(`${currentPath}/ReadMoreBlog`)}
            className="border-b-[1px] text-[1rem] border-transparent hover:border-main-lightTeal font-miligramTextBook hover:font-miligramTextMedium text-main-lightTeal cursor-pointer leading-[1rem]"
          >
            Read More
          </button>
        </p>

        <div className="flex justify-between items-center absolute bottom-0 w-full">
          <span className=" text-white block font-miligramMedium">
            SEP 6, 2022
          </span>
          <Image src={blogProfile} alt="profile" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
