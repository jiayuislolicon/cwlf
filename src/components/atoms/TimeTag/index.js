import React from "react";
import classNames from "classnames";
import "./index.scss";

const TimeTag = ({ className, month, day, year }) => {
  return (
    <div className={classNames("time-tag", className)}>
      <div className="date">
        <span className="number">{String(month).padStart(2, "0")}</span>
        <div className="circle" />
        <span className="number">{String(day).padStart(2, "0")}</span>
      </div>
      <span className="number year">{year}</span>
    </div>
  );
};

export default TimeTag;
