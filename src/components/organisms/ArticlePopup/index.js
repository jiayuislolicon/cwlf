import React from "react";
// import classNames from "classnames";
import TimeTag from "components/atoms/TimeTag";
import Cross from "components/atoms/Cross";
import ShapeButton from "components/atoms/ShapeButton";

import "./index.scss";

const ArticlePopup = () => {
  return (
    <div className="article-popup">
      <Cross />
      <div className="content-wrapper">
        <img src="" alt="" />
        <h4>第十屆兒童節親子活動「兒童月Online」－台中</h4>
        <p>
          將品牌識別標誌在不同媒介運用時，會使用到之色彩或配色，提供統一的標準色號，便於未來應用在其他延伸項目；如CMYK色號用於印刷使用、RGB色號用於電腦螢幕觀看使用、PANTONE色號用於特別專色使用、HEX色號用於網站設計使用。
        </p>
        <img src="" alt="" />
      </div>
      <div className="list-btn">
        <TimeTag />
        <div className="event-tag">兒童節</div>
        <ShapeButton />
      </div>
    </div>
  );
};

export default ArticlePopup;
