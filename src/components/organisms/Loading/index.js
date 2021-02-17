import React, { useEffect, useState } from "react";
import LoadingLayout from "components/molecules/LoadingLayout";
import "./index.scss";
import { assets } from "assets";

const Loading = () => {
  const [loadingNumber, setLoadingNumber] = useState(0);
  const cacheImages = async (srcArr) => {
    const promises = await srcArr.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        img.src = src;
        img.onload = resolve("s");
        img.onerror = reject();
      });
    });

    await Promise.all(promises).then(() => {
      setLoadingNumber(3);
    });
  };

  useEffect(() => {
    cacheImages(assets);
  }, []);

  return (
    <div className="section-loading">
      <LoadingLayout
        number={Math.floor((loadingNumber / assets.length) * 100)}
      />
    </div>
  );
};

export default Loading;
