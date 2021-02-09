/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";

import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "./index.scss";
import { useSelector } from "react-redux";

const EventsWrapper = ({ mask }) => {
  const { width } = useSelector((state) => state.global);
  const [slideNum, setSlideNum] = useState(0);
  const [slideControlValue, setSlideControlValue] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [max, setMax] = useState(0);

  const setCarouselItemWidth = () => {
    if (width >= 1440) {
      setItemWidth(517);
    } else if (width >= 768) {
      setItemWidth(width * 0.35);
    } else {
      setItemWidth(width - 75);
    }
  }

  const slideChange = (value) => {
    setSlideNum(value);
  }

  const minusSlide = () => {
    if (slideNum === 0) {
      setSlideNum(0);
    } else {
      setSlideNum(slideNum - 1);
    }
  }

  const addSlide = () => {
    if (slideNum === (max - 2) && width >= 768) {
      setSlideNum(max - 2);
    } else if (slideNum === max && width >= 768) {
      setSlideNum(max);
    } else {
      setSlideNum(slideNum + 1);
    }
  }

  useEffect(() => {
    setMax(5);
  }, [])

  useEffect(() => {
    setCarouselItemWidth();
  }, [width])
  
  useEffect(() => {
    if (width < 768) {
      setSlideControlValue(slideNum + 1);
    } else if (width >= 768) {
      if (slideNum >= (max - 2)) {
        setSlideNum(max - 2)
        setSlideControlValue(max);
      } else {
        setSlideControlValue(slideNum + 3);
      }
    }
  }, [slideNum, width])

  return (
    <section className={classNames("section-events", mask ? "mask" : "")}>
      <h2>展演活動</h2>
      <TabWrapper nowIndex={1} />
      <Carousel
        itemWidth={itemWidth}
        offset={width < 1024 ? 14 : 28}
        onChange={slideChange}
        value={slideNum}
      >
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={false}
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={false}
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={false}
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={2}
          characterDisplay
        />
      </Carousel>
      {!mask && <WhiteCircle />}
      <SlideControl nowNum={slideControlValue} totalNum={max} leftClick={minusSlide} rightClick={addSlide} />
    </section>
  );
};

export default EventsWrapper;
