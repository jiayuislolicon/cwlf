import React from "react";
import classNames from "classnames";

import heartman from "static/png/character-heart.png";
import heartmanHover from "static/png/character-heart-hover.png";
import puffman from "static/png/character-puff.png";
import puffmanHover from "static/png/character-puff-hover.png";
import IpIntroCircle from "components/atoms/IpIntroCircle";
import {ReactComponent as TopBg} from "static/svg/character-bg-top.svg";
import bottomBg from "static/svg/character-bg.svg";
import bottomBgHover from "static/svg/character-bg-hover.svg";

import "./index.scss";

const IntroItem = ({ item, img, imgHover, mask, classname }) => (
  <div className={classNames('intro-item', classname)}>
    <IpIntroCircle item={item} />
    <div className="character">
      {!mask && <img src={img} alt="" />}
      {mask && <img src={imgHover} alt="" />}
    </div>
  </div>
);

const IpIntro = ({ mask }) => {
  return (
    <section className="ip-intro">
      <TopBg className="ip-intro-bg" />
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
      </div>
      <div
        className="intro-hearts-bg"
        style={{ backgroundImage: `url(${!mask ? bottomBg : bottomBgHover})` }}
      />
    </section>
  );
};

export default IpIntro;
