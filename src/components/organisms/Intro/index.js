import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import characters from "static/png/heart-characters.png";
import charactersHover from "static/png/heart-characters-hover.png";
import aboutHeartHover from "static/png/about-left-heart-hover.png";
import aboutHeart from "static/png/about-left-heart.png";
import aboutGroup from "static/png/about-group.png";
import aboutPuff from "static/png/about-right-puff.png";
import aboutPuffHover from "static/png/about-right-puff-hover.png";

import heartBg from "static/svg/heart-bg.svg";
import heartBgHover from "static/svg/heart-bg-hover.svg";
import logoBg from "static/svg/logointro-bg.svg";
import logoBgHover from "static/svg/logointro-bg-hover.svg";
import mobileLogoBg from "static/svg/mobile-logoIntro-bg.svg";
import mobileLogoBgHover from "static/svg/mobile-logoIntro-bg-hover.svg";

import "./index.scss";
import { useSelector } from "react-redux";

const Intro = ({ mask, offset }) => {
  const introRef = useRef(null);
  const imgRef = useRef(null);
  const { width } = useSelector((state) => state.global);
  const [animate, setAnimate] = useState(false);
  const [imgAnimate, setImgAnimate] = useState(false);

  useEffect(() => {
    const { top } = introRef.current.getBoundingClientRect();
    const sectionTop = top + offset;

    if (offset >= sectionTop - 200) setAnimate(true);

    const imgTop = imgRef.current.getBoundingClientRect().top;
    const imgY = imgTop + offset;

    if (offset >= imgY - 500) setImgAnimate(true);
  }, [offset]);

  return (
    <section
      className={classNames(
        "section-intro",
        mask ? "mask" : "",
        animate ? "animate" : ""
      )}
      ref={introRef}
    >
      <img
        className="intro-heart-bg"
        src={`${!mask ? heartBg : heartBgHover}`}
        alt="背景愛心"
      />
      <div className="top-characters">
        {!mask && <img src={characters} alt="上面角色" />}
        {mask && <img src={charactersHover} alt="上面角色" />}
      </div>
      <div className="content-wrapper">
        <div className="intro-text">
          <div className="overflow-wrapper">
            <h2>
              穿越兒盟的
              <br />
              過去與未來
            </h2>
          </div>
          <div className="overflow-wrapper">
            <p>
              兒福聯盟在台灣尚無兒童保護法令的年代成立，從「給孩子一個更好的世界」到「與孩子共創更好的世界」的願景轉變，三十年來，我們秉持初衷，始終是服務與倡議雙軌並進的兒少組織，敏銳地發現新的兒童需求，也深知台灣兒童已有潛能改造世界。
            </p>
          </div>
          <br />
          <br />
          <div className="overflow-wrapper">
            <p>
              與時俱進，是兒福聯盟不變的組織基因和工作態度。過去我們重視物質補給、家庭功能和情感支持，面對科技網路時代，終身學習是人類的基本能力，兒盟將加強重視培育照顧者成為育兒家，與社會共同打造創傷知情的環境，讓所有的兒童達到認識自己，愛己愛人，為社會公益付出的境界。
            </p>
          </div>
        </div>
        <div
          className={classNames("intro-image", imgAnimate ? "animate" : "")}
          ref={imgRef}
        >
          <div className="image-left">
            {!mask && <img src={aboutHeart} alt="左邊的心仔" />}
            {mask && <img src={aboutHeartHover} alt="左邊的心仔" />}
          </div>
          <div className="image-center">
            <img src={aboutGroup} alt="團體照" />
          </div>
          <div className="image-right">
            {!mask && <img src={aboutPuff} alt="右邊的泡福" />}
            {mask && <img src={aboutPuffHover} alt="右邊的泡福" />}
          </div>
        </div>
      </div>
      <div className="next-section-bg">
        {!mask && width >= 1024 && <img src={logoBg} alt="logo區域的背景" />}
        {mask && width >= 1024 && (
          <img src={logoBgHover} alt="logo區域的背景" />
        )}
        {!mask && width < 1024 && (
          <img src={mobileLogoBg} alt="logo區域的背景" />
        )}
        {mask && width < 1024 && (
          <img src={mobileLogoBgHover} alt="logo區域的背景" />
        )}
      </div>
    </section>
  );
};

export default Intro;
