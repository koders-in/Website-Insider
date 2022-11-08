import React from "react";
import Image from "next/image";
import { HashLoader } from "react-spinners";

import Button from "../../Button";
import GradientText from "../../GradientText";
import { add, locationTeal, work } from "../../../assets";

interface Props {
  children: React.ReactNode;
  handleClose: () => void;
  handleClick: () => void;
  isButtonHide?: boolean;
  showLoader?: boolean;
}

const Modal = ({
  handleClose,
  handleClick,
  children,
  isButtonHide = false,
  showLoader = false,
}: Props) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-50 flex justify-center backdrop-blur-sm"
      onClick={(e) => {
        e.preventDefault();
        handleClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[95vw] lg:w-[60vw] relative h-fit bg-main-secondary py-7 px-6 lg:py-16 lg:px-10 border-2 border-main-teal rounded-xl mt-[12%]"
      >
        {/* ------- Loader-------- */}
        {showLoader && (
          <div className="absolute top-0 left-0 h-full w-full backdrop-blur-sm z-40 flex items-center justify-center">
            <HashLoader
              color="#00A99D"
              loading={showLoader}
              // cssOverride={override}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        <Image
          src={add}
          alt=""
          className="lg:hidden rotate-45 absolute right-2 top-2 h-6 brightness-75"
          onClick={handleClose}
        />
        {!isButtonHide && (
          <>
            <div className="lg:flex justify-between items-center">
              <div className="w-full lg:w-[80%]">
                <GradientText
                  className="w-fit text-[1.6rem] bg-gradient-to-r from-white to-main-teal font-miligrambold"
                  text="Fresher UI/UX Designer"
                />
                <div className="flex text-white">
                  <div className="flex items-center justify-between text-[0.8rem] mr-3">
                    <Image src={locationTeal} alt="" className="mr-2 h-3" />
                    Dehradun, Uttrakhand
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={work} alt="" className="mr-2 h-3" />
                    Full Time
                  </div>
                </div>
                <p className="text-[0.8rem] text-main-whiteVar1">
                  Posted 2 weeks ago
                </p>
              </div>
              <div className="w-full mt-7 lg:mt-0 lg:w-[20%]">
                <Button
                  OnClick={handleClick}
                  text="Apply"
                  className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal py-[10px] px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                />
              </div>
            </div>
            <div className="h-[2px] bg-white w-ful my-8"></div>
          </>
        )}
        {children}
        {!isButtonHide && (
          <Button
            OnClick={handleClick}
            text="Apply"
            className="mt-10 block mx-auto bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal py-[10px] px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
