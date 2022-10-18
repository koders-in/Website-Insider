import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { discordSvg, discordWhite, logo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  function navToHome() {
    navigate("/");
  }
  return (
    <div className="z-50 flex h-[9.5vh] w-full bg-main-black-700 px-8 justify-between items-center md:px-16 text-white py-6 fixed top-0 backdrop-blur-md">
      <div className="w-fit z-10">
        <img
          src={logo}
          alt="logo"
          className="h-4 xsm:h-8 sm:h-8 cursor-pointer"
          onClick={navToHome}
        />
      </div>
      {location?.pathname !== "/" && (
        <div className="hidden justify-center align-middle w-full absolute left-0 top-[42%] sm:hidden md:hidden lg:flex">
          <Button
            OnClick={() => {}}
            text="Pricing"
            className="font-miligramMedium text-main-light_white hover:text-white"
          />
          <Button
            OnClick={() => {
              navigate("/blog");
            }}
            text="Blog"
            className="lg:mx-11 md:mx-5 font-miligramMedium text-main-light_white hover:text-white"
          />
          <Button
            OnClick={() => {}}
            text="Portfolio"
            className="font-miligramMedium text-main-light_white hover:text-white"
          />
        </div>
      )}
      <div className="flex justify-end items-center w-fit z-10">
        <Button
          OnClick={() => {}}
          logo={discordSvg}
          hoverLogo={discordWhite}
          text="Join Discord"
          logoStyle="h-[13px]"
          className="hidden sm:flex font-miligramLight mr-6 border-[1px] bg-main-blueOpt-200 border-main-blueOpt-1000 text-main-blueOpt-1000 px-4 py-[7px]  rounded-lg hover:bg-main-blueOpt-1000 hover:text-white"
        />
        <Button
          OnClick={() => {
            navigate("start-project");
          }}
          text="Get Started"
          className="font-miligramLight bg-main-greenOpt-200 border-[1px] border-main-greenOpt-1000 text-main-greenOpt-1000 px-5 py-[7px] sm:px-6 rounded-lg hover:bg-main-greenOpt-1000 hover:text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
