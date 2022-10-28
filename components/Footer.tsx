import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  discord,
  github,
  linkedin,
  location,
  logo,
  phone,
  twitter,
} from "../assets";
import { footerButtons } from "../helper/constant";
import { useRedirectToPricing } from "../helper/hook";
import AnimatedBorder from "./AnimatedBorder";

const Footer = () => {
  const [onHover, setOnHover] = useState(false);
  const redirectToPricing = useRedirectToPricing();
  const [hoverOnMob, setHoverOnMob] = useState(false);

  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
    redirectToPricing();
  });

  return (
    <>
      <div className="sm:flex justify-center pl-4 xsm:px-6 sm:pl-20 py-10 bg-main-secondary">
        <div className="w-full sm:w-1/4  font-miligramText400">
          <Image
            src={logo}
            alt="logo"
            className="w-[12.2rem] cursor-pointer ml-2"
            onClick={() => handleNavigate("/")}
          />
          <div className="flex items-center my-3 gap-2">
            {[linkedin, github, twitter, discord].map((item, i) => (
              <Image
                src={item}
                alt={item}
                key={i}
                className="h-7 cursor-pointer hover:transition-all transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              />
            ))}
          </div>
          <div className="flex justify-start items-start  mt-4 text-[0.9rem] sm:text-[1rem] ml-2">
            <Image
              src={location}
              alt="location"
              className={
                onHover
                  ? "mt-[11px] h-4 scale-125 mr-6 brightness-200"
                  : "mt-[11px] h-4 scale-125 mr-6 brightness-50"
              }
            />
            <div
              className="text-main-light_white m-0 cursor-pointer transition-all duration-300 group"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() =>
                window.open("https://goo.gl/maps/H91YctE1VjYX7p9J9", "_blank")
              }
            >
              <p className="mt-1 w-fit group-hover:text-white relative inline sm:block">
                111, New Mohanpur Colony,
                <AnimatedBorder />
              </p>
              <p className="mt-1 w-fit group-hover:text-white relative inline sm:block">
                Prem Nagar, Dehradun,
                <AnimatedBorder />
              </p>
              <p className="mt-1 w-fit group-hover:text-white relative inline sm:block">
                Uttarakhand - 248007
                <AnimatedBorder />
              </p>
            </div>
          </div>
          <div className="flex justify-start  mt-3 ml-2">
            <Image
              src={phone}
              alt="phone"
              className={`mt-[5px] mr-4 ${
                hoverOnMob ? "brightness-200" : "brightness-50 "
              }`}
            />
            <a
              onMouseEnter={() => setHoverOnMob(true)}
              onMouseLeave={() => setHoverOnMob(false)}
              href="tel:01353504103"
              className={`group relative text-main-light_white m-0 ml-1 text-[0.9rem] sm:text-[1rem] mt-[4px] hover:text-white`}
            >
              0135-3504103
              <AnimatedBorder />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-full sm:w-3/4 sm:pl-[5%] lg:pl-[15%]">
          {footerButtons.map((item, i) => {
            return (
              <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0" key={i}>
                <p className="text-white text-[1.1rem] sm:text-[1.4rem] font-miligrambold">
                  {item.title}
                </p>
                {item.buttons.map((item, i) => (
                  <p
                    id={item.title}
                    key={i}
                    className="relative group text-[0.9rem] sm:text-[1.2rem] text-main-light_white mt-3 cursor-pointer font-miligramText400  hover:text-white w-fit"
                    onClick={() => {
                      if (item.title === "Pricing") {
                        // redirectToPricing();
                        return;
                      }
                      if (item.target) window.open(item?.route, "_blank");
                      else {
                        handleNavigate(item.route);
                      }
                    }}
                  >
                    {item.title === "Pricing" ? "Pricing" : item.title}
                    <AnimatedBorder />
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-5 text-main-light_white text-[0.85rem] sm:text-[1.2rem] text-center font-miligramMedium">
        Copyright ©2022 | Koders. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
