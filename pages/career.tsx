import React, { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import Fuse from "fuse.js";

import "aos/dist/aos.css";

import {
  AnimatedBorder,
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
  const [tempData, setTempData] = useState<any>(null);
  const [noMatch, setNoMatch] = useState<boolean>(false);
  const [department, setDepartment] = useState<Array<string>>(["All"]);
  const fetchData = useFetchDataFromServer();

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

    if (jobs && tempData === null) {
      if (jobs?.jobs_job_listings?.length / 3 > 0) {
        setPinJobs(jobs?.jobs_job_listings?.slice(0, 2));
        setTempData(jobs?.jobs_job_listings?.slice(0, 2));
      } else {
        setPinJobs(jobs?.jobs_job_listings);
        setTempData(jobs?.jobs_job_listings);
      }
    }
  }, [jobs, pinJobs]);

  const handleTryAgain = async () => {
    setPinJobs(false);
    let res = await fetchData("open-job-listings", setJobs);
    if (res?.jobs_job_listings?.length / 3 > 0) {
      setPinJobs(res?.jobs_job_listings?.slice(0, 3));
    } else {
      setPinJobs(res?.jobs_job_listings);
    }
  };

  const handleViewMore = () => {
    let filteredJobs = [];
    if (department.length === 1 && department[0] === "All") {
      setPinJobs([...jobs?.jobs_job_listings]);
    } else {
      department.forEach((item) => {
        const tempJobs = getFilteredData(
          jobs?.jobs_job_listings,
          ["job.department"],
          item
        );
        filteredJobs = [...filteredJobs, ...tempJobs];
      });
      setPinJobs(filteredJobs);
    }

    setTempData([...jobs?.jobs_job_listings]);
    setViewMore(false);
  };

  const getFilteredData = (
    list: Array<any>,
    keys: Array<string>,
    pattern: string
  ) => {
    const fuse = new Fuse(list, {
      location: 4,
      shouldSort: true,
      keys: keys,
    });
    const res: any = fuse.search(pattern);
    if (res.length) {
      return res?.map(({ item }) => {
        return item;
      });
    } else return [];
  };

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Jobs</title>
      </Head>
      <Navbar />
      <div className="py-28 w-[90%] sm:w-[85%] mx-auto">
        <Divider className="mt-9" />
        <LandingSection
          {...{
            pinJobs,
            setPinJobs,
            setNoMatch,
            tempData,
            department,
            setDepartment,
          }}
        />
        <Divider className="mt-12" />
        {noMatch ? (
          <div className="text-main-teal w-fit mx-auto text-[1.5em]">
            No Match Found.
          </div>
        ) : pinJobs === null ? (
          <div className="w-fit mx-auto text-white font-miligramTextBook">
            Unable to fetch job listings.
            <button
              onClick={handleTryAgain}
              className="block w-fit mx-auto cursor-pointer text-main-teal group relative"
            >
              Try Again
              <AnimatedBorder />
            </button>
          </div>
        ) : pinJobs === false ? (
          <div className="w-12 h-12 mx-auto">
            <FadeLoader color="#00A99D" loading={true} />
          </div>
        ) : (
          <div className="z-30">
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
                onClick={handleViewMore}
                className="flex text-main-teal mx-auto w-fit justify-center items-center cursor-pointer hover:scale-105"
              >
                View more &nbsp; <Image src={greenArrow} alt={greenArrow} />
              </button>
            )}
          </div>
        )}
        <Divider className="mt-20" />
        <Hiring />
        <JobAlert />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
