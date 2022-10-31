import Head from "next/head";
import React, { useState } from "react";

import {
  Divider,
  Footer,
  Job,
  JobAlert,
  LandingSection,
  Navbar,
} from "../components";

const Jobs = () => {
  const [filterDetaile, setFilterDetaile] = useState<any>();
  const [candidateDetails, setCandidateDetails] = useState<any>();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const handleSubmit = () => {
    console.log("state", filterDetaile, candidateDetails);
  };
  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Jobs</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[85%] mx-auto">
        <LandingSection {...{ filterDetaile, setFilterDetaile }} />
        <Divider className="mt-16" />
        <Job {...{ candidateDetails, setCandidateDetails }} />
        <Job {...{ candidateDetails, setCandidateDetails }} />
        <Divider className="mt-16" />
        <JobAlert />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
