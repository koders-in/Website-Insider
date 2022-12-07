import { Formik, FormikHelpers } from "formik";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import {
  add,
  duration,
  experienceIcon,
  locationTeal,
  work,
} from "../../../assets";
import { useSetDataOnServer } from "../../../helper/careerHooks";
import { jobValidationSchema } from "../../../helper/validate";
import { sendCandidateDetails } from "../../../helper/webhook";
import Button from "../../Button";
import Divider from "../../Divider";
import GradientText from "../../GradientText";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";
import TextArea from "./TextArea";
import { PropagateLoader } from "react-spinners";

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

const customStyles = {
  content: {
    top: "10%",
    background: "#20222A",
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
    zIndex: "10",
    border: "2px solid #00A99D",
    padding: "2rem 3rem",
  },
};

interface Props {
  showModal: {
    viewDetails: boolean;
    apply: boolean;
  };
  setShowModal: (prop: any) => void;
  toogleDetailModal: () => void;
  toogleApplyModal: () => void;
  toogleThankModal: () => void;
  experience: string;
  viewDetails: any;
}

const ApplyModal = ({
  showModal,
  setShowModal,
  toogleDetailModal,
  toogleApplyModal,
  toogleThankModal,
  experience,
  viewDetails,
}: Props) => {
  const [resume, setResume] = useState<any>(null);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const sendData = useSetDataOnServer();

  const handleSubmit = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
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
        joining_preference: value?.joiningReason,
        joining_reason: value?.joiningReason,
        linkedin_url: value?.linkedIn,
        portfolio_url: value?.portfolioURL,
      });
      if (res.status === 200) {
        // window.alert("Successfully applied!");
        closeModal();
        enableBodyScroll(document);
        toogleThankModal();
      }
      setResume(null);
      setIsShowLoader(false);
      //   toogleApplyModal();
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

  const closeModal = () => {
    enableBodyScroll(document);
    setShowModal((p: any) => {
      return {
        ...p,
        apply: !p.apply,
      };
    });
  };

  const onAfterOpen = () => {
    disableBodyScroll(document);
  };

  const handleViewDetails = () => {
    toogleDetailModal();
    toogleApplyModal();
  };

  useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <Modal
      isOpen={showModal.apply}
      onAfterOpen={onAfterOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Formik
        validationSchema={jobValidationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValue}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
          <React.Fragment>
            <div className="lg:flex justify-between items-center">
              <div className="w-full lg:w-[80%]">
                <GradientText
                  className="w-fit text-[1.6rem] bg-gradient-to-r from-white to-main-teal font-miligrambold"
                  text="Fresher UI/UX Designer"
                />
                <div className="flex text-white flex-wrap gap-2">
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={locationTeal} alt="" className="mr-2 h-3" />
                    Dehradun, Uttrakhand
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={work} alt="" className="mr-2 h-3" />
                    Full Time
                  </div>
                  <div className="flex items-center justify-between text-[0.8rem]">
                    <Image src={experienceIcon} alt="" className="mr-2 h-3" />
                    Exp {experience}
                  </div>
                </div>
                <div className="text-white flex items-center text-[0.8rem] pl-[4px] sm:pl-[2px] mt-[8px] sm:mt-[2px]">
                  <Image src={duration} alt="" className="mr-2 h-3" />
                  Duration- {viewDetails?.jobs_job_listings[0]?.job?.duration}
                </div>
              </div>
              <div className="w-full  lg:w-[21%] mt-3 lg:mt-0">
                <Button
                  OnClick={handleViewDetails}
                  text="View Details"
                  className=" bg-main-greenOpt-200  font-miligramMedium w-auto text-main-lightTeal text-[0.8rem] xl:text-[1rem] py-[8px] sm:py-[10px] px-6 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                />
              </div>

              <Image
                src={add}
                alt=""
                className="lg:hidden rotate-45 absolute right-2 top-2 h-6 brightness-75"
                onClick={closeModal}
              />
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
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <InputBox
                  type="text"
                  placeholder="First Name *"
                  name="fName"
                  onBlur={handleBlur}
                  value={values.fName}
                  handleChange={handleChange}
                  errorText={errors.fName}
                />
              </div>
              <div className="w-full md:w-[50%]">
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
            </div>
            <Divider className="mt-8" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
                <InputBox
                  type="text"
                  placeholder="Email Address *"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  handleChange={handleChange}
                  errorText={errors.email}
                />
              </div>
              <div className="w-full md:w-[50%]">
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
            </div>
            <Divider className="mt-8" />
            <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-5 mt-2">
              <div className="w-full md:w-[50%]">
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
              </div>
              <div className="w-full md:w-[50%]">
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
              placeholder="Why should you be hired for this role?"
              name="hiringReason"
              onBlur={handleBlur}
              value={values.hiringReason}
              handleChange={handleChange}
              errorText={errors.hiringReason}
            />
            <Divider className="mt-8" />
            <TextArea
              placeholder="Why do you want to Work at Koders?"
              name="joiningReason"
              onBlur={handleBlur}
              value={values.joiningReason}
              handleChange={handleChange}
              errorText={errors.joiningReason}
            />
            <Divider className="mt-5" />
            <div className="text-center">
              <PropagateLoader
                color="#00A99D"
                loading={isShowLoader}
                size={20}
              />
              {isShowLoader && <Divider className="mt-10 h-16" />}
            </div>
            <Divider className="mt-5" />
            {!isShowLoader && (
              <Button
                type="submit"
                OnClick={handleSubmit}
                text="Apply"
                className="mt-10 block mx-auto bg-main-greenOpt-200  font-miligramMedium w-fit text-main-lightTeal py-[10px] px-12 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
              />
            )}
          </React.Fragment>
        )}
      </Formik>
    </Modal>
  );
};

export default ApplyModal;
