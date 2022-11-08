import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormData from "form-data";
// import { useNavigate } from "react-router-dom";
import { handleSlider } from ".";
import { validateApplyForJobDetails } from "./validate";
import { sendCandidateDetails } from "./webhook";

export const useUpdateSlide = () => {
  const [translatePosition, setTranslatePosition] = useState([
    -233, 0, 233, 466,
  ]);
  const [activeIndex, setActiveIndex] = useState(1);

  function getIndexOfActiveSlide(newArr: Array<number>) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === 0) {
        setActiveIndex(i);
      }
    }
  }

  function handleRightSlide() {
    if (!(translatePosition[3] === 699)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item < 0 ? item + 233 : item;
          case 1:
            return item < 233 ? item + 233 : item;
          case 2:
            return item < 466 ? item + 233 : item;
          default:
            return item < 699 ? item + 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }

  function handleLeftSlide() {
    if (!(translatePosition[3] === 0)) {
      const newArr = translatePosition.map((item, i) => {
        switch (i) {
          case 0:
            return item > -699 ? item - 233 : item;
          case 1:
            return item > -466 ? item - 233 : item;
          case 2:
            return item > -233 ? item - 233 : item;
          default:
            return item > 0 ? item - 233 : item;
        }
      });
      setTranslatePosition(newArr);
      getIndexOfActiveSlide(newArr);
    }
  }

  function onSwipe(id: string) {
    handleSlider(id, handleLeftSlide, handleRightSlide);
  }

  return {
    onSwipe,
    handleLeftSlide,
    handleRightSlide,
    getIndexOfActiveSlide,
    activeIndex,
    translatePosition,
  };
};

export const useRedirectToPricing = () => {
  const router = useRouter();
  const redirectOnPricingSection = () => {
    const pricingBtn = document.getElementById("Pricing");
    router.push("/");
    const pricingSec = document.getElementById("pricingSec");
    if (pricingSec) {
      const fromTop = pricingSec.offsetTop;
      window.scrollTo({
        top: fromTop,
        behavior: "smooth",
      });
    }
  };
  return redirectOnPricingSection;
};

export type AllowedInputName = "fname" | "lname" | "email" | "mob" | "resume";
export const useFormSubmitHook = () => {
  const [isvalidate, setIsValidate] = useState(false);
  const [errorsMsg, setErrors] = useState<any>({});
  const [candidateDetails, setCandidateDetails] = useState<any>({
    fname: { value: "", error: "" },
    lname: { value: "", error: "" },
    email: { value: "", error: "" },
    mob: { value: "", error: "" },
    resume: null,
  });
  const onInputChange = (key: any, value: any) => {
    setCandidateDetails((prev: any) => {
      return {
        ...prev,
        [key]: {
          value,
          error: "",
        },
      };
    });
    handleValidation();
  };

  const onSubmit = async () => {
    const { error } = validateApplyForJobDetails(candidateDetails);
    console.log(error || candidateDetails.resume);
    if (error || candidateDetails.resume === null) {
      window.alert("All fields are required");
      return false;
    }
    const formdata = new FormData();
    formdata.append("file", candidateDetails?.resume);

    const requestOptions: any = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    fetch("http://localhost:3000/api/", requestOptions)
      .then((response) => response.text())
      .then(async (res) => {
        const { result } = JSON.parse(res);
        if (result) {
          await sendCandidateDetails({
            ...candidateDetails,
            downloadLink: result,
          });
        }
      })
      .catch((error) => false);
    return true;
  };

  const setFile = (file: any) => {
    setCandidateDetails((prev: any) => {
      return {
        ...prev,
        resume: file,
      };
    });
  };

  const handleValidation = () => {
    const res = validateApplyForJobDetails(candidateDetails);
    const { error } = res;
    if (error) {
      setIsValidate(true);
      // const { details } = error;
      // setErrors(() => {
      //   return {
      //     [details[0].path[0]]: details[0].message,
      //   };
      // });
    } else setIsValidate(false);
  };

  return { onInputChange, onSubmit, candidateDetails, setFile, errorsMsg };
};
