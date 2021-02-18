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
  const [props, set] = useSpring(() => ({
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
      // onMouseMove={({ pageX: x, pageY: y, target }) => {
      //   const mouseStatus = target.getAttribute("data-mouse");
      //   // console.log(target);
      //   if (mouseStatus === "bigger") {
      //     set({ xys: [x, y, 200] });
      //   } else {
      //     set({ xys: [x, y, 100] });
      //   }
      // }}
    >
      {nowPageNum !== null && (
        <ArticlePopup
          shareUrl="https://google.com.tw"
          onClick={() => cleanString()}
        />
      )}
      <Loading />
      <section className="cover-container container">
        <div className="container-content">
          <Cover />
        </div>
        <div className="container-mask">
          <Cover mask />
        </div>
      </section>
      <section className="events-container container">
        <div className="container-content">
          <EventsWrapper />
        </div>
        <div className="container-mask">
          <EventsWrapper mask />
        </div>
      </section>
      <section className="intro-container container">
        <div className="container-content">
          <Intro />
        </div>
        <div className="container-mask">
          <Intro mask />
        </div>
      </section>
      <section className="logo-intro-container container">
        <div className="container-content">
          <LogoIntro />
        </div>
        <div className="container-mask">
          <LogoIntro mask />
        </div>
      </section>
      <section className="service-container container">
        <div className="container-content">
          <Service />
        </div>
        <div className="container-mask">
          <Service mask />
        </div>
      </section>
      <section className="ip-intro-container container">
        <div className="container-content">
          <IpIntro />
        </div>
        <div className="container-mask">
          <IpIntro mask />
        </div>
      </section>
      {/* <div className="origin-content">
        <Cover />
        <EventsWrapper />
        <Intro />
        <LogoIntro />
        <Service />
        <IpIntro />
      </div>
      <animated.div
        className="mask-content"
        // style={{ clipPath: props.xys.interpolate(trans) }}
      >
        <Cover mask />
        <EventsWrapper mask />
        <Intro mask />
        <LogoIntro mask />
        <Service mask />
        <IpIntro mask />
      </animated.div> */}
    </div>
  );
};

export default Home;
