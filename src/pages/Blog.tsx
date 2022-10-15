import React from "react";
import { Card, Divider, GradientText, MainCard } from "../components";

const Blog = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div className="pb-10 pt-28 w-[90%] mx-auto">
      <GradientText
        className="w-fit mx-auto text-[2rem] xsm:text-[2.5rem] sm:text-[4rem] text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Blogs"
      />
      <MainCard />
      <div className="flex flex-wrap md:flex-nowrap gap-6 sm:gap-10 my-10">
        {[1, 2, 3].map((item) => (
          <Card key={item} />
        ))}
      </div>
      <Divider className="mt-20" />
      <GradientText
        className="text-[1.2rem] sm:text-[2rem] w-fit mx-auto text-center bg-gradient-to-r from-white to-main-teal font-miligrambold"
        text="Wish your blog was here too?"
      />
      <p className="text-[0.8rem] sm:text-[1rem] text-main-light_white text-center sm:font-miligramMedium font-miligramLight">
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
  );
};

export default Blog;
