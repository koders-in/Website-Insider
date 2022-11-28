import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import {
  Button,
  Divider,
  Footer,
  GradientText,
  Navbar,
  TestmonialCard,
} from "../components";
import axios from "axios";
// import { FadeLoader } from "react-spinners";
import { discordReviews } from "../helper/constant";

const Testmonials = () => {
  const [reviewsData, setReviewsData] = useState<any>();

  const discordReviewInaColumn = Math.round(discordReviews.length / 3);

  const discordRowOne = discordReviews?.slice(0, discordReviewInaColumn);
  const discordRowTwo = discordReviews?.slice(
    discordReviewInaColumn,
    discordReviewInaColumn * 2
  );
  const discordRowThree = discordReviews?.slice(
    discordReviewInaColumn * 2,
    discordReviews.length
  );

  const cardInaColumn = Math.round(reviewsData?.reviews?.length / 3);
  const rowOne = reviewsData?.reviews?.slice(0, cardInaColumn - 2);

  const rowTwo = reviewsData?.reviews?.slice(
    cardInaColumn - 2,
    cardInaColumn * 2 - 2
  );
  const rowThree = reviewsData?.reviews?.slice(
    cardInaColumn * 2 - 2,
    reviewsData?.reviews?.length
  );
  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const fetchReview = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api", {
        headers: {
          testmonial: true,
        },
      });
      let data = null;
      if (res) data = await JSON.parse(JSON.stringify(res.data));
      setReviewsData(data);
    } catch (error) {
      setReviewsData(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  }, []);

  useEffect(() => {
    fetchReview();
  }, []);

  useEffect(() => {
    const tryAgain = document.getElementById("tryAgain");
    tryAgain?.addEventListener("click", () => {
      setReviewsData(undefined);
      fetchReview();
    });
  });

  return (
    <div className="bg-main-primary overflow-hidden relative">
      <Head>
        <title>Reviews</title>
      </Head>
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
          {/* {!reviewsData?.reviews?.length ? (
            <div>
              {reviewsData === false ? (
                <>
                  <p className="w-fit mx-auto text-main-light_white">
                    Unable to load reviews ☹️
                  </p>
                  <button
                    id="tryAgain"
                    className="mx-auto block mt-6 bg-main-greenOpt-200 font-miligramMedium text-main-lightTeal py-[6px] px-5 rounded-lg border-[1px] border-main-lightTeal hover:bg-main-lightTeal hover:text-white"
                  >
                    Try Again
                  </button>
                </>
              ) : (
                <FadeLoader
                  color="#00A99D"
                  loading={true}
                  className="w-fit block mx-auto"
                  // cssOverride={override}
                  // size={100}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              )}
            </div>
          ) : ( */}
          <>
            <div className="w-full md:w-1/3">
              {[...discordRowOne, ...rowOne]?.map((item, i) => (
                <TestmonialCard
                  key={i}
                  {...{
                    description: item.snippet,
                    logo: item.user.thumbnail,
                    title: item.user.name,
                    rating: item.rating,
                    link: item.user.link,
                  }}
                />
              ))}
            </div>
            <div className="w-full md:w-1/3">
              {[...discordRowTwo, ...rowTwo]?.map((item, i) => (
                <TestmonialCard
                  key={i}
                  {...{
                    description: item.snippet,
                    logo: item.user.thumbnail,
                    title: item.user.name,
                    rating: item.rating,
                    link: item.user.link,
                  }}
                />
              ))}
            </div>
            <div className="w-full md:w-1/3">
              {[...discordRowThree, ...rowThree]?.map((item, i) => (
                <TestmonialCard
                  key={i}
                  {...{
                    description: item.snippet,
                    logo: item.user.thumbnail,
                    title: item.user.name,
                    rating: item.rating,
                    link: item.user.link,
                  }}
                />
              ))}
            </div>
          </>
          {/* )} */}
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
