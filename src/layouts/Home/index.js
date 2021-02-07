import React from "react";
// import { link } from "react-router-dom";
import "./index.scss";
import Cover from "components/organisms/Cover"
import EventsWrapper from "components/organisms/EventsWrapper"
import Intro from "components/organisms/Intro"
import IpIntro from "components/organisms/IpIntro"
import LogoIntro from "components/organisms/LogoIntro"
import Service from "components/organisms/Service"

const Home = () => {
  return (
    <div className="content">
      <Cover />
      <EventsWrapper />
      <Intro />
      <LogoIntro />
      <Service />
      <IpIntro />
      {/* <div className="mask-content"></div> */}
    </div>
  );
};

export default Home;
