import React, { useState } from "react";
import Button from "../../Button";
import Divider from "../../Divider";
import InputBox from "../../InputBox";
import SelectBox from "../../SelectBox";

interface Form {
  [key: string]: string;
}

const Form = () => {
  const [formData, setFormData] = useState<Form>();

  return (
    <form className="w-[97%] mx-auto mt-10 font-miligramMedium">
      <label htmlFor="" className="text-main-light_white">
        Please tell us a bit about your project <span className="ml-1">*</span>
      </label>
      <input
        type="text"
        className="mt-2 bg-transparent outline-none border-b-2 border-main-light_white block w-full text-main-light_white"
      />
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <SelectBox
          value=""
          placeholder="Estimated Budget *"
          list={[]}
          name="budget"
          handleSelect={() => {}}
        />
        <SelectBox
          value=""
          placeholder="Estimated Timeline *"
          list={[]}
          name="timeline"
          handleSelect={() => {}}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          value=""
          placeholder="Estimated Budget *"
          name="budget"
          handleChange={() => {}}
        />
        <InputBox
          value=""
          placeholder="Estimated Timeline *"
          name="timeline"
          handleChange={() => {}}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          value=""
          placeholder="Estimated Budget *"
          name="budget"
          handleChange={() => {}}
        />
        <InputBox
          value=""
          placeholder="Estimated Timeline *"
          name="timeline"
          handleChange={() => {}}
        />
      </div>
      <Divider className="mt-8" />
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
        <InputBox
          value=""
          placeholder="Estimated Budget *"
          name="budget"
          handleChange={() => {}}
        />
        <InputBox
          value=""
          placeholder="Estimated Timeline *"
          name="timeline"
          handleChange={() => {}}
        />
      </div>
      <Divider className="mt-12" />
      <Button
        OnClick={() => {}}
        text="Submit"
        className="mx-auto block mt-10 bg-main-greenOpt-200 font-miligramMedium text-main-greenOpt-1000 py-2 px-8 rounded-lg border-2 border-main-greenOpt-1000 hover:bg-main-greenOpt-1000 hover:text-white"
      />
    </form>
  );
};

export default Form;
