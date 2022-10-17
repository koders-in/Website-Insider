import { useState } from "react";
import { handleSlider } from ".";

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

  function onSlide(id: string) {
    handleSlider(id, handleLeftSlide, handleRightSlide);
  }

  return {
    onSlide,
    handleLeftSlide,
    handleRightSlide,
    getIndexOfActiveSlide,
    activeIndex,
    translatePosition,
  };
};
