import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import aboutLogo from "static/png/about-logo.png";

import "./index.scss";

const LogoIntro = ({ mask, offset }) => {
  const logoRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const { top } = logoRef.current.getBoundingClientRect();
    const sectionTop = top + offset;

    if (offset >= sectionTop - 300) setAnimate(true);
  }, [offset]);
  return (
    <section
      className={classNames(
        "section-logo-intro",
        mask ? "mask" : "",
        animate ? "animate" : ""
      )}
      ref={logoRef}
    >
      <img
        src={aboutLogo}
        alt="兒福新LOGO"
        className="logo-img"
        width="517"
        height="347"
      />
      <div className="text-wrapper">
        <div className="overflow-wrapper">
          <p>
            兒福聯盟30歲了！
            <br />
            三十而立之年，兒盟秉持初衷，展望未來
            <br />
            以嶄新姿態與大家見面！
          </p>
        </div>
        <div className="overflow-wrapper">
          <p>
            全新的兒福聯盟Logo
            <br />
            融入了「啟發」、「創新」的新理念
            <br />
            「齊力」「共好」「兒童最佳利益」的服務精神
            <br />
            以及持續向上提升的目標
            <br />
            期許達成「與孩子共創更好的世界」的願景
            <br />
            兒盟三十，請多多指教！
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogoIntro;
