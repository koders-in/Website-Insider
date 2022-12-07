import React, { useEffect, useState } from "react";
import { FormikHelpers } from "formik";

import Divider from "../../Divider";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";
import { pricingList, timeLineList } from "../../../helper/constant";
import { Formik } from "formik";
import { projectDataSchema } from "../../../helper/validate";
import Button from "../../Button";
import { PropagateLoader } from "react-spinners";
import TextArea from "../jobs/TextArea";

interface Form {
  [key: string]: string;
}

interface Props {
  handleSubmitData: (data: any) => Promise<boolean>;
}

interface initialState {
  aboutProject: string;
  budget: string;
  timeline: string;
  email: string;
  mobile: string;
  fName: string;
  lName: string;
  company: string;
  role: string;
}

const initialValues: initialState = {
  aboutProject: "",
  budget: "",
  timeline: "",
  email: "",
  mobile: "",
  fName: "",
  lName: "",
  company: "",
  role: "",
};

const Form = ({ handleSubmitData }: Props) => {
  const [showLoader, setShowLoader] = useState(false);
  const handleSubmitForm = async (
    value: initialState,
    helper: FormikHelpers<initialState>
  ) => {
    setShowLoader(true);
    const res = await handleSubmitData(value);
    if (res) helper.resetForm();
    setShowLoader(false);
  };

  useEffect(() => {
    const elm = document.getElementById("abproject");
    elm.focus();
  }, []);
  return (
    <Formik
      className="w-[97%] mx-auto mt-10 font-miligramMedium"
      validationSchema={projectDataSchema}
      onSubmit={handleSubmitForm}
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
        <div className="relative">
          <TextArea
            handleChange={handleChange}
            id="abproject"
            name="aboutProject"
            placeholder="Please tell us a bit about your project *"
            errorText={errors.aboutProject}
            value={values.aboutProject}
            textareaStyle="bg-main-primary"
          />
          <Divider className="mt-8" />
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
            <SelectBox
              value={values?.budget}
              placeholder="Estimated Budget *"
              list={pricingList}
              name="budget"
              handleSelect={(obj: any) => {
                const { name, value } = obj;
                handleChange("budget")(value);
              }}
              errorText={errors.budget}
            />
            <SelectBox
              value={values?.timeline}
              placeholder="Estimated Timeline *"
              list={timeLineList}
              name="timeline"
              handleSelect={(obj: any) => {
                const { name, value } = obj;
                handleChange("timeline")(value);
              }}
              errorText={errors.timeline}
            />
          </div>
          <Divider className="mt-8" />
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
            <InputBox
              type="text"
              value={values.fName}
              placeholder="First Name *"
              name="fName"
              handleChange={handleChange}
              onBlur={handleBlur}
              errorText={errors.fName}
            />
            <InputBox
              type="text"
              value={values.lName}
              placeholder="Last Name *"
              name="lName"
              handleChange={handleChange}
              onBlur={handleBlur}
              errorText={errors?.lName}
            />
          </div>
          <Divider className="mt-8" />
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
            <InputBox
              type="text"
              value={values.email}
              placeholder="Email Address *"
              name="email"
              handleChange={handleChange}
              onBlur={handleBlur}
              errorText={errors?.email}
            />
            <InputBox
              type="text"
              value={values.mobile}
              placeholder="Mobile *"
              name="mobile"
              handleChange={handleChange}
              onBlur={handleBlur}
              errorText={errors?.mobile}
            />
          </div>
          <Divider className="mt-8" />
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
            <InputBox
              type="text"
              value={values.company}
              placeholder="Company Name"
              name="company"
              handleChange={handleChange}
              onBlur={handleBlur}
            />
            <InputBox
              type="text"
              value={values.role}
              placeholder="Your Title/Role"
              name="role"
              handleChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <Divider className="mt-10" />
          <PropagateLoader
            color="#00A99D"
            loading={showLoader}
            className="w-fit block mx-auto"
            // cssOverride={override}
            // size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <Button
            type="submit"
            OnClick={handleSubmit}
            className="mx-auto text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block mt-16 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
            text="Submit"
          />
        </div>
      )}
    </Formik>
  );
};

export default Form;
