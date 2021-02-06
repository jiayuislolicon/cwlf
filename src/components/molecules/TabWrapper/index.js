import React from "react";
import TabButton from "components/atoms/TabButton";
import { listName } from "./listName";
import "./index.scss";

const TabWrapper = ({nowIndex}) => {
  return (
    <div className="tab-wrapper">
      {listName.map((e, index) => (
        <TabButton text={e} isNow={index === nowIndex} key={e} />
      ))}
    </div>
  );
};

export default TabWrapper;
