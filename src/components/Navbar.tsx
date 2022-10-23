import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { discordSvg, discordWhite, logo } from "../assets";
import AnimatedBorder from "./AnimatedBorder";
import Button from "./Button";

const { HashLink } = require("react-router-hash-link");

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function navToHome() {
    navigate("/");
  }
  return (
    <div className="z-50 flex h-[9vh] w-full bg-main-black-700 px-5 justify-between items-center md:px-[4.5rem] text-white py-6 fixed top-0 backdrop-blur-md">
      <div className="w-fit z-10">
        <img
          src={logo}
          alt="logo"
          className="h-4 xsm:h-8 sm:h-9 cursor-pointer"
          onClick={navToHome}
        />
      </div>
      {location?.pathname !== "/" && (
        <div className="hidden justify-center items-center w-full absolute left-0 top-0 h-full sm:hidden md:hidden lg:flex">
          <button className="group relative w-fit font-miligramMedium h-fit text-main-white-700 hover:text-white text-[16.5px]">
            <HashLink to="/#pricingSec">
              Pricing
              <AnimatedBorder />
            </HashLink>
          </button>
          <Button
            OnClick={() => {
              navigate("/blog");
            }}
            text="Blog"
            isBorder={true}
            className="lg:mx-11 md:mx-5 font-miligramMedium h-fit text-main-white-700 hover:text-white text-[16.5px]"
          />
          <Button
            OnClick={() => {
              window.open("https://portfolio.koders.in/", "_blank");
            }}
            text="Portfolio"
            isBorder={true}
            className="font-miligramMedium h-fit text-main-white-700 hover:text-white text-[16.5px]"
          />
        </div>
      )}
      <div className="flex justify-end items-center w-fit z-10">
        <Button
          OnClick={() => {
            window.open("https://dsc.gg/koders", "_blank");
          }}
          logo={discordSvg}
          hoverLogo={discordWhite}
          text="Join Discord"
          logoStyle="h-5 xxl:h-[19px]"
          className="hidden sm:flex text-[0.8rem] xxl:text-[1rem] font-miligramMedium mr-6 border-[1px] bg-main-blueOpt-200 border-main-blueOpt-1000 text-main-blueOpt-1000 px-5 py-[0.55rem]  rounded-lg hover:bg-main-blueOpt-1000 hover:text-white"
        />
        <Button
          OnClick={() => {
            navigate("start-project");
          }}
          text="Get Started"
          className="font-miligramMedium text-[0.8rem] xxl:text-[1rem] bg-main-greenOpt-200 border-[1px] border-main-lightTeal text-main-lightTeal px-4 py-[0.4rem] sm:py-[0.55rem] sm:px-8 rounded-lg hover:bg-main-lightTeal hover:text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
