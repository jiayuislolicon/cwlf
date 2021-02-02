import React from "react";
// import { link } from "react-router-dom";
import "./index.scss";

const IntroBg = ({ item, className }) => {
  return (
    <div className={`intro-bg ${className} ${item}`}>
      {item === "heart" && (
        <img
          src={`${process.env.PUBLIC_URL}/png/character-info-heart.png`}
          alt="heart"
          className="heart"
        />
      )}
      {item === "heart" && (
        <img
          src={`${process.env.PUBLIC_URL}/png/character-info-heart-hover.png`}
          alt="heart"
          className="heart"
        />
      )}
      {item === "puff" && (
        <img
          src={`${process.env.PUBLIC_URL}/png/character-info-puff.png`}
          alt="puff"
          className="puff"
        />
      )}
      {item === "puff" && (
        <img
          src={`${process.env.PUBLIC_URL}/png/character-info-puff-hover.png`}
          alt="puff"
          className="puff"
        />
      )}
      <div className="text">
        <h3 className="jf-openhuninn">心仔</h3>
        <h4>愛的超能力</h4>
        <p>
          兒福成為孩子的指引
          <br />
          熱心且溫柔的個性
          <br />
          總是呼朋引伴招喚愛
          <br />
          支援需要幫助與關懷的孩子
        </p>
      </div>
    </div>
  );
};

export default IntroBg;
