import React from "react";
import classNames from 'classnames';
import heart from "static/png/character-info-heart.png";
import heartHover from "static/png/character-info-heart-hover.png";
import puff from "static/png/character-info-puff.png";
import puffHover from "static/png/character-info-puff-hover.png";
import "./index.scss";

const IpIntroCircle = ({ item, mask }) => {
  return (
    <div className={classNames('ip-intro-circle', item)}>
      {item === "heart" && !mask && (
        <img src={heart} alt="heart" className="heart ab-center" />
      )}
      {item === "heart" && mask && (
        <img src={heartHover} alt="heart" className="heart ab-center" />
      )}
      {item === "puff" && !mask && (
        <img src={puff} alt="puff" className="puff ab-center" />
      )}
      {item === "puff" && mask && (
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

export default IpIntroCircle;
