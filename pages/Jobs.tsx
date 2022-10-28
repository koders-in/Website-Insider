import React, { SyntheticEvent, useState } from "react";
import {
  Divider,
  Footer,
  InputBox,
  Job,
  JobAlert,
  JobModal,
  LandingSection,
  Navbar,
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
    <div className="bg-main-primary overflow-hidden relative">
      <Navbar />
      <div className="py-28 w-[85%] mx-auto">
        <LandingSection {...{ selectedFile, setSelectedFile }} />
        <Divider className="mt-16" />
        <Job />
        <Job />
        <Divider className="mt-16" />
        <JobAlert />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
