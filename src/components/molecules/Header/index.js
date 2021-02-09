/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "components/atoms/Logo";
import classNames from "classnames";
import pattern from "static/pattern/logoPattern.png";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import "./index.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { width } = useSelector((state) => state.global);
  const [menuVisible, setMenuVisible] = useState(false);

  const [y, setY] = useSpring(() => ({
    immediate: false,
    config: { duration: 500, easing: easings.easeCubic },
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  const scrollToSection = (num) => {
    const sections = document.querySelectorAll("section");
    setY({
      y: sections[num].getBoundingClientRect().top + window.pageYOffset - 80,
      reset: true,
      from: { y: window.pageYOffset },
    });
  };

  return (
    <nav className="header">
      <div className="header-inner">
        <Logo
          isLong
          onClick={() => {
            scrollToSection(0);
          }}
        />
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
        <li
          onClick={() => {
            scrollToSection(1);
            setMenuVisible(false);
          }}
          onKeyDown={() => {}}
        >
          展演活動
        </li>
        <li
          onClick={() => {
            scrollToSection(2);
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
