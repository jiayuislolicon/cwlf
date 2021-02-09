import React from "react";
import classNames from "classnames";
import "./index.scss";

const TimeTag = ({ className, startMonth, startDay, endMonth, endDay }) => {
  return (
    <div className={classNames("time-tag", className)}>
      <div className="date">
        <span className="number">{String(startMonth).padStart(2, "0")}</span>
        <div className="circle" />
        <span className="number">{String(startDay).padStart(2, "0")}</span>
      </div>
      <div className="vertical-line" />
      <div className="date">
        <span className="number">{String(endMonth).padStart(2, "0")}</span>
        <div className="circle" />
        <span className="number">{String(endDay).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default TimeTag;
