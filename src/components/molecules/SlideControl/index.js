import React from "react";
import { ReactComponent as Arrow } from "static/svg/arrow.svg";
import "./index.scss";

const SlideControl = () => {
  return (
    <div className="slide-control">
      <Arrow className="arrow arrow-left" />
      <div className="slide-num">
        <span className="now-num">1</span>
        <div className="slash" />
        <span className="total-num en">10</span>
      </div>
      <Arrow className="arrow arrow-right" />
    </div>
  );
};

export default SlideControl;
