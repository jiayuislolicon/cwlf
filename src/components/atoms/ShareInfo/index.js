import React from "react";
import classNames from "classnames";
import { ReactComponent as IgIcon } from "static/svg/icon-social-ig.svg";
import { ReactComponent as FbIcon } from "static/svg/icon-social-fb.svg";
import { ReactComponent as TwIcon } from "static/svg/icon-social-tw.svg";
import "./index.scss";

const ShareInfo = ({ classname }) => {
  return (
    <div className={classNames("share-info", classname)}>
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
  );
};

export default ShareInfo;
