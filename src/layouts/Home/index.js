/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useSpring, animated } from "react-spring";

import Cover from "components/organisms/Cover";
import EventsWrapper from "components/organisms/EventsWrapper";
import Intro from "components/organisms/Intro";
import IpIntro from "components/organisms/IpIntro";
import LogoIntro from "components/organisms/LogoIntro";
import Service from "components/organisms/Service";

import "./index.scss";

const trans = (x, y) => `circle(100px at ${x}px ${y}px)`;

const Home = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 150, friction: 40 },
  }));

  return (
    <div className="home">
      <div
        className="origin-content"
        onMouseMove={({ pageX: x, pageY: y }) => {
          set({ xy: [x, y] });
          // console.log(props, trans);
        }}
      >
        <Cover />
        <EventsWrapper />
        <Intro />
        <LogoIntro />
        <Service />
        <IpIntro />
      </div>
      <animated.div
        className="mask-content"
        style={{ clipPath: props.xy.interpolate(trans) }}
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
