import React from "react";
import { ReactComponent as Arrow } from "static/svg/arrow.svg";
import "./index.scss";

const SlideControl = ({ nowNum, totalNum }) => {
  return (
    <div className="slide-control">
      <Arrow className="arrow arrow-left" />
      <div className="slide-num">
        <span className="now-num">{String(nowNum).padStart(2, "0")}</span>
        <div className="slash" />
        <span className="total-num en">
          {String(totalNum).padStart(2, "0")}
        </span>
      </div>
      <Arrow className="arrow arrow-right" />
    </div>
  );
};

export default SlideControl;
