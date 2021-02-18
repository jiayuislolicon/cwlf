/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";
// import isMobile from "ismobilejs";

import Loading from "components/organisms/Loading";
import Cover from "components/organisms/Cover";
import EventsWrapper from "components/organisms/EventsWrapper";
import Intro from "components/organisms/Intro";
import IpIntro from "components/organisms/IpIntro";
import LogoIntro from "components/organisms/LogoIntro";
import Service from "components/organisms/Service";
import ArticlePopup from "components/organisms/ArticlePopup";

import "./index.scss";

const trans = (x, y, s) => `circle(${s}px at ${x}px ${y}px)`;

const Home = () => {
  const location = useLocation();
  const history = useHistory();

  const [nowPageNum, setNowPageNum] = useState(null);

  const [coverProps, setCoverProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const [eventsProps, setEventsProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const [introProps, setIntroProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const [logoProps, setLogoProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const [serviceProps, setServiceProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const [ipProps, setIpProps] = useSpring(() => ({
    xys: [0, 0, 100],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

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

  return (
    <div
      className="home"
      onMouseMove={({ pageX: x, pageY: y, target }) => {
        const sections = document.querySelectorAll(".container");
        const mouseStatus = target.getAttribute("data-mouse");

        const nowScroll = window.scrollY;
        const pY0 = sections[0].getBoundingClientRect().top + nowScroll;
        const pY1 = sections[1].getBoundingClientRect().top + nowScroll;
        const pY2 = sections[2].getBoundingClientRect().top + nowScroll;
        const pY3 = sections[3].getBoundingClientRect().top + nowScroll;
        const pY4 = sections[4].getBoundingClientRect().top + nowScroll;
        const pY5 = sections[5].getBoundingClientRect().top + nowScroll;

        if (mouseStatus === "bigger") {
          setCoverProps({ xys: [x, y - pY0, 200] });
          setEventsProps({ xys: [x, y - pY1, 200] });
          setIntroProps({ xys: [x, y - pY2, 200] });
          setLogoProps({ xys: [x, y - pY3, 200] });
          setServiceProps({ xys: [x, y - pY4, 200] });
          setIpProps({ xys: [x, y - pY5, 200] });
        } else {
          setCoverProps({ xys: [x, y - pY0, 100] });
          setEventsProps({ xys: [x, y - pY1, 100] });
          setIntroProps({ xys: [x, y - pY2, 100] });
          setLogoProps({ xys: [x, y - pY3, 100] });
          setServiceProps({ xys: [x, y - pY4, 100] });
          setIpProps({ xys: [x, y - pY5, 100] });
        }
      }}
    >
      {nowPageNum !== null && (
        <ArticlePopup
          shareUrl="https://google.com.tw"
          onClick={() => cleanString()}
        />
      )}

      <Loading />

      {/* 封面圖 */}
      <section className="cover-container container">
        <div className="container-content">
          <Cover />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: coverProps.xys.interpolate(trans) }}
        >
          <Cover mask />
        </animated.div>
      </section>

      {/* 展演活動 */}
      <section className="events-container container">
        <div className="container-content">
          <EventsWrapper />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: eventsProps.xys.interpolate(trans) }}
        >
          <EventsWrapper mask />
        </animated.div>
      </section>

      {/* 兒盟介紹 */}
      <section className="intro-container container">
        <div className="container-content">
          <Intro />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: introProps.xys.interpolate(trans) }}
        >
          <Intro mask />
        </animated.div>
      </section>

      {/* LOGO介紹 */}
      <section className="logo-intro-container container">
        <div className="container-content">
          <LogoIntro />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: logoProps.xys.interpolate(trans) }}
        >
          <LogoIntro mask />
        </animated.div>
      </section>

      {/* 服務說明 */}
      <section className="service-container container">
        <div className="container-content">
          <Service />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: serviceProps.xys.interpolate(trans) }}
        >
          <Service mask />
        </animated.div>
      </section>

      {/* 介紹ＩＰ */}
      <section className="ip-intro-container container">
        <div className="container-content">
          <IpIntro />
        </div>
        <animated.div
          className="container-mask"
          style={{ clipPath: ipProps.xys.interpolate(trans) }}
        >
          <IpIntro mask />
        </animated.div>
      </section>
    </div>
  );
};

export default Home;
