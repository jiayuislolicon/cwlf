import React from "react";
// import classNames from "classnames";
import TimeTag from "components/atoms/TimeTag";
import Cross from "components/atoms/Cross";
import ShapeButton from "components/atoms/ShapeButton";
import bg from "static/svg/innerPage-bg.svg";

import "./index.scss";

const ArticlePopup = ({ shareUrl, onClick }) => {
  return (
    <div className="article-popup">
      <Cross onClick={onClick} />
      <div className="content-wrapper">
        <img
          src="https://picsum.photos/625/418"
          className="article-cover"
          alt="封面"
        />
        <h4>第十屆兒童節親子活動「兒童月Online」－台中</h4>
        <p>
          將品牌識別標誌在不同媒介運用時，會使用到之色彩或配色，提供統一的標準色號，便於未來應用在其他延伸項目；如CMYK色號用於印刷使用、RGB色號用於電腦螢幕觀看使用、PANTONE色號用於特別專色使用、HEX色號用於網站設計使用。
        </p>
        <img src="https://picsum.photos/625/418" alt="測試" />
      </div>
      <div className="list-btns">
        <TimeTag
          startMonth="1"
          startDay="2"
          endMonth="1"
          endDay="2"
          year="2020"
        />
        <div className="event-tag">兒童節</div>
        <a
          href={`https://www.facebook.com/sharer.php?u=${shareUrl}`}
          rel="noreferrer"
          target="_blank"
        >
          <ShapeButton />
        </a>
      </div>
      <img src={bg} className="article-bg ab-center" alt="背景" />
    </div>
  );
};

export default ArticlePopup;
