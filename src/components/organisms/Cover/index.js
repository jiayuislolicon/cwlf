import React from "react";
import classNames from "classnames";

import WhiteCircle from "components/atoms/WhiteCircle";
// import posterHover from "static/png/kv-banner-hover.png";
import { ReactComponent as CoverMask } from "static/svg/cover-mask.svg";
import { ReactComponent as CoverShape } from "static/svg/cover-shape.svg";
import posterHover from "static/svg/kv-banner-hover.svg";
import bgShape from "static/svg/event-bg.svg";
import bgShapeHover from "static/svg/event-bg-hover.svg";
import mobileBg from "static/svg/mobile-cover-bg.svg";
import mobileBgHover from "static/svg/mobile-cover-bg-hover.svg";
import circle from "static/svg/cover-circle.svg";
import circleHover from "static/svg/cover-circle-hover.svg";

import "./index.scss";
import { useSelector } from "react-redux";

const Cover = ({ mask }) => {
  const { width } = useSelector((state) => state.global);
  return (
    <section className={classNames("section-cover", mask ? "mask" : "")}>
      <div className="cover-wrapper">
        <CoverMask className="cover-mask" />
        <CoverShape className="cover-shadow" />
        <div
          className="cover-poster"
          style={{
            clipPath:
              width >= 1024
                ? `url(#cover-mask)`
                : `ellipse(80% 50% at 50% 50%)`,
            WebkitClipPath:
              width >= 1024
                ? `url(#cover-mask)`
                : `ellipse(80% 50% at 50% 50%)`,
          }}
        >
          {!mask && (
            <div
              className="main-poster img"
              style={{
                backgroundImage: `url(https://picsum.photos/1920/1920)`,
              }}
            />
          )}
          {mask && (
            <div
              className="mask-poster img"
              style={{ backgroundImage: `url(${posterHover})` }}
            />
          )}
        </div>
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
      {!mask && <img src={bgShape} className="cover-bg ab-pos" alt="背景" />}
      {mask && (
        <img src={bgShapeHover} className="cover-bg ab-pos" alt="背景" />
      )}
    </section>
  );
};

export default Cover;
