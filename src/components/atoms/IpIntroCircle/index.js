import React from "react";
import classNames from "classnames";
import heart from "static/png/character-info-heart.png";
import heartHover from "static/png/character-info-heart-hover.png";
import puff from "static/png/character-info-puff.png";
import puffHover from "static/png/character-info-puff-hover.png";
import "./index.scss";

const IpIntroCircle = ({ item, mask }) => {
  return (
    <div className={classNames("ip-intro-circle", item)}>
      {item === "heart" && !mask && (
        <img
          src={heart}
          alt="裝飾用愛心"
          className="heart ab-center"
          width="312"
          height="270"
        />
      )}
      {item === "heart" && mask && (
        <img
          src={heartHover}
          alt="裝飾用愛心"
          className="heart ab-center"
          width="312"
          height="270"
        />
      )}
      {item === "puff" && !mask && (
        <img
          src={puff}
          alt="裝飾用泡福頭剪影"
          className="puff ab-center"
          width="312"
          height="312"
        />
      )}
      {item === "puff" && mask && (
        <img
          src={puffHover}
          alt="裝飾用泡福頭剪影"
          className="puff ab-center"
          width="312"
          height="312"
        />
      )}
      {item === "puff" && (
        <div className="text ab-center">
          <h3 className="jf-openhuninn">泡福</h3>
          <h4>孩子的守護者</h4>
          <p>
            溫柔而堅毅，熱心又專業
            <br />
            總是支持需要幫助與關懷的孩子
            <br />
            擁有召喚愛的超能力
          </p>
        </div>
      )}
      {item === "heart" && (
        <div className="text ab-center">
          <h3 className="jf-openhuninn">心仔</h3>
          <h4>愛的超能力</h4>
          <p>
            愛的力量無限大
            <br />
            心仔就像社會大眾守護孩子的愛
            <br />
            代替大家傳遞愛的能量
          </p>
        </div>
      )}
    </div>
  );
};

export default IpIntroCircle;
