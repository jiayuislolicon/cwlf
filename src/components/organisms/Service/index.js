import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import WhiteCircle from "components/atoms/WhiteCircle";

import leftBulbs from "static/png/bulbs-left.png";
import leftBulbsHover from "static/png/bulbs-left-hover.png";
import rightBulbs from "static/png/bulbs-right.png";
import rightBulbsHover from "static/png/bulbs-right-hover.png";
import topBulbs from "static/png/bulbs-top.png";
import topBulbsHover from "static/png/bulbs-top-hover.png";
import service1 from "static/jpg/service-1.jpg";
import service2 from "static/jpg/service-2.jpg";

import bg from "static/svg/service-bg.svg";
import bgHover from "static/svg/service-bg-hover.svg";
import mobileBg from "static/svg/mobile-service-bg.svg";
import mobileBgHover from "static/svg/mobile-service-bg-hover.svg";
import { ReactComponent as TopBg } from "static/svg/character-bg-top.svg";
import { ReactComponent as TopBgHover } from "static/svg/character-bg-top-hover.svg";
import { ReactComponent as MobileTopBg } from "static/svg/mobile-character-bg-top.svg";
import { ReactComponent as MobileTopBgHover } from "static/svg/mobile-character-bg-top-hover.svg";

import { text } from "./text";

import "./index.scss";

const TextItem = ({ title, content }) => (
  <div className="text-item">
    <h4>{title}</h4>
    <p>{content}</p>
  </div>
);

const Service = ({ mask, offset }) => {
  const { width } = useSelector((state) => state.global);
  const introRef = useRef(null);
  const serviceRef = useRef(null);
  const [introAnimate, setIntroAnimate] = useState(false);
  const [serviceAnimate, setServiceAnimate] = useState(false);

  useEffect(() => {
    const introTop = introRef.current.getBoundingClientRect().top;
    const introY = introTop + offset;

    if (offset >= introY - 300) setIntroAnimate(true);

    const serviceTop = serviceRef.current.getBoundingClientRect().top;
    const serviceY = serviceTop + offset;

    if (offset >= serviceY - 550) setServiceAnimate(true);
  }, [offset]);
  return (
    <section
      className={classNames("section-service", mask ? "mask" : "")}
      style={{
        backgroundImage:
          width >= 1024
            ? `url(${!mask ? bg : bgHover})`
            : `url(${!mask ? mobileBg : mobileBgHover})`,
      }}
      ref={introRef}
    >
      <div className="service-bulbs-top">
        {!mask && <img src={topBulbs} alt="燈泡" width="734" height="276" />}
        {mask && (
          <img src={topBulbsHover} alt="燈泡" width="734" height="276" />
        )}
      </div>
      <div
        className={classNames(
          "service-intro-top",
          introAnimate ? "animate" : ""
        )}
      >
        <div className="service-text">
          <div className="overflow-wrapper">
            <h2>
              與孩子共創
              <br />
              更好的世界
            </h2>
          </div>
          <div className="overflow-wrapper">
            <p>
              我們相信
              <br />
              每個孩子都是未來世界組成的一份子
              <br />
              幫助孩子成為更好的人
              <br />
              世界就會更美好、就有無限可能
              <br />
              我們一起與孩子共創更好的世界！
            </p>
          </div>
        </div>
        <div className="service-imgs">
          <div className="service-imgs-group">
            <img
              src={service1}
              className="radius-img"
              alt="笑著的小孩子們"
              width="843"
              height="560"
            />
          </div>
          <div className="service-imgs-kid">
            <img
              src={service2}
              className="radius-img"
              alt="正在讀著書的幼兒"
              width="516"
              height="344"
            />
          </div>
          <div className="service-bulbs-right">
            {!mask && (
              <img
                src={rightBulbs}
                alt="拿著燈泡的角色們"
                width="1050"
                height="706"
              />
            )}
            {mask && (
              <img
                src={rightBulbsHover}
                alt="拿著燈泡的角色們"
                width="1050"
                height="706"
              />
            )}
          </div>
        </div>
        <div className="service-bulbs-left">
          {!mask && <img src={leftBulbs} alt="燈泡" width="848" height="954" />}
          {mask && (
            <img src={leftBulbsHover} alt="燈泡" width="848" height="954" />
          )}
        </div>
        <div className="service-bulbs-right">
          {!mask && (
            <img
              src={rightBulbs}
              alt="拿著燈泡的角色們"
              width="1050"
              height="706"
            />
          )}
          {mask && (
            <img
              src={rightBulbsHover}
              alt="拿著燈泡的角色們"
              width="1050"
              height="706"
            />
          )}
        </div>
        <WhiteCircle />
      </div>
      <div
        className={classNames(
          "service-construction",
          serviceAnimate ? "animate" : ""
        )}
        ref={serviceRef}
      >
        <div className="bg-circle ab-center" />
        <WhiteCircle />
        <div className="text-content-wrapper">
          <div className="overflow-wrapper">
            <h3>三大服務架構</h3>
          </div>
          <div className="text-item-wrapper">
            {text.map((e) => (
              <TextItem title={e.title} content={e.content} key={e.id} />
            ))}
          </div>
        </div>
      </div>
      {width >= 1024 && !mask && <TopBg className="ip-intro-bg" />}
      {width >= 1024 && mask && <TopBgHover className="ip-intro-bg" />}
      {width < 1024 && !mask && <MobileTopBg className="ip-intro-bg" />}
      {width < 1024 && mask && <MobileTopBgHover className="ip-intro-bg" />}
    </section>
  );
};

export default Service;
