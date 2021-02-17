import React from "react";
import classNames from "classnames";
import "./index.scss";

const CircleBtn = ({ classname, onClick }) => {
  return (
    <div
      className={classNames("circle-btn", classname)}
      data-mouse="bigger"
      onKeyDown={() => {}}
      role="button"
      tabIndex="0"
      onClick={onClick}
    >
      <div className="cross ab-center">
        <span className="horizon ab-center" />
        <span className="vertical ab-center" />
      </div>
    </div>
  );
};

export default CircleBtn;
