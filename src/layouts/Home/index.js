import React from "react";
// import { link } from "react-router-dom";
import "./index.scss";
import IntroBg from "components/atoms/IntroBg";
import Logo from "components/atoms/Logo";

const Home = () => {
  return (
    <div className="home">
      <IntroBg item="heart" />
      <Logo />
    </div>
  );
};

export default Home;
