import React from "react";
import classNames from "classnames";
import TimeTag from "components/atoms/TimeTag";
import CircleBtn from "components/atoms/CircleBtn";
import character1 from "static/png/event-character-01.png";
import character2 from "static/png/event-character-02.png";
import character3 from "static/png/event-character-03.png";
import character4 from "static/png/event-character-04.png";

import "./index.scss";

const characterPic = [character1, character2, character3, character4];

const EventItem = ({ title, imgSrc, mask, characterNum, characterDisplay }) => {
  return (
    <div className="event-item">
      <div
        className={classNames("cover", mask ? "mask" : "")}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <TimeTag month="2" day="28" year="2020" className="tag" />
        {characterDisplay && (
          <img
            className={`deco-${characterNum}`}
            src={characterPic[characterNum]}
            alt="躲起來的小人物"
          />
        )}
      </div>
      <div className="event-title-wrapper">
        <h4>{title}</h4>
        <CircleBtn />
      </div>
    </div>
  );
};

export default EventItem;
