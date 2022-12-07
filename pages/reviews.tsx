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
import { discordReviews } from "../helper/constant";
import { getSlicedArray, sortReviewsList } from "../helper";
import { FadeLoader } from "react-spinners";

const Testmonials = () => {
  const [columOne, setColumOne] = useState<Array<any>>([]);
  const [columTwo, setColumTwo] = useState<Array<any>>([]);
  const [columThree, setColumThree] = useState<Array<any>>([]);
  const [errorInFetchingData, setErrorInFetchingData] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleNavigate = (href: string) => {
    router.push(href);
  };

  const fetchReview = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api", {
        headers: {
          testmonial: true,
        },
      });
      let data = null;
      if (res) {
        data = await JSON.parse(JSON.stringify(res.data));
        setErrorInFetchingData(false);
      } else {
        setErrorInFetchingData(true);
      }

      const dataOfDiscordReviews = getSlicedArray(3, discordReviews);
      setColumOne((p) => {
        return [...p, ...dataOfDiscordReviews[0]];
      });
      setColumTwo((p) => {
        return [...p, ...dataOfDiscordReviews[1]];
      });
      setColumThree((p) => {
        return [...p, ...dataOfDiscordReviews[2]];
      });

      const { topReviews, reviews } = sortReviewsList(data.reviews);
      const dataOfTopReviews = getSlicedArray(3, topReviews);
      setColumOne((p) => {
        return [...p, ...dataOfTopReviews[0]];
      });
      setColumTwo((p) => {
        return [...p, ...dataOfTopReviews[1]];
      });
      setColumThree((p) => {
        return [...p, ...dataOfTopReviews[2]];
      });

      const dataOfReviews = getSlicedArray(3, reviews);
      setColumOne((p) => {
        return [...p, ...dataOfReviews[0]];
      });
      setColumTwo((p) => {
        return [...p, ...dataOfReviews[1]];
      });
      setColumThree((p) => {
        return [...p, ...dataOfReviews[2]];
      });
      setLoading(false);
    } catch (error) {
      setErrorInFetchingData(true);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    if (!columOne.length || !columTwo.length || !columThree.length) {
      fetchReview();
    }
  }, []);

  useEffect(() => {
    const tryAgain = document.getElementById("tryAgain");
    tryAgain?.addEventListener("click", () => {
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
          {/* {!reviewsData?.length ? (
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
          {errorInFetchingData ? (
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
          ) : loading ? (
            <FadeLoader
              color="#00A99D"
              loading={true}
              className="w-fit block mx-auto"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <>
              <div className="w-full md:w-1/3">
                {[...columOne.slice(0, columOne.length - 5)]?.map((item, i) => (
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
                {columTwo?.map((item, i) => (
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
                {[
                  ...columThree,
                  ...columOne.slice(columOne.length - 5, columOne.length),
                ]?.map((item, i) => (
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
          )}
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
