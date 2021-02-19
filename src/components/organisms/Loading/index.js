/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import LoadingLayout from "components/molecules/LoadingLayout";
import { setLoadingStatus } from "actions/global";
import { assets } from "assets";

import "./index.scss";

const Loading = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (loadingNumber === 100) dispatch(setLoadingStatus(true));
  }, [loadingNumber]);

  return (
    <div className="section-loading">
      <LoadingLayout number={loadingNumber} />
    </div>
  );
};

export default Loading;
