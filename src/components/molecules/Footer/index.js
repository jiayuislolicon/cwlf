/* eslint-disable no-unused-vars */
import React from "react";
// import ShareInfo from "components/atoms/ShareInfo";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";
import { ReactComponent as TopBtn } from "static/svg/btn-gotop.svg";
import { useSelector } from "react-redux";

import "./index.scss";

const RegulationsBtns = () => (
  <div className="regulations-btns">
    <a href="#test">
      <span className="location">版權宣告</span>
    </a>
    <a href="#test">
      <span className="location">隱私權保障</span>
    </a>
  </div>
);

const Footer = () => {
  const { width } = useSelector((state) => state.global);

  const [y, setY] = useSpring(() => ({
    immediate: false,
    config: { duration: 500, easing: easings.easeCubic },
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  const scrollTop = () => {
    setY({
      y: 0,
      reset: true,
      from: { y: window.pageYOffset },
    });
  };

  return (
    <div className="footer">
      <TopBtn className="btn-top" onClick={scrollTop} />
      <div className="info">
        <div className="contact-info">
          <span>聯絡兒福聯盟</span>
          {width >= 768 && (
            <p>
              TEL: (02)2799-0333
              <br />
              ADDRESS: 114 台北市內湖區瑞光路583巷21號7樓
            </p>
          )}
          {width < 768 && (
            <p>
              TEL: (02)2799-0333
              <br />
              ADDRESS: 114 台北市內湖區瑞光路583巷21號7樓
            </p>
          )}
        </div>
        {/* <ShareInfo /> */}
        {width < 768 && <RegulationsBtns />}
      </div>
      <div className="copyright">
        <span className="location copyright-text">
          財團法人中華民國兒童福利聯盟文教基金會 版權所有 | Copyright © 2020
          Child Welfare League Foundation.R.O.C. All Reserved.
        </span>
        {width >= 768 && <RegulationsBtns />}
      </div>
    </div>
  );
};

export default Footer;
