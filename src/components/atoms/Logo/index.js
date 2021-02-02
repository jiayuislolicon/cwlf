import React from "react";
// import { link } from "react-router-dom";
import "./index.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
    </div>
  );
};

export default Logo;
