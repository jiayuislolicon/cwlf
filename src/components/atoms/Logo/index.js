import React from "react";
import { ReactComponent as LongLogo } from "static/svg/long-logo.svg";
import { ReactComponent as ShortLogo } from "static/svg/short-logo.svg";
import "./index.scss";

const Logo = ({ isLong, isShort, onClick }) => {
  return (
    <div
      className="logo"
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex="0"
    >
      {isLong && <LongLogo />}
      {isShort && <ShortLogo />}
    </div>
  );
};

export default Logo;
