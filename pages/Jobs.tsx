import React, { useState } from "react";
import Head from "next/head";
import AOS from "aos";

import "aos/dist/aos.css";

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

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Jobs</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[85%] mx-auto">
        <Divider className="mt-9" />
        <LandingSection {...{ filterDetaile, setFilterDetaile }} />
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
