import React, { useState } from "react";
import Head from "next/head";
import AOS from "aos";

import "aos/dist/aos.css";

import {
  ButtonsGroup,
  Divider,
  Faq,
  Footer,
  Form,
  GradientText,
  Navbar,
} from "../components";
import { faq, typeOfProjects } from "../helper/constant";
import { sendClientDetails } from "../helper/webhook";

export interface FormState {
  technologies: Array<string>;
}

const StartProject = () => {
  const [technologies, setTechnologies] = useState<Array<string>>([
    "Web Development",
    "UI/UX",
  ]);
  const [isExpand, setIsExpand] = useState("");

  const handleExpand = (question: string) => {
    if (isExpand === question) setIsExpand("");
    else setIsExpand(question);
  };

  const handleSubmitData = async (data) => {
    if (technologies.length === 0) {
      window.alert("You need to select technologies");
      return false;
    } else {
      try {
        const res = await sendClientDetails({
          ...data,
          technologies: technologies,
        });
        return true;
      } catch (error) {
        return false;
      }
    }
  };

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

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
        <title>Start Project</title>
      </Head>
      <Navbar />
      <div
        data-aos="fade-up"
        className="py-20 sm:py-28 w-[90%] md:w-[85%] mx-auto"
      >
        <GradientText
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] w-fit mx-auto text-center mt-9 bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Start your project"
        />
        <Divider className="mt-16 md:py-2" />
        <ButtonsGroup
          {...{
            technologies,
            setTechnologies,
            buttonsArray: [...typeOfProjects],
          }}
        />
        <Divider className="mt-16" />
        <Form {...{ handleSubmitData }} />
        <Divider className="mt-12 xxl:mt-16" />
        <GradientText
          aos="fade-up"
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem]  w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold pt-"
          text="Frequently Asked Questions"
        />
        <Divider className="mt-8 xxl:mt-16 xxl:pt-3" />
        {faq.map((item, i) => (
          <Faq
            answer={item.answer}
            question={item.question}
            onClick={handleExpand}
            show={item.question === isExpand}
            key={i}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default StartProject;
