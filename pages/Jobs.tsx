import React, { useState, useEffect } from "react";
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
import Image from "next/image";
import { greenArrow } from "../assets";
import { useFetchDataFromServer } from "../helper/careerHooks";
import { FadeLoader } from "react-spinners";

const Jobs = () => {
  const [jobs, setJobs] = useState<any>(null);
  const [viewMore, setViewMore] = useState<boolean>(true);
  const [pinJobs, setPinJobs] = useState<any>(null);
  const fetchData = useFetchDataFromServer();
  console.log("jobs", jobs);
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
      duration: 600,
    });
  }, []);

  useEffect(() => {
    if (jobs === null || jobs === undefined)
      fetchData("open-job-listings", setJobs);

    if (jobs && pinJobs === null) {
      if (jobs?.job_listings?.length / 3 > 0) {
        setPinJobs(jobs?.job_listings?.slice(0, 2));
      } else {
        setPinJobs(jobs?.job_listings);
      }
    }
    // setPinJobs
  }, [jobs]);

  const handleTryAgain = async () => {
    setPinJobs(false);
    let res = await fetchData("open-job-listings", setJobs);
    if (res?.job_listings?.length / 3 > 0) {
      setPinJobs(res?.job_listings?.slice(0, 3));
    } else {
      setPinJobs(res?.job_listings);
    }
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Jobs</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[85%] mx-auto">
        <Divider className="mt-9" />
        <LandingSection {...{ jobs, setPinJobs, setViewMore }} />
        <Divider className="mt-16" />
        {pinJobs === null ? (
          <div className="w-fit mx-auto text-white">
            Something went wrong.
            <button
              onClick={handleTryAgain}
              className="block w-fit mx-auto cursor-pointer text-main-teal"
            >
              Try Again
            </button>
          </div>
        ) : pinJobs === false ? (
          <div className="w-12 h-12 mx-auto">
            <FadeLoader color="#00A99D" loading={true} />
          </div>
        ) : (
          <div>
            {pinJobs?.map((item: any, i: number) => {
              return (
                <Job
                  location={item?.location}
                  experience={item?.job?.job_level?.experience}
                  title={item?.job?.title}
                  type={
                    item?.job?.job_level?.level === "Intern"
                      ? "Internship"
                      : "Full Time"
                  }
                  id={item?.id}
                  key={i}
                />
              );
            })}
            <Divider className="h-10" />
            {viewMore && (
              <button
                onClick={() => setPinJobs([...jobs?.job_listings])}
                className="flex text-main-teal mx-auto w-fit justify-center items-center cursor-pointer hover:scale-105"
              >
                View more &nbsp; <Image src={greenArrow} alt={greenArrow} />
              </button>
            )}
          </div>
        )}
        <Divider className="mt-16" />
        <Hiring />
        <JobAlert />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
