import React from "react";
import ShareInfo from "components/atoms/ShareInfo";
import {ReactComponent as TopBtn} from "static/svg/btn-gotop.svg";
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
  return (
    <div className="footer">
      <TopBtn className="btn-top" />
      <div className="info">
        <div className="contact-info">
          <span>聯絡兒福聯盟</span>
          {width >= 768 && (
            <p>
              TEL: (02)-2550-5959
              <br />
              FAX: (02)2550-0505
              <br />
              ADDRESS: 10351 台北市大同區長安西路43號6樓
            </p>
          )}
          {width < 768 && (
            <p>
              TEL: (02)-2550-5959 | FAX: (02)2550-0505
              <br />
              ADDRESS: 10351 台北市大同區長安西路43號6樓
            </p>
          )}
        </div>
        <ShareInfo />
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
