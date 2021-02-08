import React, { useEffect, useState } from "react";
// import { link } from "react-router-dom";
import "./index.scss";
import Cover from "components/organisms/Cover";
import EventsWrapper from "components/organisms/EventsWrapper";
import Intro from "components/organisms/Intro";
import IpIntro from "components/organisms/IpIntro";
import LogoIntro from "components/organisms/LogoIntro";
import Service from "components/organisms/Service";
// import { useSpring, animated } from "react-spring";

// const trans = (x, y) => `circle(100px at ${x}px ${y}px)`;

const Home = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  // const [props, set] = useSpring(() => ({
  //   xy: [0, 0],
  //   config: { mass: 5, tension: 350, friction: 40 },
  // }));

  const calcMousePos = (e) => {
    // set({ xy: [e.pageX, e.pageY] });
    setPosX(e.pageX);
    setPosY(e.pageY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", calcMousePos);
    return () => {
      window.removeEventListener("mousemove", calcMousePos);
    };
  }, []);
  return (
    <div className="home">
      <div className="origin-content">
        <Cover />
        <EventsWrapper />
        <Intro />
        <LogoIntro />
        <Service />
        <IpIntro />
      </div>
      <div
        className="mask-content"
        // style={{ clipPath: props.xy.interpolate(trans) }}
        style={{ clipPath: `circle(100px at ${posX}px ${posY}px)` }}
      >
        <Cover mask />
        <EventsWrapper mask />
        <Intro mask />
        <LogoIntro mask />
        <Service mask />
        <IpIntro mask />
      </div>
    </div>
  );
};

export default Home;
