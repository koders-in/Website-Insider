import React from "react";
import {
  Button,
  ButtonsGroup,
  Divider,
  Faq,
  Form,
  GradientText,
} from "../components";
import { typeOfProjects } from "../helper/constant";

const StartProject = () => {
  const handleClick = (type: string) => {
    console.log(type);
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="py-28 w-[85%] mx-auto">
      <GradientText
        className="text-[2rem] sm:text-[3rem] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Start your project"
      />
      <Divider className="mt-10" />
      <ButtonsGroup buttonsArray={[...typeOfProjects]} />
      {/* <Divider className="mt-6" />
      <ButtonsGroup
        buttonsArray={[...typeOfProjects.slice(5, typeOfProjects?.length)]}
      /> */}
      <Divider className="mt-10" />
      <Form />
      <Divider className="mt-10" />
      <GradientText
        className="text-[2rem] sm:text-[3rem]  w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Frequently Asked Questions"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
      <Divider className="mt-8" />
      <Faq
        question="  How long will it take to get a new website?"
        answer="  How long will it take to get a new website?"
      />
    </div>
  );
};

export default StartProject;
