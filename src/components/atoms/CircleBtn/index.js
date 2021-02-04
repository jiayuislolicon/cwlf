import React from "react";
import classNames from "classnames";
import { ReactComponent as Cross } from "static/svg/cross.svg";
import "./index.scss";

const CircleBtn = ({ classname }) => {
  return (
    <div className={classNames("circle-btn", classname)}>
      <Cross className="ab-center" />
    </div>
  );
};

export default CircleBtn;
