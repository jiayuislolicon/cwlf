import React from "react";
import { ReactComponent as Heart } from "static/svg/btn-heart.svg";
import { ReactComponent as ShareIcon } from "static/svg/icon-share.svg";
import "./index.scss";

const ShapeButton = (onClick) => {
  return (
    <div
      className="shape-button"
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex="0"
    >
      <Heart className="heart" />
      <ShareIcon className="share ab-center" />
    </div>
  );
};

export default ShapeButton;
