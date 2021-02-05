import React from "react";
import classNames from "classnames";

import leftBulbs from "static/png/bulbs-left.png";
import leftBulbsHover from "static/png/bulbs-left-hover.png";
import rightBulbs from "static/png/bulbs-right.png";
import rightBulbsHover from "static/png/bulbs-right-hover.png";
import topBulbs from "static/png/bulbs-top.png";
import topBulbsHover from "static/png/bulbs-top-hover.png";
import WhiteCircle from "components/atoms/WhiteCircle";
import bg from "static/svg/service-bg.svg";
import bgHover from "static/svg/service-bg-hover.svg";

import { text } from "./text";

import "./index.scss";

const TextItem = ({ title, content }) => (
  <div className="text-item">
    <h5>{title}</h5>
    <p>{content}</p>
  </div>
);

const Service = ({ mask }) => {
  return (
    <section
      className={classNames("section-service", !mask ? "mask" : "")}
      style={{ backgroundImage: `url(${!mask ? bg : bgHover})` }}
    >
      <div className="service-bulbs-top">
        {!mask && <img src={topBulbs} alt="上方的燈泡" />}
        {mask && <img src={topBulbsHover} alt="上方的燈泡" />}
      </div>
      <div className="service-text">
        <h2>
          與孩子共創
          <br />
          更好的世界
        </h2>
        <p>
          我們相信
          <br />
          每個孩子都是未來世界組成的一份子
          <br />
          幫助孩子成為更好的人
          <br />
          世界就會更美好、就有無限可能
          <br />
          我們一起與孩子共創一個更好的世界！
        </p>
      </div>
      <div className="service-bulbs-left">
        {!mask && <img src={leftBulbs} alt="左邊的燈泡" />}
        {mask && <img src={leftBulbsHover} alt="左邊的燈泡" />}
      </div>
      <div className="service-bulbs-right">
        {!mask && <img src={rightBulbs} alt="拿著燈泡的角色們" />}
        {mask && <img src={rightBulbsHover} alt="拿著燈泡的角色們" />}
      </div>
      <WhiteCircle />
      <div className="service-construction">
        <div className="bg-circle" />
        <WhiteCircle />
        <h3>三大服務架構</h3>
        {text.map((e) => (
          <TextItem title={e.title} content={e.content} key={e.id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
