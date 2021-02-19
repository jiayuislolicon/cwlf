/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from "react";
import Logo from "components/atoms/Logo";
import classNames from "classnames";
import pattern from "static/pattern/logoPattern.png";
import { useDispatch, useSelector } from "react-redux";

import { setMovingPos } from "actions/global";
import "./index.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { width } = useSelector((state) => state.global);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (menuVisible) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "hidden auto";
    }
  }, [menuVisible]);

  return (
    <nav className="header">
      <div className="header-inner">
        <Logo
          isLong
          onClick={() => {
            dispatch(setMovingPos("top"));
          }}
        />
        <div
          className={classNames("hamburger-btn", menuVisible ? "cross" : "")}
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
        <li
          onClick={() => {
            dispatch(setMovingPos("events"));
            setMenuVisible(false);
          }}
          onKeyDown={() => {}}
        >
          展演活動
        </li>
        <li
          onClick={() => {
            dispatch(setMovingPos("intro"));
            setMenuVisible(false);
          }}
          onKeyDown={() => {}}
        >
          關於兒福聯盟
        </li>
        {/* <li>
          三十週年展覽
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
