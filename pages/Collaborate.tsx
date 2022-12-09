import { Formik, FormikHelpers } from "formik";
import Head from "next/head";
import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Footer,
  GradientText,
  InputBox,
  Navbar,
  SelectBox,
} from "../components";
import TextArea from "../components/pages-components/jobs/TextArea";
import { useSetDataOnServer } from "../helper/careerHooks";
import { collabrationPageSchima } from "../helper/validate";

interface initialState {
  name: string;
  email: string;
  mobile: string;
  company: string;
  companySize: string;
  location: string;
  websiteURL: string;
  jobTitle: string;
  questionOne: string;
  questionTwo: string;
  hearAboutUS: string;
}

const initialValues: initialState = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  companySize: "",
  location: "",
  websiteURL: "",
  jobTitle: "",
  questionOne: "",
  questionTwo: "",
  hearAboutUS: "",
};

const Collabrate = () => {
  const sendData = useSetDataOnServer();

  const handleSubmitForm = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    // -----------send data to server------------
    try {
      const res = await sendData("collaboration", {
        email: value.email,
        phone_number: value.mobile,
        name: value.name,
        company_url: value.websiteURL,
        company_size: value.companySize,
        company_name: value.company,
        company_location: value.location,
        collaborator_job_role: value.jobTitle,
        collaboration_seeks: value.questionOne,
        collaboration_brings: value.questionTwo,
      });
      if (res.status === 200) {
        window.alert("Your response has been recorded.");
      } else {
        window.alert("Unable to record your response. Try again later.");
      }
    } catch (error) {
      window.alert("Unable to record your response. Try again later.");
    }
    helper.resetForm();
  };

  useEffect(() => {
    const elm = document.getElementById("cbname");
    elm.focus();
  });

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Collaborate</title>
      </Head>
      <Navbar />
      <div className="pt-28 w-[95%] sm:w-[90%] mx-auto">
        <Divider className="mt-9" />
        <GradientText
          aos="slide-left"
          className="w-[90%] leading-none mb-3 md:mb-0 md:leading-normal mx-auto sm:w-fit text-[2rem] sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Collaborate with us"
        />
        <p
          data-aos="slide-right"
          className="text-[0.8rem] sm:text-[1.3rem] leading-none w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto text-center text-main-light_white pb-5 mt-2 font-miligramText400"
        >
          Dummy The interest of developing and creating apps for fun drove
          towards a path of Dummy exploring new Dummy opportunities.
        </p>
        <Divider className="h-8" />
      </div>
      <div className="flex w-[80%] mx-auto">
        <Formik
          validationSchema={collabrationPageSchima}
          onSubmit={handleSubmitForm}
          initialValues={initialValues}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
            <div className="w-full">
              <div className="flex gap-4">
                <div className="w-[100%] lg:w-[49%]">
                  <InputBox
                    id="cbname"
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="name"
                    placeholder="Name *"
                    type="text"
                    value={values.name}
                    errorText={errors.name}
                  />
                </div>
              </div>
              <Divider className="mt-8 lg:mt-4" />
              <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="email"
                    placeholder="Email Address *"
                    type="text"
                    errorText={errors.email}
                    value={values.email}
                  />
                </div>
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="mobile"
                    placeholder="Phone Number *"
                    type="text"
                    errorText={errors.mobile}
                    value={values.mobile}
                  />
                </div>
              </div>

              <Divider className="mt-14 lg:mt-10" />
              <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="company"
                    placeholder="Company Name *"
                    type="text"
                    errorText={errors.company}
                    value={values.company}
                  />
                </div>
                <div className="w-[100%] lg:w-[50%]"> </div>
              </div>
              <Divider className=" lg:mt-4" />
              <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[50%]">
                  <SelectBox
                    handleSelect={(obj: any) => {
                      const { name, value } = obj;
                      handleChange("companySize")(value);
                    }}
                    name="companySize"
                    placeholder="Company Size *"
                    errorText={errors.companySize}
                    list={["1-10", "10-20", "20-30"]}
                    value={values.companySize}
                  />
                </div>
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="location"
                    placeholder="Company Location *"
                    type="text"
                    errorText={errors.location}
                    value={values.location}
                  />
                </div>
              </div>
              <Divider className="mt-8 lg:mt-4" />
              <div className="flex gap-8 lg:gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="websiteURL"
                    placeholder="Website/ LinkedIn URL *"
                    type="text"
                    errorText={errors.websiteURL}
                    value={values.websiteURL}
                  />
                </div>
                <div className="w-[100%] lg:w-[50%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="jobTitle"
                    placeholder="Your Job Title *"
                    type="text"
                    errorText={errors.jobTitle}
                    value={values.jobTitle}
                  />
                </div>
              </div>
              <Divider className="mt-16" />
              <TextArea
                handleChange={handleChange}
                name="questionOne"
                placeholder="Describe what your company seeks to benefit from this Collaboration *"
                textareaStyle=" bg-transparent"
                value={values.questionOne}
                errorText={errors.questionOne}
                onBlur={handleBlur}
              />
              <Divider className="mt-8 lg:mt-4" />
              <TextArea
                handleChange={handleChange}
                name="questionTwo"
                placeholder="Describe what your company will bring to us in this Collaboration *"
                textareaStyle=" bg-transparent"
                value={values.questionTwo}
                errorText={errors.questionTwo}
                onBlur={handleBlur}
              />
              <Divider className="mt-8 lg:mt-4" />
              <div className="w-[100%] lg:w-[50%]">
                <SelectBox
                  handleSelect={(obj: any) => {
                    const { name, value } = obj;
                    handleChange("hearAboutUS")(value);
                  }}
                  name="hearAboutUS"
                  placeholder="How did you hear about this opportunity? *"
                  errorText={errors.hearAboutUS}
                  list={["1-10", "10-20", "20-30", "Other"]}
                  value={values.hearAboutUS}
                  inputID="hearAboutUS"
                />
              </div>
              <Divider className="h-12" />
              <Button
                type="submit"
                OnClick={handleSubmit}
                className="mx-auto text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                text="Submit"
              />
              <Divider className="h-24" />
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Collabrate;
