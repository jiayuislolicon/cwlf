import React from "react";
import classNames from "classnames";
import characters from "static/png/heart-characters.png";
import charactersHover from "static/png/heart-characters-hover.png";
import heartBg from "static/svg/heart-bg.svg";
import heartBgHover from "static/svg/heart-bg-hover.svg";
import aboutHeartHover from "static/png/about-left-heart-hover.png";
import aboutHeart from "static/png/about-left-heart.png";
import aboutGroup from "static/png/about-group.png";
import aboutPuff from "static/png/about-right-puff.png";
import aboutPuffHover from "static/png/about-right-puff-hover.png";

import logoBg from "static/svg/logointro-bg.svg";
import logoBgHover from "static/svg/logointro-bg-hover.svg";

import "./index.scss";

const Intro = ({ mask }) => {
  return (
    <section className="section-intro">
      <img className="intro-heart-bg" src={`${!mask ? heartBg : heartBgHover}`} alt=""/>
      <div className="top-characters">
        {!mask && <img src={characters} alt="上面角色" />}
        {mask && <img src={charactersHover} alt="上面角色" />}
      </div>
      <div className="content-wrapper">
        <div className={classNames("intro-text", mask ? "mask" : "")}>
          <h2>
            穿越兒盟的
            <br />
            過去與未來
          </h2>
          <p>
            兒福聯盟在台灣尚無兒童保護法令的年代成立，從「給孩子一個更好的世界」到「與孩子共創更好的世界」的願景轉變，三十年來，我們秉持初衷，始終是服務與倡議雙軌並進的兒少組織，敏銳地發現新的兒童需求，也深知台灣兒童已有潛能改造世界。
            <br />
            <br />
            與時俱進，是兒福聯盟不變的組織基因和工作態度。過去我們重視物質補給、家庭功能和情感支持，面對科技網路時代，終身學習是人類的基本能力，兒盟將加強重視培育照顧者成為育兒家，與社會共同打造創傷知情的環境，讓所有的兒童達到認識自己，愛己愛人，為社會公益付出的境界。
          </p>
        </div>
        <div className="intro-image">
          <div className="image-left">
            {!mask && <img src={aboutHeart} alt="左邊的心仔" />}
            {mask && <img src={aboutHeartHover} alt="左邊的心仔" />}
          </div>
          <img className="image-center" src={aboutGroup} alt="團體照" />
          <div className="image-right">
            {!mask && <img src={aboutPuff} alt="右邊的泡福" />}
            {mask && <img src={aboutPuffHover} alt="右邊的泡福" />}
          </div>
        </div>
      </div>
      <div className="next-section-bg">
        {!mask && <img src={logoBg} alt="logo區域的背景"/>}
        {mask && <img src={logoBgHover} alt="logo區域的背景"/>}
      </div>
    </section>
  );
};

export default Intro;
