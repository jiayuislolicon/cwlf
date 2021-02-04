import React from "react";
import { ReactComponent as Heart } from "static/svg/btn-heart.svg";
import { ReactComponent as ShareIcon } from "static/svg/icon-share.svg";
import "./index.scss";

const ShapeButton = () => {
  return (
    <div className="shape-button">
      <Heart className="heart" />
      <ShareIcon className="share" />
    </div>
  );
};

export default ShapeButton;
