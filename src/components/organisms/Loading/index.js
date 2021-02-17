/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from "react";
import LoadingLayout from "components/molecules/LoadingLayout";
import "./index.scss";
import { assets } from "assets";

class InitImagePreload {
  constructor(props) {
    this.manifest = props.manifest;
    this.temImg = [];
    this.imgArray = [];
    this.func = props.func;
    this.load();
  }

  load() {
    if (this.manifest.length > 0) {
      this.manifest.forEach((item) => {
        const img = new Image();
        img.src = item;
        img.onload = () => {
          this.imgArray.push(img);
          const percent = Math.floor(
            (this.imgArray.length / this.manifest.length) * 100
          );
          this.func(percent);
        };

        this.temImg.push(img);
      });
    } else {
      this.func(100);
    }
  }

  destroy() {
    this.temImg.forEach((item) => {
      item.onload = () => {};
    });
  }
}

const Loading = () => {
  const [loadingNumber, setLoadingNumber] = useState(0);

  useEffect(() => {
    const loading = new InitImagePreload({
      manifest: assets,
      func: setLoadingNumber,
    });
    loading.load();

    return () => loading.destroy();
  }, []);

  return (
    <div className="section-loading">
      <LoadingLayout number={loadingNumber / 2} />
    </div>
  );
};

export default Loading;
