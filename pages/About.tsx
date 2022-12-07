import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { aim, founder, mission, quoteDown, quoteUp } from "../assets";
import { Divider, Footer, GradientText, Navbar, WorldMap } from "../components";
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
        <Divider className="h-20 lg:h-40" />
        <div className="z-10 text-center text-[1em] sm:text-[1.2em] md:text-[2.2em] text-white w-[80%] md:w-[70%] lg:w-[60%]  mx-auto leading-none relative">
          <Image
            src={quoteUp}
            alt={quoteUp}
            className="absolute top-[-32%] left-[-8%] w-[10%] z-0"
          />
          <Image
            src={quoteDown}
            alt={quoteDown}
            className="absolute bottom-[-30%] right-[-8%] w-[10%] z-0"
          />
          <p className="relative z-20 px-3">
            To build the best and invent a better tomorrow with the help of
            Technology.
          </p>
        </div>
        <Divider className="h-14 sm:h-28" />
        <div className="text-center text-[0.8em] sm:text-[1.3em] text-main-light_white w-[90%] sm:w-[55%] md:w-[45%] lg:w-[60%] mx-auto leading-none font-miligramText400">
          At Koders we build softwares with new dimensions by utilizing the full
          potential of our team to bring out the best for our customers.
        </div>
        <Divider className="h-24 sm:h-28" />
        <GradientText
          className="text-[1.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[1.5rem] md:text-[1.8rem] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="MEET KODERS"
        />
        <p className="text-main-light_white my-5 leading-none text-center w-[90%] sm:w-[60%] mx-auto text-[0.8rem] sm:text-[1.3rem] font-miligramText400">
          We are a group of like-minded people who are striving their best to
          provide real world solutions to your ideas. We are here to bring your
          dreams to reality by providing high quality service.
        </p>
        <Divider className="h-10" />
        <Image
          src={founder}
          alt={founder}
          width={600}
          height={600}
          className="mx-auto"
        />
        <p className="text-center font-miligramTextItalic text-main-light_white text-[0.8em] sm:text-[1.2rem] py-2">
          Our founders Kartikey and Shaloni
        </p>
        <Divider className="h-10" />
        <GradientText
          className="text-[1.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[1.5rem] md:text-[1.8rem] mt-10 w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal"
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
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[0.8rem] md:text-[1.3rem] leading-none font-miligramTextBold">
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
            <p className="text-main-light_white_eight text-center w-[80%] mx-auto text-[0.8rem] md:text-[1.3rem] leading-none font-miligramTextBold">
              The aim is to foster technological innovation and to embellish the
              lives of people.
            </p>
          </div>
        </div>
        <Divider className="h-16" />
        <GradientText
          className="text-[1.2rem] leading-none md:mb-0 md:leading-normal  sm:text-[1.5rem] md:text-[1.8rem] mt-10 w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="Work and Grow with us"
        />
        <p
          id="map"
          className="text-main-light_white mt-7 mb-2 leading-none text-center w-[90%] sm:w-[42%] mx-auto text-[0.8rem] sm:text-[1.3rem] font-miligramText400"
        >
          Launched in 2018, Koders has worked with clients in more than 10
          Countries
        </p>
        <WorldMap />
        <div className="w-[90%] justify-center mx-auto flex flex-wrap">
          {stats.map((item, i) => {
            return (
              <div
                key={i}
                className={`flex w-[50%] sm:w-[49%] md:w-[32%] flex-col justify-center items-center px-4 py-3 md:px-3 md:py-5 lg:px-8 xl:px-16 lg:py-10 text-white ${item.classes}`}
              >
                <div className="flex text-[3rem] justify-center items-center font-miligramLight">
                  {item.stat}
                  <span className="text-[2rem] text-white">+</span>
                </div>
                <p className="text-main-light_white w-[9rem] text-center text-[1.6rem] font-miligramLight">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <Divider className="h-24" />
      </div>
      <Footer />
    </div>
  );
};

export default about;
