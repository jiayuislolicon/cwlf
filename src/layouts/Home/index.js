import React from "react";
// import { link } from "react-router-dom";
import "./index.scss";
import Cover from "components/organisms/Cover";
import EventsWrapper from "components/organisms/EventsWrapper";
import Intro from "components/organisms/Intro";
import IpIntro from "components/organisms/IpIntro";
import LogoIntro from "components/organisms/LogoIntro";
import Service from "components/organisms/Service";

const Home = () => {
  return (
    <div className="content">
      <Cover mask />
      <EventsWrapper mask />
      <Intro mask />
      <LogoIntro mask />
      <Service mask />
      <IpIntro mask />
      {/* <div className="mask-content"></div> */}
    </div>
  );
};

export default Home;
