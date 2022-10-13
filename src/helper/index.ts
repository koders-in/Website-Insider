export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

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
        console.log("right swipe", xDown, yDown);
        handleLeftSlide();
      } else {
        handleRightSlide();
      }
    }
    xDown = null;
    yDown = null;
  }
};
