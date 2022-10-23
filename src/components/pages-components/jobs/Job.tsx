import React, { useState } from "react";
import { JobModal } from "../..";
import { locationTeal, work } from "../../../assets";
import Button from "../../Button";

interface Props {
  children: React.ReactNode;
}

const Job = ({ children }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const handleToogleModal = () => {
    setShowModal(false);
  };
  return (
    <div className="w-full border-2 rounded-xl mt-8 border-main-teal md:flex items-center px-[5%] py-[4%] md:py-[1%] bg-main-secondary">
      {showModal && (
        <JobModal handleClose={handleToogleModal}>{children}</JobModal>
      )}
      <img
        src=""
        alt=""
        className="w-12 h-12 rounded-full md:mr-[4%] mx-auto my-2 md:my-0 md:mx-0"
      />
      <div className=" md:flex justify-between items-center mx-auto w-[90%]">
        <div className="text-main-light_white w-full my-4 md:my-0 md:mr-[4%] md:w-64">
          <h1 className="text-white text-[1.2rem] text-center md:text-left">
            Fresher UI/UX Designer
          </h1>
          <div className="flex text-white mx-auto w-fit md:w-full">
            <div className="flex items-center justify-between text-[0.8rem] mr-3">
              <img src={locationTeal} alt="" className="mr-2 h-3" />
              Dehradun, Uttrakhand
            </div>
            <div className="flex items-center justify-between text-[0.8rem]">
              <img src={work} alt="" className="mr-2 h-3" />
              Full Time
            </div>
          </div>
          <p className="text-[0.8rem] text-whiteVar1  text-center md:text-left">
            Posted 2 weeks ago
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 w-fit mx-auto md:mx-0 md:w-[23rem]">
          <Button
            OnClick={() => {}}
            text="Apply"
            className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-[0.8rem] lg:text-[1rem] text-main-lightTeal py-[4px] md:py-[10px] px-8 lg:px-16 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
          />
          <Button
            OnClick={() => setShowModal(true)}
            text="View Details"
            className=" bg-main-greenOpt-200 font-miligramMedium w-fit text-[0.8rem] lg:text-[1rem] text-main-lightTeal py-[4px] md:py-[10px] px-3 md:px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Job;
