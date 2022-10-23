/**
 * This function stop the flow of code for the given time.
 * @param time Take time as mili seconds, like:- 1000
 * @returns return promise after given time.
 */
export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

/**
 *
 * @param id Id of element like:- "main-div"
 * @param handleLeftSlide This function call when the left slide event occur on screen.
 * @param handleRightSlide This function call when the right slide event occur on screen.
 */
export const handleSlider = (
  id: any,
  handleLeftSlide: () => void,
  handleRightSlide: () => void
) => {
  const pricing = document.getElementById(id);

  pricing.addEventListener("touchstart", handleTouchStart, false);
  pricing.addEventListener("touchmove", handleTouchMove, false);

  let xDown: any = null;
  let yDown: any = null;

  function getTouches(evt: any) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt: any) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: any) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleLeftSlide();
      } else {
        handleRightSlide();
      }
    }
    xDown = null;
    yDown = null;
  }
};

/**
 * This function generate a random number on the bases of arguments.
 * @param min Lowest point of a random number.
 * @param max Highest point of a random number.
 * @returns Return a random number on the bases of above arguments.
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function handleRightSlide(
  translatePosition: Array<number>,
  setTranslatePosition: (args: Array<number>) => void,
  getIndexOfActiveSlide: (args: Array<number>) => void
) {
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

export const redirectOnPricingSection = () => {
  const pricingBtn = document.getElementById("Pricing");
  pricingBtn.addEventListener("click", () => {
    const pricingSec = document.getElementById("pricingSec");
    const fromTop = pricingSec.offsetTop;
    window.scrollTo({
      top: fromTop,
      behavior: "smooth",
    });
  });
};
