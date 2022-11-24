import React, { useState } from "react";
import Head from "next/head";
import AOS from "aos";

import "aos/dist/aos.css";

import {
  Divider,
  Footer,
  Hiring,
  Job,
  JobAlert,
  LandingSection,
  Navbar,
} from "../components";
import { jobDetails, moreJobs, ObjectOfJob } from "../helper/constant";
import Image from "next/image";
import { greenArrow } from "../assets";

const Jobs = () => {
  const [filterDetaile, setFilterDetaile] = useState<any>();
  const [jobs, setJobs] = useState<Array<ObjectOfJob>>(jobDetails);

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
        <div>
          {jobs.map((item: ObjectOfJob, i) => {
            return <Job {...item} key={i} />;
          })}
          <Divider className="h-10" />
          <button
            onClick={() => setJobs([...jobs, ...moreJobs])}
            className="flex text-main-teal mx-auto w-fit justify-center items-center cursor-pointer hover:scale-105"
          >
            View more &nbsp; <Image src={greenArrow} alt={greenArrow} />
          </button>
        </div>
        <Divider className="mt-16" />
        <Hiring />
        <JobAlert />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
