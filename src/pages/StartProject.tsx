import React, { useState } from "react";
import {
  Button,
  ButtonsGroup,
  Divider,
  Faq,
  Form,
  GradientText,
} from "../components";
import { faq, typeOfProjects } from "../helper/constant";

export interface FormState {
  technologies: Array<string>;
}

const StartProject = () => {
  const [formState, setFormState] = useState<FormState>({
    technologies: ["Web Development", "UI/UX"]
  });
  const [isExpand, setIsExpand] = useState("");


  const handleExpand = (question: string) => {
    if (isExpand === question) setIsExpand("")
    else setIsExpand(question)
  };
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="py-28 w-[85%] mx-auto">
      <GradientText
        className="text-[2rem] sm:text-[2.8rem] w-fit mx-auto text-center mt-9 bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Start your project"
      />
      <Divider className="mt-16 py-2" />
      <ButtonsGroup formState={formState} setFormState={setFormState} buttonsArray={[...typeOfProjects]} />
      <Divider className="mt-16" />
      <Form />
      <Divider className="mt-12 xxl:mt-16" />
      <GradientText
        className="text-[2rem] sm:text-[2.8rem]  w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold pt-"
        text="Frequently Asked Questions"
      />
      <Divider className="mt-8 xxl:mt-16 xxl:pt-3" />
      {
        faq.map((item, i) =>
          <Faq
            answer={item.answer}
            question={item.question}
            onClick={handleExpand}
            show={item.question === isExpand}
            key={i}
          />
        )
      }
    </div>
  );
};

export default StartProject;
