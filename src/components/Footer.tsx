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
  const navigate = useNavigate();
  function navToHome() {
    navigate("/");
  }
  return (
    <>
      <div className="sm:flex justify-center pl-4 xsm:px-6 sm:px-20 py-10 bg-main-secondary">
        <div className="w-full sm:w-1/4  font-miligramLight">
          <img
            src={logo}
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={navToHome}
          />
          <div className="flex items-center my-3">
            {[linkedin, github, twitter, discord].map((item, i) => (
              <img
                src={item}
                alt={item}
                key={i}
                className="h-7 mr-2 cursor-pointer hover:transition-all transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
              />
            ))}
          </div>
          <div className="flex justify-start items-start  mt-4 text-[15px]">
            <img
              src={location}
              alt="location"
              className={
                onHover
                  ? "mt-[8px] mr-2 brightness-200"
                  : "mt-[8px] mr-2 brightness-75"
              }
            />
            <p
              className="text-main-light_white m-0 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
            >
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                House No 111, New Mohanpur
              </p>
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                Colony, Prem Nagar, Dehradun,
              </p>
              <p
                className={
                  onHover
                    ? "border-b-2 border-main-teal mt-1 w-fit"
                    : "mt-1 w-fit border-b-2 border-transparent"
                }
              >
                Uttarakhand - 248007
              </p>
            </p>
          </div>
          <div className="flex justify-start items-start  mt-3">
            <img src={phone} alt="phone" className="mt-[5px] mr-2" />
            <p className="text-main-light_white m-0 text-[15px]">
              0135-3504103
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-full sm:w-3/4 sm:pl-20">
          {footerButtons.map((item, i) => {
            return (
              <div className="w-1/2 sm:w-1/4 mt-6 sm:mt-0" key={i}>
                <p className="text-white text-[16px] font-miligramMedium">
                  {item.title}
                </p>
                {item.buttons.map((item, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-main-light_white mt-3 cursor-pointer font-miligramLight  hover:text-white w-fit border-b-2 border-transparent hover:border-main-teal"
                    onClick={() => navigate(item.route)}
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-5 text-main-light_white text-center font-miligramMedium">
        Copyright ©2022 | Koders. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
