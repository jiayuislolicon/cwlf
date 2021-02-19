import React from "react";
import "./index.scss";

const Cross = ({ onClick }) => {
  return (
    <div
      className="close-btn"
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex="0"
      aria-label="關閉"
    >
      <span className="ab-center" />
      <span className="ab-center" />
    </div>
  );
};

export default Cross;
