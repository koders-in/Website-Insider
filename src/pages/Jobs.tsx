import React, { SyntheticEvent, useState } from "react";
import {
  Divider,
  InputBox,
  Job,
  JobAlert,
  JobModal,
  LandingSection,
} from "../components";

const Jobs = () => {
  const [selectedFile, setSelectedFile] = useState<any>();

  const showFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectedFile(e.target.files[0]);
    console.log("file is: ", e.target.files[0]);
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const handleSubmit = () => {
    // send "selectedFile" state to server in a accepted format
    console.log("file", selectedFile);
  };
  return (
    <div className="py-28 w-[85%] mx-auto">
      <LandingSection />
      <Divider className="mt-16" />
      <Job>
        <h5 className="text-white text-[1.1rem]">About the Company</h5>
        <p className="text-white text-[0.85rem] mt-3">
          Koders isn't your normal software development firm. Koders provides a
          platform where people can engage themselves in various tech-related
          activities, be it keeping themselves updated with the latest
          technology trends, learning a new topic, or maybe teaching one. This
          is a family of driven enthusiasts where people from various fields
          come along to contribute their part and help build up the family. We
          aren't making just customer relations here, we're building a family of
          technological cognizance.
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
          <li>Engage in creative thinking, conceptualization, and designing</li>
          <li>
            Design marketing collateral like social media graphics, catalogs,
            brochures, posters, advertisements, presentations, e-mailers, etc.
          </li>
          <li>Deliver high-quality and professional output within deadlines</li>
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
            Apart from the fixed base stipend, you will be awarded an additional
            stipend based on your performance up to ₹32,500.
          </li>
          <li>
            You will be awarded a full-time opportunity at Koders after your
            tenure if your performance meets or exceeds expectations.
          </li>
        </ul>
      </Job>
      <Job>
        <div className="p-8 border-dashed  border-2 border-main-teal rounded-xl relative">
          <input
            type="file"
            onChange={showFile}
            className="absolute w-full h-full opacity-0"
          />
          <p className="text-main-teal text-[1rem] text-center">
            Upload Resume
          </p>
          <p className="text-main-whiteVar1 text-[0.8rem] text-center">
            Drop resume here or click to upload
          </p>
        </div>
        <Divider className="mt-10" />
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
          <InputBox
            type="text"
            value={""}
            placeholder="First Name *"
            name="fname"
            handleChange={() => {}}
          />
          <InputBox
            type="text"
            value={""}
            placeholder="Last Name *"
            name="lname"
            handleChange={() => {}}
          />
        </div>
        <Divider className="mt-8" />
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 mt-2">
          <InputBox
            type="text"
            value={""}
            placeholder="Email Address *"
            name="email"
            handleChange={() => {}}
          />
          <InputBox
            type="text"
            value={""}
            placeholder="Mobile *"
            name="mob"
            handleChange={() => {}}
          />
        </div>
        <Divider className="mt-10" />
      </Job>
      <Divider className="mt-16" />
      <JobAlert />
    </div>
  );
};

export default Jobs;
