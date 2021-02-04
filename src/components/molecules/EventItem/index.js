import React from "react";
import classNames from "classnames";
import TimeTag from "components/atoms/TimeTag";
import CircleBtn from "components/atoms/CircleBtn";

import "./index.scss";

const EventItem = ({ className, title, imgSrc }) => {
  return (
    <div className={classNames("event-item", className)}>
      <div className="cover" style={{ backgroundImage: `url(${imgSrc})` }}>
        <TimeTag month="2" day="28" year="2020" className="tag" />
      </div>
      <div className="event-title-wrapper">
        <h4>{title}</h4>
        <CircleBtn />
      </div>
    </div>
  );
};

export default EventItem;
