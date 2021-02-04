import { useState, useEffect } from "react";

const useResize = (onResize = () => {}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleResize = () => {
    onResize();
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, windowHeight]);

  return {
    width: windowWidth,
    height: windowHeight,
  };
};

export default useResize;
