import React, { useState } from "react";

import Divider from "../../Divider";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";
import { pricingList, timeLineList } from "../../../helper/constant";

interface Form {
  [key: string]: string;
}

interface Props {
  formData: Form;
  setFormData: (data: any) => void;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ formData, setFormData, handleSubmitForm }: Props) => {
  const handleChange = (obj: any) => {
    const { name, value } = obj;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      className="w-[97%] mx-auto mt-10 font-miligramMedium"
      onSubmit={handleSubmitForm}
    >
      <textarea
        onChange={(e) => handleChange(e.target)}
        value={formData?.aboutProject || ""}
        name="aboutProject"
        placeholder="Please tell us a bit about your project *"
        className="mt-6 h-20 text-[0.9rem] md:text-[1.2rem] bg-transparent outline-none border-b-2 border-main-light_white block w-full text-main-light_white placeholder:tracking-[1px] md:placeholder:tracking-[2px] placeholder:text-main-light_white"
      />
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <SelectBox
          value={formData?.budget}
          placeholder="Estimated Budget *"
          list={pricingList}
          name="budget"
          handleSelect={handleChange}
        />
        <SelectBox
          value={formData?.timeline}
          placeholder="Estimated Timeline *"
          list={timeLineList}
          name="timeline"
          handleSelect={handleChange}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          type="text"
          value={formData?.fname || ""}
          placeholder="First Name *"
          name="fname"
          handleChange={handleChange}
        />
        <InputBox
          type="text"
          value={formData?.lname || ""}
          placeholder="Last Name *"
          name="lname"
          handleChange={handleChange}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          type="text"
          value={formData?.email || ""}
          placeholder="Email Address *"
          name="email"
          handleChange={handleChange}
        />
        <InputBox
          type="text"
          value={formData?.mob || ""}
          placeholder="Mobile *"
          name="mob"
          handleChange={handleChange}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          type="text"
          value={formData?.compName || ""}
          placeholder="Company Name"
          name="compName"
          handleChange={handleChange}
        />
        <InputBox
          type="text"
          value={formData?.title || ""}
          placeholder="Your Title/Role"
          name="title"
          handleChange={handleChange}
        />
      </div>
      <Divider className="mt-12" />
      <button
        type="submit"
        className="mx-auto text-[0.8rem] xxl:text-[1rem] py-[0.4rem] sm:py-[0.6rem] w-[7.3rem] sm:w-[9.5rem] block mt-16 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal  rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
