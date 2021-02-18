/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import LoadingLayout from "components/molecules/LoadingLayout";
import "./index.scss";
import { assets } from "assets";

const Loading = () => {
  const [loadingNumber, setLoadingNumber] = useState(0);

  useEffect(() => {
    const imgArray = [];
    const eventArray = [];

    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imgArray.push(img);
        const percent = Math.floor((imgArray.length / assets.length) * 100);
        setLoadingNumber(percent);
      };
      eventArray.push(img);
    };

    assets.forEach((e) => {
      preloadImage(e);
    });

    return () => {
      eventArray.forEach((img) => {
        img.onload = () => {};
      });
    };
  }, []);

  return (
    <div className="section-loading">
      <LoadingLayout number={loadingNumber} />
    </div>
  );
};

export default Loading;
