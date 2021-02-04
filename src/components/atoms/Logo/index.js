import React from "react";
import { ReactComponent as LongLogo } from "static/svg/long-logo.svg";
import { ReactComponent as ShortLogo } from "static/svg/short-logo.svg";
import "./index.scss";

const Logo = ({ isLong, isShort }) => {
  return (
    <div className="logo">
      {isLong && <LongLogo />}
      {isShort && <ShortLogo />}
    </div>
  );
};

export default Logo;
