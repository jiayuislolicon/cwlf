import React, { useState } from "react";
import Logo from "components/atoms/Logo";
import classNames from "classnames";
import pattern from "static/pattern/logoPattern.png";

import "./index.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { width } = useSelector((state) => state.global);
  return (
    <nav className="header">
      <div className="header-inner">
        <Logo isLong />
        <div
          className="hamburger-btn"
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <ul
        className={classNames("menu", menuVisible ? "visible" : "")}
        style={{ backgroundImage: width >= 1024 ? "none" : `url(${pattern})` }}
      >
        <li>展演活動</li>
        <li>關於兒福聯盟</li>
        <li>三十週年展覽</li>
      </ul>
    </nav>
  );
};

export default Header;
