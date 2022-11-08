import React, { useState } from "react";
import Image from "next/image";
import { Formik, FormikHelpers } from "formik";

import Button from "../../Button";
import { JobModal, GradientText } from "../..";
import { Divider, InputBox } from "../../index";
import { locationTeal, work } from "../../../assets";
import { jobValidationSchema } from "../../../helper/validate";
import { sendCandidateDetails } from "../../../helper/webhook";

interface initialState {
  email: string;
  mobile: string;
  fName: string;
  lName: string;
}

const initialValue: initialState = {
  email: "",
  mobile: "",
  fName: "",
  lName: "",
};

const Job = () => {
  const [resume, setResume] = useState<any>(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [showModal, setShowModal] = useState({
    viewDetails: false,
    apply: false,
  });
  const toogleDetailModal = () => {
    setShowModal((p) => {
      return {
        ...p,
        viewDetails: !p.viewDetails,
      };
    });
  };
  const toogleApplyModal = () => {
    setShowModal((p) => {
      return {
        ...p,
        apply: !p.apply,
      };
    });
  };

  const navigateDetailsToApply = () => {
    toogleDetailModal();
    toogleApplyModal();
  };

  const handleSubmit = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    if (resume == null) {
      window.alert("Please upload resume");
      return;
    }
    setIsShowLoader(true);
    console.log(value, resume);

    const formdata = new FormData();
    formdata.append("file", resume);

    const requestOptions: any = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://localhost:3000/api/",
        requestOptions
      );
      const data = await response.text();
      const { result } = JSON.parse(data);
      await sendCandidateDetails({
        ...value,
        downloadLink: result,
      });
      setResume(null);
      setIsShowLoader(false);
      toogleApplyModal();
    } catch (error: any) {
      setIsShowLoader(false);
      console.warn(error.message);
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = e;
    setResume(files[0]);
  };

  return (
    <div className="w-full border-2 rounded-xl mt-8 border-main-teal md:flex items-center px-[5%] py-[4%] md:py-[1%] bg-main-secondary">
      {showModal.viewDetails && (
        <JobModal
          handleClick={navigateDetailsToApply}
          handleClose={toogleDetailModal}
        >
          <h5 className="text-white text-[1.1rem]">About the Company</h5>
          <p className="text-white text-[0.85rem] mt-3">
            Koders isn't your normal software development firm. Koders provides
            a platform where people can engage themselves in various
            tech-related activities, be it keeping themselves updated with the
            latest technology trends, learning a new topic, or maybe teaching
            one. This is a family of driven enthusiasts where people from
            various fields come along to contribute their part and help build up
            the family. We aren't making just customer relations here, we're
            building a family of technological cognizance.
          </p>
          <h5 className="text-white text-[1.1rem] mt-4 mb-3">
            Role and Responsibility
          </h5>
          <p className="text-white text-[0.85rem] mt-3">
            Selected intern's day-to-day responsibilities include:
          </p>
          <ul className="list-decimal ml-4 text-white text-[0.85rem]">
            <li>
              Create design screens on Figma/any other design tool for products
              (primarily web and mobile)
            </li>
            <li> Help in design modification of existing products</li>
            <li>Design wireframes and conduct user research</li>
            <li>Create effective prototypes</li>
            <li>
              Engage in creative thinking, conceptualization, and designing
            </li>
            <li>
              Design marketing collateral like social media graphics, catalogs,
              brochures, posters, advertisements, presentations, e-mailers, etc.
            </li>
            <li>
              Deliver high-quality and professional output within deadlines
            </li>
          </ul>
          <h5 className="text-white text-[1.1rem] mt-4 mb-3">
            Role and Responsibility
          </h5>
          <p className="text-white text-[0.85rem] mt-3">
            Figma, Adobe XD, Illustrator, Prototyping, Wireframing.
          </p>
          <h5 className="text-white text-[1.1rem] mt-4 mb-3">
            Perks and Benefits
          </h5>
          <ul className="list-decimal ml-4 text-white text-[0.85rem]">
            <li>Certificate on successful completion of internship.</li>
            <li> Stipend: ₹15,000 lump-sum + performance-based incentives.</li>
            <li>Letter of Recommendation on exceptional performance.</li>
            <li>
              Apart from the fixed base stipend, you will be awarded an
              additional stipend based on your performance up to ₹32,500.
            </li>
            <li>
              You will be awarded a full-time opportunity at Koders after your
              tenure if your performance meets or exceeds expectations.
            </li>
          </ul>
        </JobModal>
      )}

      {showModal.apply && (
        <JobModal
          isButtonHide={true}
          handleClick={() => {}}
          handleClose={toogleApplyModal}
          showLoader={isShowLoader}
        >
          <Formik
            validationSchema={jobValidationSchema}
            onSubmit={handleSubmit}
            initialValues={initialValue}
          >
            {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
              <React.Fragment>
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
                      OnClick={handleSubmit}
                      text="Apply"
                      className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal py-[10px] px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                    />
                  </div>
                </div>
                <div className="h-[2px] bg-white w-ful my-8"></div>
                <div className="p-8 border-dashed  border-2 border-main-teal rounded-xl relative">
                  <input
                    type="file"
                    accept="*.pdf"
                    name="resume"
                    onChange={handleResumeChange}
                    className="absolute w-full h-full opacity-0"
                  />
                  <p className="text-main-teal text-[1rem] text-center">
                    {resume?.name ? resume?.name : "Upload Resume"}
                  </p>
                  <p className="text-main-whiteVar1 text-[0.8rem] text-center">
                    Drop resume here or click to upload
                  </p>
                </div>
                <Divider className="mt-10" />
                <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
                  <InputBox
                    type="text"
                    placeholder="First Name *"
                    name="fName"
                    onBlur={handleBlur}
                    value={values.fName}
                    handleChange={handleChange}
                    errorText={errors.fName}
                  />
                  <InputBox
                    type="text"
                    placeholder="Last Name *"
                    name="lName"
                    onBlur={handleBlur}
                    value={values.lName}
                    handleChange={handleChange}
                    errorText={errors.lName}
                  />
                </div>
                <Divider className="mt-8" />
                <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
                  <InputBox
                    type="text"
                    placeholder="Email Address *"
                    name="email"
                    onBlur={handleBlur}
                    value={values.email}
                    handleChange={handleChange}
                    errorText={errors.email}
                  />
                  <InputBox
                    type="text"
                    placeholder="Mobile *"
                    name="mobile"
                    onBlur={handleBlur}
                    value={values.mobile}
                    handleChange={handleChange}
                    errorText={errors.mobile}
                  />
                </div>
                <Divider className="mt-10" />
                <Button
                  type="submit"
                  OnClick={handleSubmit}
                  text="Apply"
                  className="mt-10 block mx-auto bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal py-[10px] px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                />
              </React.Fragment>
            )}
          </Formik>
        </JobModal>
      )}
      <Image
        src=""
        alt=""
        className="w-12 h-12 rounded-full md:mr-[4%] mx-auto my-2 md:my-0 md:mx-0"
      />
      <div className=" md:flex justify-between items-center mx-auto w-[90%]">
        <div className="text-main-light_white w-full my-4 md:my-0 md:mr-[4%]">
          <h1 className="text-white text-[1.2rem] text-center md:text-left font-miligrambold">
            Fresher UI/UX Designer
          </h1>
          <div className="flex text-white mx-auto w-fit md:w-full font-miligramText400">
            <div className="flex items-center justify-between text-[0.85rem] mr-3">
              <Image src={locationTeal} alt="" className="mr-2 h-3" />
              Dehradun, Uttrakhand
            </div>
            <div className="flex items-center justify-between text-[0.85rem]">
              <Image src={work} alt="" className="mr-2 h-3" />
              Full Time
            </div>
          </div>
          <p className="text-[0.7rem] text-whiteVar1  text-center md:text-left  font-miligramText400">
            Posted 2 weeks ago
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 w-fit mx-auto md:mx-0 md:w-[40rem]">
          <Button
            OnClick={toogleApplyModal}
            text="Apply"
            className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-[0.8rem] lg:text-[0.9rem] text-main-lightTeal py-[4px] md:py-[10px] px-8 lg:px-14 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
          />
          <Button
            OnClick={toogleDetailModal}
            text="View Details"
            className=" bg-main-greenOpt-200 font-miligramMedium w-fit text-[0.8rem] lg:text-[0.9rem] text-main-lightTeal py-[4px] md:py-[10px] px-3 lg:px-7 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Job;
