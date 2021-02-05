import React from "react";
import heartman from "static/png/character-heart.png";
import heartmanHover from "static/png/character-heart-hover.png";
import puffman from "static/png/character-puff.png";
import puffmanHover from "static/png/character-puff-hover.png";
import IntroBg from "components/atoms/IntroBg";
import TopBg from "static/svg/character-bg-top.svg";
import bottomBg from "static/svg/character-bg.svg";
import bottomBgHover from "static/svg/character-bg-hover.svg";
import "./index.scss";

const IntroItem = ({ item, img, imgHover, mask }) => (
  <div className="intro-item">
    <IntroBg item={item} />
    <div className="character">
      {!mask && <img src={img} alt="" />}
      {mask && <img src={imgHover} alt="" />}
    </div>
  </div>
);

const IpIntro = ({ mask }) => {
  return (
    <div className="ip-intro">
      <TopBg />
      <h2>吉祥物登場</h2>
      <IntroItem
        item="puff"
        img={puffman}
        imgHover={puffmanHover}
        mask={mask}
      />
      <IntroItem
        item="heart"
        img={heartman}
        imgHover={heartmanHover}
        mask={mask}
      />
      <div
        className="bg"
        style={{ backgroundImage: `url(${!mask ? bottomBg : bottomBgHover})` }}
      />
    </div>
  );
};

export default IpIntro;
