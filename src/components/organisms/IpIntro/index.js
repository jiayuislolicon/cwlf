import React from "react";
import classNames from "classnames";

import IpIntroCircle from "components/atoms/IpIntroCircle";

import heartman from "static/png/character-heart.png";
import heartmanHover from "static/png/character-heart-hover.png";
import puffman from "static/png/character-puff.png";
import puffmanHover from "static/png/character-puff-hover.png";
import loveword from "static/svg/big-love.svg";
import lovewordHover from "static/svg/big-love-hover.svg";
import bottomBg from "static/svg/character-bg.svg";
import bottomBgHover from "static/svg/character-bg-hover.svg";

import "./index.scss";


const IntroItem = ({ item, img, imgHover, mask, classname }) => (
  <div className={classNames('intro-item', classname)}>
    <IpIntroCircle item={item} mask={mask} />
    <div className="character">
      {!mask && <img src={img} alt="" />}
      {mask && <img src={imgHover} alt="" />}
    </div>
  </div>
);

const IpIntro = ({ mask }) => {
  return (
    <section className="section-ip-intro">
      <h2>吉祥物登場</h2>
      <div className="ip-intro-wrapper">
        <IntroItem
          item="puff"
          img={puffman}
          imgHover={puffmanHover}
          mask={mask}
          classname="puff"
        />
        <IntroItem
          item="heart"
          img={heartman}
          imgHover={heartmanHover}
          mask={mask}
          classname="heart"
        />
        <div className="love-word ab-center">
          {!mask && <img src={loveword} alt="文字"/>}
          {mask && <img src={lovewordHover} alt="文字"/>}
        </div>
      </div>
      <div
        className="intro-hearts-bg"
        style={{ backgroundImage: `url(${!mask ? bottomBg : bottomBgHover})` }}
      />
    </section>
  );
};

export default IpIntro;
