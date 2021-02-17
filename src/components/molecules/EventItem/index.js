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

const EventItem = ({
  title,
  imgSrc,
  mask,
  characterNum,
  characterDisplay,
  onClick,
}) => {
  return (
    <div className={classNames("event-item", mask ? "mask" : "")}>
      <div
        className="cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
        data-mouse="bigger"
      >
        <TimeTag
          startMonth="1"
          startDay="2"
          endMonth="1"
          endDay="2"
          className="tag"
        />
        {mask && characterDisplay && (
          <img
            className={`deco-${characterNum}`}
            src={characterPic[characterNum]}
            alt="躲起來的小人物"
          />
        )}
      </div>
      <div className="event-title-wrapper" data-mouse="bigger">
        <h4>{title}</h4>
        <CircleBtn onClick={onClick} />
      </div>
    </div>
  );
};

export default EventItem;
