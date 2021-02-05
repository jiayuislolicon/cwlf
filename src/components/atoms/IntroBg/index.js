import React from "react";
import heart from "static/png/character-info-heart.png";
import heartHover from "static/png/character-info-heart-hover.png";
import puff from "static/png/character-info-puff.png";
import puffHover from "static/png/character-info-puff-hover.png";
import "./index.scss";

const IntroBg = ({ item, className }) => {
  return (
    <div className={`intro-bg ${className} ${item}`}>
      {item === "heart" && (
        <img src={heart} alt="heart" className="heart ab-center" />
      )}
      {item === "heart" && (
        <img src={heartHover} alt="heart" className="heart ab-center" />
      )}
      {item === "puff" && (
        <img src={puff} alt="puff" className="puff ab-center" />
      )}
      {item === "puff" && (
        <img src={puffHover} alt="puff" className="puff ab-center" />
      )}
      {item === "puff" && (
        <div className="text ab-center">
          <h3 className="jf-openhuninn">泡福</h3>
          <h4>孩子的守護者</h4>
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
      )}
      {item === "heart" && (
        <div className="text ab-center">
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
      )}
    </div>
  );
};

export default IntroBg;
