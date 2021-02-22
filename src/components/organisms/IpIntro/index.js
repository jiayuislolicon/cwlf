import React, { useRef, useState, useEffect } from "react";
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

const IntroItem = ({
  item,
  img,
  imgHover,
  mask,
  classname,
  alt,
  width,
  height,
}) => (
  <div className={classNames("intro-item", classname)}>
    <IpIntroCircle item={item} mask={mask} />
    <div className="character">
      {!mask && <img src={img} alt={alt} width={width} height={height} />}
      {mask && <img src={imgHover} alt={alt} width={width} height={height} />}
    </div>
  </div>
);

const IpIntro = ({ mask, offset }) => {
  const ipIntroRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const { top } = ipIntroRef.current.getBoundingClientRect();
    const sectionTop = top + offset;

    if (offset >= sectionTop - 600) setAnimate(true);
  }, [offset]);
  return (
    <section
      className={classNames("section-ip-intro", animate ? "animate" : "")}
      ref={ipIntroRef}
    >
      <div className="overflow-wrapper">
        <h2>吉祥物登場</h2>
      </div>
      <div className="ip-intro-wrapper">
        <IntroItem
          item="puff"
          img={puffman}
          imgHover={puffmanHover}
          mask={mask}
          classname="puff"
          alt="泡福"
          width="594"
          height="1378"
        />
        <IntroItem
          item="heart"
          img={heartman}
          imgHover={heartmanHover}
          mask={mask}
          classname="heart"
          alt="心仔"
          width="644"
          height="1000"
        />
        <div className="love-word ab-center">
          {!mask && (
            <img
              src={loveword}
              alt="BigLoveforLittleOnes"
              width="624"
              height="479"
            />
          )}
          {mask && (
            <img
              src={lovewordHover}
              alt="BigLoveforLittleOnes"
              width="624"
              height="479"
            />
          )}
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
