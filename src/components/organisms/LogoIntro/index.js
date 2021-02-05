import React from "react";
import aboutLogo from "static/png/about-logo.png";
import bg from "static/svg/logointro-bg.svg";
import bgHover from "static/svg/logointro-bg-hover.svg";
import "./index.scss";

const LogoIntro = ({ mask }) => {
  return (
    <div
      className="logo-intro"
      style={{ backgroundImage: `url(${!mask ? bg : bgHover})` }}
    >
      <img src={aboutLogo} alt="" />
      <p>
        兒福聯盟30歲了！ 三十而立之年，兒盟秉持初衷，展望未來
        <br />
        以嶄新姿態與大家見面！
        <br />
        <br />
        全新的兒福聯盟Logo
        <br />
        融入了「啟發」、「創新」的新理念
        <br />
        「齊力」「共好」「兒童最佳利益」的服務精神
        <br />
        以及持續向上提升的目標
        <br />
        期許達成「和孩子共創更好的世界」的願景
        <br />
        兒盟三十，請多多指教！
      </p>
    </div>
  );
};

export default LogoIntro;
