/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";

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
    }
  }, [location]);

  const cleanString = () => {
    // clean params when closing innerPage
    const params = new URLSearchParams();
    history.push({ search: params.toString() });
    setNowPageNum(null);
  };

  return (
    <div
      className="home"
      onMouseMove={({ pageX: x, pageY: y, target }) => {
        const mouseStatus = target.getAttribute("data-mouse");
        // console.log(target);
        if (mouseStatus === "bigger") {
          set({ xys: [x, y, 200] });
        } else {
          set({ xys: [x, y, 100] });
        }
      }}
    >
      {nowPageNum !== null && <ArticlePopup onClick={() => cleanString()} />}
      <div className="origin-content">
        <Cover />
        <EventsWrapper shareUrl="https://google.com.tw" />
        <Intro />
        <LogoIntro />
        <Service />
        <IpIntro />
      </div>
      <animated.div
        className="mask-content"
        style={{ clipPath: props.xys.interpolate(trans) }}
      >
        <Cover mask />
        <EventsWrapper mask />
        <Intro mask />
        <LogoIntro mask />
        <Service mask />
        <IpIntro mask />
      </animated.div>
    </div>
  );
};

export default Home;
