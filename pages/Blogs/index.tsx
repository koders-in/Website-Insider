import Head from "next/head";
import React from "react";
import {
  Card,
  Divider,
  Footer,
  GradientText,
  MainCard,
  Navbar,
} from "../../components";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="bg-main-primary px-[6%] overflow-hidden">
      <Head>
        <title>Blogs</title>
      </Head>
      <div className="pb-10 pt-28 w-[91%] mx-auto relative">
        <Navbar />
        <Divider className="mt-10" />
        <GradientText
          className="w-fit mx-auto text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
          text="Blogs"
        />
        <MainCard />
        <div className="flex flex-wrap md:flex-nowrap gap-5 sm:gap-9 mt-10">
          {[1, 2, 3].map((item) => (
            <Card key={item} />
          ))}
        </div>
        <Divider className="h-20" />
        <GradientText
          className="w-fit mx-auto text-[2.2rem] leading-none mb-3 md:mb-0 md:leading-normal  sm:text-[2.8rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold xxl:pt-10"
          text="Wish your blog was here too?"
        />
        <p className="text-[0.8rem] sm:text-[1.3rem] text-main-light_white text-center font-miligramLight xxl:pb-10">
          Submit your blog. Write to us at&nbsp;
          <span
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXLDgXxQqzSJgBmrwVVkhDBcWFpLbCkzfJjdmvhSclngzmRZMGfkrGBMXRJQqzpWgLTdG"
              );
            }}
            className="text-main-teal cursor-pointer hover:border-main-teal hover:border-b-2"
          >
            info@koders.in
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
