import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";
import classNames from "classnames";
import isMobile from "ismobilejs";

import Loading from "components/organisms/Loading";
import Cover from "components/organisms/Cover";
import EventsWrapper from "components/organisms/EventsWrapper";
import Intro from "components/organisms/Intro";
import IpIntro from "components/organisms/IpIntro";
import LogoIntro from "components/organisms/LogoIntro";
import Service from "components/organisms/Service";
import ArticlePopup from "components/organisms/ArticlePopup";

import "./index.scss";

const trans = (x, y, s, padding) => `circle(${s}px at ${x}px ${y - padding}px)`;

const Section = ({
  sectionRef,
  xys,
  nowScroll,
  originChildren,
  maskChildren,
  className,
  num,
}) => {
  return (
    <section className={classNames("container", className)}>
      <div className="container-content">{originChildren}</div>
      <animated.div
        className="container-mask"
        style={{
          clipPath:
            sectionRef.current !== null &&
            xys.interpolate((x, y, s) =>
              trans(
                x,
                y,
                s,
                sectionRef.current[num].getBoundingClientRect().top + nowScroll
              )
            ),
          WebkitClipPath:
            sectionRef.current !== null &&
            xys.interpolate((x, y, s) =>
              trans(
                x,
                y,
                s,
                sectionRef.current[num].getBoundingClientRect().top + nowScroll
              )
            ),
        }}
      >
        {maskChildren}
      </animated.div>
    </section>
  );
};

const Home = () => {
  const location = useLocation();
  const history = useHistory();
  const sectionRef = useRef(null);

  const [nowPageNum, setNowPageNum] = useState(null);
  const [nowScroll, setNowScroll] = useState(0);

  const [{ xys }, set] = useSpring(() => ({
    xys: !isMobile(window.navigator).any ? [0, 0, 100] : [0, 0, 0],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  useEffect(() => {
    const sections = document.querySelectorAll(".container");
    sectionRef.current = sections;
  }, []);

  useEffect(() => {
    // if query params change...
    const { search } = location;

    if (search !== "") {
      const pageNum = new URLSearchParams(search).get("pageNum");
      setNowPageNum(pageNum);
      document.documentElement.style.overflow = "hidden";
    }
  }, [location]);

  const cleanString = () => {
    // clean params when closing innerPage
    const params = new URLSearchParams();
    history.push({ search: params.toString() });
    setNowPageNum(null);
    document.documentElement.style.overflow = "hidden auto";
  };

  const detectPos = (x, y, target, biggerScale, normalScale) => {
    const mouseStatus = target.getAttribute("data-mouse");
    setNowScroll(window.scrollY);

    if (mouseStatus === "bigger") {
      set({ xys: [x, y, biggerScale] });
    } else {
      set({ xys: [x, y, normalScale] });
    }
  };

  return (
    <div
      className="home"
      onMouseMove={({ pageX: x, pageY: y, target }) => {
        if (!isMobile(window.navigator).any) detectPos(x, y, target, 200, 100);
      }}
      onTouchStart={({ touches, target }) => {
        const { pageX: x, pageY: y } = touches[0];
        detectPos(x, y, target, 200, 100);
      }}
      onTouchMove={({ touches, target }) => {
        const { pageX: x, pageY: y } = touches[0];
        detectPos(x, y, target, 200, 100);
      }}
      onTouchEnd={({ changedTouches, target }) => {
        const { pageX: x, pageY: y } = changedTouches[0];
        detectPos(x, y, target, 0, 0);
      }}
    >
      <ArticlePopup
        shareUrl="https://google.com.tw"
        onClick={() => cleanString()}
        open={nowPageNum !== null}
      />

      <Loading />

      {/* 封面圖 */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<Cover />}
        maskChildren={<Cover mask />}
        className="cover-container"
        num="0"
      />

      {/* 展演活動 */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<EventsWrapper />}
        maskChildren={<EventsWrapper mask />}
        className="events-container"
        num="1"
      />

      {/* 兒盟介紹 */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<Intro />}
        maskChildren={<Intro mask />}
        className="intro-container"
        num="2"
      />

      {/* LOGO介紹 */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<LogoIntro />}
        maskChildren={<LogoIntro mask />}
        className="logo-intro-container"
        num="3"
      />

      {/* 服務說明 */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<Service />}
        maskChildren={<Service mask />}
        className="service-container"
        num="4"
      />

      {/* 介紹ＩＰ */}
      <Section
        sectionRef={sectionRef}
        xys={xys}
        nowScroll={nowScroll}
        originChildren={<IpIntro />}
        maskChildren={<IpIntro mask />}
        className="ip-intro-container"
        num="5"
      />
    </div>
  );
};

export default Home;
