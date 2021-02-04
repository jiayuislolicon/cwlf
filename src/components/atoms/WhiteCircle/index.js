import React from "react";
import dot from "static/pattern/dotPattern.png";
import classNames from "classnames";
import "./index.scss";

const WhiteCircle = ({ classname }) => {
  return (
    <div
      className={classNames("white-circle", classname)}
      style={{ backgroundImage: `url(${dot})` }}
    />
  );
};

export default WhiteCircle;
