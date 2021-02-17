import React from "react";
import classNames from "classnames";

import WhiteCircle from "components/atoms/WhiteCircle";
// import poster from "static/png/kv-banner.png";
// import posterHover from "static/png/kv-banner-hover.png";
// import mobilePoster from "static/png/mobile-kv-banner.png";
import { ReactComponent as BgShape } from "static/svg/event-bg.svg";
import { ReactComponent as BgShapeHover } from "static/svg/event-bg-hover.svg";
import mobileBg from "static/svg/mobile-cover-bg.svg";
import mobileBgHover from "static/svg/mobile-cover-bg-hover.svg";
import circle from "static/svg/cover-circle.svg";
import circleHover from "static/svg/cover-circle-hover.svg";

import "./index.scss";

const Cover = ({ mask }) => {
  return (
    <section className={classNames("section-cover", mask ? "mask" : "")}>
      <div
        className="cover-poster"
        style={{ clipPath: `ellipse(80% 50% at 50% 50%)` }}
      >
        {/* {!mask && <img src={poster} alt="兒童節海報" />}
        {mask && <img src={posterHover} alt="兒童節海報" />}
        <img src={mobilePoster} alt="兒童節海報" /> */}
        <div
          className="img"
          style={{ backgroundImage: `url(https://picsum.photos/1920/1920)` }}
        />
      </div>
      <div className="event-title">
        <div className="date">
          <span>2021.04.01</span>
          <span className="line" />
          <span>2021.04.30</span>
        </div>
        <h1>兒童節展覽</h1>
        <span className="location">華山1914文化創意產業園區</span>
      </div>
      {!mask && (
        <img src={mobileBg} className="mobile-cover-bg ab-pos" alt="背景" />
      )}
      {mask && (
        <img
          src={mobileBgHover}
          className="mobile-cover-bg ab-pos"
          alt="背景"
        />
      )}
      {!mask && (
        <img src={circle} className="cover-circle ab-pos" alt="背景圓形" />
      )}
      {mask && (
        <img src={circleHover} className="cover-circle ab-pos" alt="背景圓形" />
      )}
      <WhiteCircle classname="ab-pos" />
      {!mask && <BgShape className="cover-bg ab-pos" />}
      {mask && <BgShapeHover className="cover-bg ab-pos" />}
    </section>
  );
};

export default Cover;
