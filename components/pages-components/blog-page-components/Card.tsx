import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { blogCard, blogProfile } from "../../../assets";
import Divider from "../../Divider";
import Tag from "../../Tag";

const Card = ({ className }: { className?: string }) => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  const currentPath = router?.pathname; // to get current route
  return (
    <div
      className={`relative ${className} flex flex-wrap msm:flex-nowrap gap-3 sm:block md:w-1/3`}
    >
      <div
        onClick={() => handleNavigate(`${currentPath}/ReadMoreBlog`)}
        className="absolute top-0 left-0 w-full h-full bg-transparent z-50"
      ></div>
      <Image
        src={blogCard}
        alt="card"
        className="w-full msm:w-[25%] sm:w-full"
      />
      <div className="w-full msm:w-[75%] sm:w-full">
        <span className=" text-main-light_white block sm:hidden  font-miligramMedium text-[11px]">
          SEP 6, 2022
        </span>
        <Divider className="hidden sm:block mt-6" />
        <h1 className="text-white font-miligrambold text-[12px] sm:text-[1.3rem] leading-none">
          What to know before taking your business online?
        </h1>
        <div className="flex items-center justify-start gap-3 my-2 sm:my-5 md:block lg:flex">
          <Tag className="md:mb-2 lg:mb-0 md:w-fit" text="Ethical Hacking" />
          <Tag className="md:w-fit" text="Cyber Security" />
        </div>
        <div className="hidden sm:block">
          <p className="text-main-light_white sm:text-[1rem] font-miligramText400 text-justify">
            Hello Mighty Creator, I am sure you have a great idea about taking
            your business online. Maybe you don’t know where to start? But you
            need an online presence for your business to increase marketing and
            create a loyal customer base.A website consists of web pages which
            are easy to share and most browsers have a...
            <button className="border-b-2 border-transparent hover:border-main-lightTeal text-main-lightTeal cursor-pointer text-[1rem] leading-none font-miligramTextBook hover:font-miligramTextMedium">
              Read More
            </button>
          </p>
          <div className="flex mt-14 justify-between items-center">
            <span className=" text-white block  font-miligramMedium">
              SEP 6, 2022
            </span>
            <Image src={blogProfile} alt="profile" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
