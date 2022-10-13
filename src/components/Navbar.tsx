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
    <div className="z-50 flex w-full bg-main-black-700 px-8 justify-between align-middle md:px-10 text-white py-6 fixed top-0 backdrop-blur-md">
      <div className="w-fit">
        <img
          src={logo}
          alt="logo"
          className="h-6 xsm:h-8 sm:h-10 cursor-pointer"
          onClick={navToHome}
        />
      </div>
      {location?.pathname !== "/" && (
        <div className="hidden justify-center align-middle w-[90%] absolute left-0 top-[42%] sm:hidden md:hidden lg:flex">
          <Button
            OnClick={() => {}}
            text="Pricing"
            className="font-miligramMedium"
          />
          <Button
            OnClick={() => {
              navigate("/blog");
            }}
            text="Blog"
            className="lg:mx-11 md:mx-5 font-miligramMedium"
          />
          <Button
            OnClick={() => {}}
            text="Portfolio"
            className="font-miligramMedium"
          />
        </div>
      )}
      <div className="flex justify-end align-middle w-fit">
        <Button
          OnClick={() => {}}
          logo={discordSvg}
          hoverLogo={discordWhite}
          text="Join Discord"
          className="hidden sm:flex font-miligramMedium mr-6 border-2 bg-main-blueOpt-200 border-main-blueOpt-1000 text-main-blueOpt-1000 px-5  rounded-lg hover:bg-main-blueOpt-1000 hover:text-white"
        />
        <Button
          OnClick={() => {
            navigate("start-project");
          }}
          text="Get Started"
          className="font-miligramMedium bg-main-greenOpt-200 border-2 border-main-greenOpt-1000 text-main-greenOpt-1000 px-3 sm:px-10 rounded-lg hover:bg-main-greenOpt-1000 hover:text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
