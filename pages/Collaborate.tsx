import { Formik, FormikHelpers } from "formik";
import Head from "next/head";
import React from "react";
import {
  Divider,
  Footer,
  GradientText,
  InputBox,
  Navbar,
  SelectBox,
} from "../components";
import TextArea from "../components/pages-components/jobs/TextArea";
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
};

const Collabrate = () => {
  const handleSubmitForm = (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    const body = `
    Name:${value.name}
    Email:${value.email}
    Mobile No:${value.mobile}
    Company Name:${value.company}
    Company Size:${value.companySize}
    Location:${value.location}
    Website URL: ${value.websiteURL}
    Job Title: ${value.jobTitle}\n
    Q.Describe what your company seeks to benefit from this Collaboration.
    Ans:- ${value.questionOne}\n
    Q.Describe what your company will bring to us in this collaboration.
    Ans:- ${value.questionTwo}\n

    Thank you
    `;
    const MAIL_TO = `mailto:info@koders.in?subject=Collabrate Query&body=${encodeURIComponent(
      body
    )}`;
    window.open(MAIL_TO, "_blank");
    helper.resetForm();
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Collabrate</title>
      </Head>
      <Navbar />
      <div className="pt-28 w-[95%] sm:w-[90%] mx-auto">
        <GradientText
          aos="fade-up"
          className="text-[1.8rem] sm:text-[2.5rem] md:text-[2.8rem] mx-auto w-fit bg-gradient-to-r from-white to-main-teal font-miligrambold mt-16"
          text="Collabrate with us"
        />
        <Divider className="mt-8" />
        <h5 className="w-fit mx-auto text-white text-[1em] font-miligrambold">
          Our Passion. Your Solution.
        </h5>
        <p className="text-main-light_white my-5 font-miligrambold text-center w-[90%] sm:w-[65%] md:w-[55%] lg:w-[45%] mx-auto text-[0.6rem] sm:text-[1rem]">
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
          // validateOnMount={true}
        >
          {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
            <div className="w-full">
              <div className="flex gap-4">
                <div className="w-[100%] lg:w-[49%]">
                  <InputBox
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    name="name"
                    placeholder="Name *"
                    type="text"
                    value={values.name}
                    errorText={errors.name}
                  />
                </div>
                {/* <div></div> */}
              </div>
              <Divider className="mt-4" />
              <div className="flex gap-4 flex-col lg:flex-row">
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
              <Divider className="mt-10" />
              <div className="flex gap-4 flex-col lg:flex-row">
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
                <div className="w-[100%] lg:w-[50%]"></div>
              </div>
              <Divider className="mt-4" />
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="w-[100%] lg:w-[50%]">
                  <SelectBox
                    handleSelect={(obj: any) => {
                      const { name, value } = obj;
                      handleChange("companySize")(value);
                    }}
                    name="companySize"
                    placeholder="Company Size *"
                    errorText={errors.companySize}
                    list={["1-10", "10-20", "20,30"]}
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
              <Divider className="mt-8" />
              <div className="flex gap-4 flex-col lg:flex-row">
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
              <Divider className="h-16" />
              <TextArea
                handleChange={handleChange}
                name="questionOne"
                placeholder=""
                title="Describe what your company seeks to benefit from this Collaboration. *"
                textareaStyle=" bg-transparent"
                value={values.questionOne}
                errorText={errors.questionOne}
                onBlur={handleBlur}
              />
              <Divider className="h-4" />
              <TextArea
                handleChange={handleChange}
                name="questionTwo"
                placeholder=""
                title="Describe what your company will bring to us in this collaboration. *"
                textareaStyle=" bg-transparent"
                value={values.questionTwo}
                errorText={errors.questionTwo}
                onBlur={handleBlur}
              />
              <Divider className="h-12" />
              <button
                type="submit"
                onClick={() => handleSubmit()}
                className="text-[0.9em] font-miligramText400 bg-main-greenOpt-200 border-2 border-main-teal text-main-teal block w-fit mx-auto py-[0.4rem] px-8 rounded-md hover:text-white hover:bg-main-teal"
              >
                Submit
              </button>
              <Divider className="h-16" />
            </div>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
};

export default Collabrate;
