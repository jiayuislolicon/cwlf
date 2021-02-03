import React from "react";
import { ReactComponent as LongLogo } from "static/svg/long-logo.svg";
import { ReactComponent as ShortLogo } from "static/svg/short-logo.svg";
import "./index.scss";

const Logo = () => {
  return (
    <div className="logo">
      <div className="long">
        <LongLogo />
        <ShortLogo />
      </div>
    </div>
  );
};

export default Logo;
