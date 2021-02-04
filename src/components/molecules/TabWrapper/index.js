import React from "react";
import TabButton from "components/atoms/TabButton";
import { listName } from "./listName";
import "./index.scss";

const TabWrapper = () => {
  return (
    <div className="tab-wrapper">
      {listName.map((e) => (
        <TabButton text={e} isNow key={e} />
      ))}
    </div>
  );
};

export default TabWrapper;
