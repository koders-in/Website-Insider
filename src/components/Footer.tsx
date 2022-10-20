import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Footer = () => {
  const [onHover, setOnHover] = useState(false);
  const [hoverOnMob, setHoverOnMob] = useState(false);

  const navigate = useNavigate();
  function navToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="sm:flex justify-center pl-4 xsm:px-6 sm:pl-20 py-10 bg-main-secondary">
        <div className="w-full sm:w-1/4  font-miligramText400">
          <img
            src={logo}
            alt="logo"
            className="w-[12.2rem] cursor-pointer"
            onClick={navToHome}
          />
          <div className="flex items-center my-3 gap-4">
            {[linkedin, github, twitter, discord].map((item, i) => (
              <img
                src={item}
                alt={item}
                key={i}
                className="h-7 cursor-pointer hover:transition-all transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              />
            ))}
          </div>
          <div className="flex justify-start items-start  mt-4 text-[1rem]">
            <img
              src={location}
              alt="location"
              className={
                onHover
                  ? "mt-[11px] h-4 scale-125 mr-6 brightness-200"
                  : "mt-[11px] h-4 scale-125 mr-6 brightness-50"
              }
            />
            <p
              className="text-main-light_white m-0 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
              onClick={() => window.open("https://goo.gl/maps/H91YctE1VjYX7p9J9", '_blank')}
            >
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit text-white"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                111, New Mohanpur Colony,
              </p>
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit text-white"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                Prem Nagar, Dehradun,
              </p>
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit text-white"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                Uttarakhand - 248007
              </p>
            </p>
          </div>
          <div className="flex justify-start  mt-3">
            <img src={phone} alt="phone" className={`mt-[5px] mr-4 ${hoverOnMob ? "brightness-200" : "brightness-50 "}`} />
            <a
              onMouseEnter={() => setHoverOnMob(true)}
              onMouseLeave={() => setHoverOnMob(false)}
              href="tel:01353504103" className={`text-main-light_white m-0 text-[1rem] mt-[4px] border-b-2 border-transparent hover:text-white hover:border-main-teal`}>
              0135-3504103
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-full sm:w-3/4 sm:pl-[15%]">
          {footerButtons.map((item, i) => {
            return (
              <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0" key={i}>
                <p className="text-white text-[1.4rem] font-miligrambold">
                  {item.title}
                </p>
                {item.buttons.map((item, i) => (
                  <p
                    key={i}
                    className="text-[1.2rem] text-main-light_white mt-3 cursor-pointer font-miligramText400  hover:text-white w-fit border-b-2 border-transparent hover:border-main-teal"
                    onClick={() => {
                      if (item.target)  window.open(item?.route,'_blank')
                      else { navigate(item.route)}
                    }}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-5 text-main-light_white text-[1.2rem] text-center font-miligramMedium">
        Copyright ©2022 | Koders. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
