import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Footer,
  GradientText,
  Navbar,
  TestmonialCard,
} from "../components";
import { reviews } from "../helper/constant";

const Testmonials = () => {
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Navbar />
      <div className="pb-10 pt-28">
        <GradientText
          className="text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.5rem] md:text-[2.8rem] mt-10 w-[90%] mx-auto text-center bg-gradient-to-r from-white to-main-teal"
          text="Don't just take our word for it."
        />
        <p className="text-main-light_white text-center w-[90%] sm:w-[60%] mx-auto text-[0.8rem] sm:text-[1.3rem]">
          Take a look at what some of our customers have to say about Koders.
        </p>
        <Divider className="mt-4 md:mt-14" />
        <div className=" w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex justify-center flex-wrap md:flex-nowrap gap-5 xl:gap-7 bg-main-primary pt-4 pb-8 xxl:w-[63%]">
          <div className="w-full md:w-1/3">
            {reviews.map((item, i) => (
              <TestmonialCard
                key={i}
                {...{
                  description: item.message,
                  logo: item.logo,
                  title: item.title,
                }}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3">
            {reviews.map((item, i) => (
              <TestmonialCard
                key={i}
                {...{
                  description: item.message,
                  logo: item.logo,
                  title: item.title,
                }}
              />
            ))}
          </div>
          <div className="w-full md:w-1/3">
            {reviews.map((item, i) => (
              <TestmonialCard
                key={i}
                {...{
                  description: item.message,
                  logo: item.logo,
                  title: item.title,
                }}
              />
            ))}
          </div>
        </div>
        <Button
          OnClick={() => handleNavigate("StartProject")}
          text="Get Started"
          className="mx-auto block mt-14 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[10px] px-9 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
        />
        <Divider className="mt-16 py-2" />
      </div>
      <Footer />
    </div>
  );
};

export default Testmonials;
