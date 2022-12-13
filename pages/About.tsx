import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { aim, founder, mission, quoteDown, quoteUp } from "../assets";
import {
  Divider,
  Footer,
  GradientText,
  Navbar,
  OurFamily,
  WorldMap,
} from "../components";
import { dataOfMapAnimation } from "../helper/constant";

const about = () => {
  const [stats, setStats] = useState([
    {
      stat: 10,
      title: "Employees",
      classes: "border-main-teal border-r-2 border-b-2",
    },
    {
      stat: 10,
      title: "Years",
      classes: "border-main-teal md:border-r-2 border-b-2",
    },
    {
      stat: 10,
      title: "Countries",
      classes: "border-main-teal border-b-2 border-r-2 sm:border-r-0",
    },
    {
      stat: 10,
      title: "Mobile Apps",
      classes: "border-main-teal border-b-2 md:border-b-0 md:border-r-2",
    },
    { stat: 10, title: "Web Apps", classes: "border-main-teal border-r-2" },
    { stat: 10, title: "Bots", classes: "" },
  ]);

  useEffect(() => {
    window.onscroll = () => {
      const element = document?.getElementById("map");
      if (element !== undefined && element !== null) {
        if (element?.offsetTop && window.pageYOffset) {
          if (element?.offsetTop - window.pageYOffset < 100) {
            const lines: any = document.getElementsByClassName("line");
            const locations: any =
              document.getElementsByClassName("location-icon");
            const bases: any = document.getElementsByClassName("base");
            for (let i = 0; i < lines.length; i++) {
              lines[i].id = dataOfMapAnimation[i].line;
              locations[i].id = dataOfMapAnimation[i].location;
              bases[i].id = dataOfMapAnimation[i].base;
            }
          }
        }
      }
    };
  });

  return (
    <div className="font-miligrambold bg-main-primary pt-28 relative overflow-hidden">
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <div className="w-[90%] mx-auto">
        <div className="sm:h-[80vh] xxl:h-auto">
          <Divider className=" h-[15vh] md:h-[14vh]" />
          <div className="z-10 text-center text-[1.8em] md:text-[2.15em] xxl:text-[2.8em] text-white w-[100%]   mx-auto leading-none relative">
            <p className="relative z-20 px-3 xl:w-fit mx-auto font-miligramTextBold">
              <Image
                src={quoteUp}
                alt={quoteUp}
                className="mb-3 top-[-40px] left-[-10px] md:top-[-68%] md:left-[-6%] w-[13%] md:w-[10%] xxl:h-[10%] z-0"
              />
              To build the best and invent a better{" "}
              <br className="hidden lg:block" /> tomorrow with the help of
              Technology.
              <Image
                src={quoteDown}
                alt={quoteDown}
                className="block mt-3 ml-auto bottom-[-20px] right-[-20px] md:bottom-[-65%] md:right-[-5%] w-[13%] md:w-[10%] xxl:h-[10%] z-0"
              />
            </p>
          </div>
          <Divider className="h-14 sm:h-[12vh]" />
          <div className="text-center text-[1.25em] text-main-light_white w-[90%] sm:w-[55%] md:w-[45%] lg:w-[58%] mx-auto leading-none font-miligramTextMedium font-medium">
            At Koders we build softwares with new dimensions by utilizing the
            <br className="hidden lg:block" />
            full potential of our team to bring out the best for our customers.
          </div>
        </div>
        <Divider className="h-20 sm:h-0 xxl:h-32" />
        <GradientText
          aos="slide-right"
          className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="MEET KODERS"
        />
        <p
          data-aos="slide-left"
          className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-[55%] mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none"
        >
          We are a group of like-minded people who are striving their best to
          provide real world solutions to your ideas. We are here to bring your
          dreams to reality by providing high quality service.
        </p>
        <Divider className="h-10 sm:h-20" />
        <Image
          src={founder}
          alt={founder}
          width={700}
          height={700}
          className="mx-auto"
        />
        <p className="text-center font-miligramTextBookItalic font-light text-main-light_white text-[0.8em] sm:text-[1.2rem] py-2">
          Our founders Kartikey and Shaloni
        </p>
        {/* <OurFamily /> */}
        <Divider className="h-10" />
        <GradientText
          className="text-[2rem] font-miligrambold leading-none mb-3 md:mb-0 md:leading-normal sm:text-[2.8rem] mt-10 w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="Our Mission"
        />
        <Divider className="h-12" />
        <div className="flex w-fit mx-auto flex-col gap-10 md:gap-0 md:flex-row">
          <div className="md:w-[50%] md:px-8 lg:px-20">
            <Image
              className="block mx-auto"
              src={mission}
              alt={mission}
              width={100}
              height={100}
            />
            <Divider className="h-5" />
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[1.25em] md:text-[1.3rem] leading-none font-miligramTextBold">
              Our mission is to Kreate simple solutions for complex problems.
            </p>
          </div>
          <div className="border-b-2 w-[60%] mx-auto md:w-auto md:border-b-0 md:border-r-2 border-main-teal"></div>
          <div className="md:w-[50%] md:px-8 lg:px-20">
            <Image
              className="block mx-auto"
              src={aim}
              alt={aim}
              width={100}
              height={100}
            />
            <Divider className="h-5" />
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[1.25em] md:text-[1.3rem] leading-none font-miligramTextBold">
              The aim is to foster technological innovation and to embellish the
              lives of people.
            </p>
          </div>
        </div>
        <Divider className="h-32" />
        <GradientText
          aos="slide-right"
          className="w-[90%] sm:w-fit mx-auto leading-none mb-3 md:mb-0 md:leading-normal text-[2rem] sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Work and Grow with us"
        />
        <p
          id="map"
          data-aos="slide-left"
          className="mt-2 text-[0.8rem] sm:text-[1.3rem] w-[80%] sm:w-[45%] mx-auto text-center text-main-light_white pb-2 font-miligramText400 leading-none"
        >
          Launched in 2018, Koders has worked with clients in more than 10
          Countries
        </p>
        <Divider className="h-12 sm:h-0" />
        <WorldMap />
        <Divider className="h-12 sm:h-0" />
        <div className="w-[90%] justify-center mx-auto flex flex-wrap">
          {stats.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex w-[50%] sm:w-[49%] md:w-[32%] flex-col justify-center items-center px-4 py-3 md:px-3 md:py-5 lg:px-8 xl:px-16 lg:py-10 text-white ${item.classes}`}
              >
                <div className="flex text-[2rem] sm:text-[3rem] justify-center items-center font-miligramLight">
                  {item.stat}
                  <span className="text-[2rem] text-white">+</span>
                </div>
                <p className="text-white w-[9rem] text-center text-[1rem] sm:text-[1.6rem] font-miligramLight font-extralight">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <Divider className="h-32" />
      </div>
      <Footer />
    </div>
  );
};

export default about;
