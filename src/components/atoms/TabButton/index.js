import React from "react";
import classNames from "classnames";
import "./index.scss";

const TabButton = ({ text, isNow }) => {
  return (
    <div className={classNames("tab-button", isNow ? "now" : "")}>
      <h5>{text}</h5>
    </div>
  );
};

export default TabButton;
