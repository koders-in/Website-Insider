import React, { useState } from "react";
import Image from "next/image";
import { Formik, FormikHelpers } from "formik";

import Button from "../../Button";
import { JobModal, GradientText } from "../..";
import { Divider, InputBox } from "../../index";
import { locationTeal, work } from "../../../assets";
import { jobValidationSchema } from "../../../helper/validate";
import { sendCandidateDetails } from "../../../helper/webhook";
import { ObjectOfJob } from "../../../helper/constant";
import SelectBox from "../../SelectBox";
import TextArea from "./TextArea";
import {
  useFetchDataFromServer,
  useSetDataOnServer,
} from "../../../helper/careerHooks";

interface initialState {
  email: string;
  mobile: string;
  fName: string;
  lName: string;
  joiningIn: string;
  linkedIn?: string;
  portfolioURL?: string;
  hiringReason?: string;
  joiningReason?: string;
}

const initialValue: initialState = {
  email: "",
  fName: "",
  lName: "",
  mobile: "",
  joiningIn: "",
  linkedIn: "",
  portfolioURL: "",
  hiringReason: "",
  joiningReason: "",
};

const Job = ({ experience, location, title, type, id }: ObjectOfJob) => {
  const [resume, setResume] = useState<any>(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [showModal, setShowModal] = useState({
    viewDetails: false,
    apply: false,
  });
  const [viewDetails, setViewDetails] = useState<any>(null);
  const fetchData = useFetchDataFromServer();
  const sendData = useSetDataOnServer();

  const toogleDetailModal = async () => {
    setShowModal((p) => {
      return {
        ...p,
        viewDetails: !p.viewDetails,
      };
    });
    if (viewDetails === null || viewDetails === undefined)
      fetchData(`open-job-listings/${id}`, setViewDetails);
  };
  const toogleApplyModal = () => {
    if (isShowLoader) return;
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
    // return;
    if (resume == null) {
      window.alert("Please upload resume");
      return;
    }
    setIsShowLoader(true);

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
      const res = await sendData("apply", {
        first_name: value?.fName,
        last_name: value?.lName,
        email: value?.email,
        phone_number: value?.mobile,
        resume: result,
        job_applied: 1,
        hiring_reason: value?.hiringReason,
        // joining_preference: value?.joiningReason,
        joining_reason: value?.joiningReason,
        linkedin_url: value?.linkedIn,
        portfolio_url: value?.portfolioURL,
      });
      if (res.status === 200) {
        window.alert("Successfully applied!");
      }
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
    <div className="px-7 py-4 xl:w-[90%] mx-auto border-2 rounded-xl mt-8 border-main-teal bg-main-secondary flex flex-col lg:flex-row gap-4 xl:gap-0 justify-between items-center">
      <div className="text-main-light_white w-[100%] lg:w-[60%]">
        <h1 className="text-white text-[1.2rem] text-center lg:text-left font-miligrambold">
          {title}
        </h1>
        <div className="flex mt-1 sm:mt-0 flex-col sm:flex-row gap-1 sm:gap-4 text-white mx-auto w-fit lg:w-full font-miligramText400">
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={locationTeal} alt="" className="mr-1 h-3" />
            {location}
          </div>
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={work} alt="" className="mr-1 h-3" />
            {type}
          </div>
          <div className="flex items-center justify-start sm:justify-between text-[0.85rem]">
            <Image src={work} alt="" className="mr-1 h-3" />
            {experience}
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end w-[100%] lg:w-[40%] gap-4">
        <Button
          OnClick={toogleDetailModal}
          text="View Details"
          className=" bg-main-greenOpt-200 font-miligramMedium w-auto text-[0.8rem] lg:text-[0.9rem] text-main-lightTeal py-[4px] md:py-[10px] px-2 xxl:px-3 lg:px-7 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Button
          OnClick={toogleApplyModal}
          text="Apply"
          className=" bg-main-greenOpt-200  font-miligramMedium w-fit text-[0.8rem] lg:text-[0.9rem] text-main-lightTeal py-[4px] md:py-[10px] px-2 xxl:px-8 lg:px-14 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
      </div>
      {showModal.viewDetails && (
        <JobModal
          handleClick={navigateDetailsToApply}
          handleClose={toogleDetailModal}
          {...{
            location,
            type,
            experience: "Exp " + experience,
            duration:
              "Duration- " + viewDetails?.job_listings[0]?.job?.duration,
            title,
            benefits: viewDetails?.job_listings[0]?.job?.perks_and_benefits,
            responsibility:
              viewDetails?.job_listings[0]?.job?.roles_responsibility,
            skills: viewDetails?.job_listings[0]?.job?.skills,
          }}
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
            {viewDetails?.job_listings[0]?.job?.roles_responsibility?.map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
          <h5 className="text-white text-[1.1rem] mt-4 mb-3">
            Skills Required
          </h5>
          <div className="text-white text-[0.85rem] mt-3">
            {viewDetails?.job_listings[0]?.job?.skills.toString()}
          </div>
          <h5 className="text-white text-[1.1rem] mt-4 mb-3">
            Perks and Benefits
          </h5>
          <ul className="list-decimal ml-4 text-white text-[0.85rem]">
            {viewDetails?.job_listings[0]?.job?.perks_and_benefits?.map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
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
                <Divider className="mt-8" />
                <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
                  <SelectBox
                    value={values.joiningIn || ""}
                    placeholder="When can you start working? *"
                    list={[
                      "I can join immediately (within 15 days).",
                      "I can join after a month.",
                      "I can join after three months.",
                    ]}
                    name="joiningIn"
                    handleSelect={(obj: any) => {
                      const { name, value } = obj;
                      handleChange("joiningIn")(value);
                    }}
                    errorText={errors.joiningIn}
                  />
                  <InputBox
                    type="text"
                    placeholder="LinkedIn URL"
                    name="linkedIn"
                    onBlur={handleBlur}
                    value={values.linkedIn}
                    handleChange={handleChange}
                    errorText={errors.linkedIn}
                  />
                </div>
                <Divider className="mt-8" />
                <div>
                  <InputBox
                    type="text"
                    placeholder="Website URL/Portfolio URL"
                    name="portfolioURL"
                    onBlur={handleBlur}
                    value={values.portfolioURL}
                    handleChange={handleChange}
                    errorText={errors.portfolioURL}
                  />
                </div>
                <Divider className="mt-8" />
                <TextArea
                  placeholder=""
                  name="hiringReason"
                  onBlur={handleBlur}
                  value={values.hiringReason}
                  handleChange={handleChange}
                  errorText={errors.hiringReason}
                  title="Why should you be hired for this role?"
                />
                <Divider className="mt-8" />
                <TextArea
                  placeholder=""
                  name="joiningReason"
                  onBlur={handleBlur}
                  value={values.joiningReason}
                  handleChange={handleChange}
                  errorText={errors.joiningReason}
                  title="Why do you want to Work at Koders?"
                />
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
    </div>
  );
};

export default Job;
