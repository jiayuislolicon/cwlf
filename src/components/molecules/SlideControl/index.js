import React from "react";
import { ReactComponent as Arrow } from "static/svg/arrow.svg";
import "./index.scss";

const SlideControl = ({ nowNum, totalNum, leftClick, rightClick }) => {
  return (
    <div className="slide-control">
      <Arrow className="arrow arrow-left" onClick={leftClick} />
      <div className="slide-num">
        <span className="now-num">{String(nowNum).padStart(2, "0")}</span>
        <div className="slash" />
        <span className="total-num en">
          {String(totalNum).padStart(2, "0")}
        </span>
      </div>
      <Arrow className="arrow arrow-right" onClick={rightClick} />
    </div>
  );
};

export default SlideControl;
