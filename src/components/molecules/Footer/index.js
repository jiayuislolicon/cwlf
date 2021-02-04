import React from "react";
import { ReactComponent as IgIcon } from "static/svg/icon-social-ig.svg";
import { ReactComponent as FbIcon } from "static/svg/icon-social-fb.svg";
import { ReactComponent as TwIcon } from "static/svg/icon-social-tw.svg";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="contact-info">
          <h5>聯絡兒福聯盟</h5>
          <p>
            TEL: (02)-2550-5959
            <br />
            FAX: (02)2550-0505
            <br />
            ADDRESS: 10351 台北市大同區長安西路43號6樓
          </p>
        </div>
        <div className="socal-info">
          <a href="#top">
            <IgIcon className="icon" />
          </a>
          <a href="#top">
            <FbIcon className="icon" />
          </a>
          <a href="#top">
            <TwIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <span className="location">
          財團法人中華民國兒童福利聯盟文教基金會 版權所有 | Copyright © 2020
          Child Welfare League Foundation.R.O.C. All Reserved.
        </span>
        <div className="btns">
          <a href="#test">
            <span className="location">版權宣告</span>
          </a>
          <a href="#test">
            <span className="location">隱私權保障</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
