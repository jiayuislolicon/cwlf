import React from "react";
import classNames from "classnames";
import "./index.scss";

const CircleBtn = ({ classname }) => {
  return (
    <div className={classNames("circle-btn", classname)}>
      <div className="cross ab-center">
        <span className="horizon ab-center" />
        <span className="vertical ab-center" />
      </div>
    </div>
  );
};

export default CircleBtn;
