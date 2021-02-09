/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";
import { setEventSideNum } from "actions/global";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "./index.scss";

const EventsWrapper = ({ mask }) => {
  const dispatch = useDispatch();
  const { width, eventSlideNum } = useSelector((state) => state.global);
  // const [slideNum, setSlideNum] = useState(0);
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
  };

  const slideChange = (value) => {
    dispatch(setEventSideNum(value));
    // setSlideNum(value);
  };

  const minusSlide = () => {
    if (eventSlideNum === 0) {
      // setSlideNum(0);
      dispatch(setEventSideNum(0));
    } else {
      // setSlideNum(eventSlideNum - 1);
      dispatch(setEventSideNum(eventSlideNum - 1));
    }
  };

  const addSlide = () => {
    if (eventSlideNum === max - 2 && width >= 768) {
      dispatch(setEventSideNum(max - 2));
    } else if (eventSlideNum === max && width >= 768) {
      dispatch(setEventSideNum(max));
    } else {
      dispatch(setEventSideNum(eventSlideNum + 1));
    }
  };

  useEffect(() => {
    setMax(5);
  }, []);

  useEffect(() => {
    setCarouselItemWidth();
  }, [width]);

  useEffect(() => {
    if (width < 768) {
      // dispatch(setEventSideNum(slideNum + 1));
      setSlideControlValue(eventSlideNum + 1);
    } else if (width >= 768) {
      if (eventSlideNum >= max - 2) {
        // setSlideNum(max - 2);
        dispatch(setEventSideNum(max - 2));
        setSlideControlValue(max);
      } else {
        // dispatch(setEventSideNum(slideNum + 3));
        setSlideControlValue(eventSlideNum + 3);
      }
    }
  }, [eventSlideNum, width]);

  return (
    <section className={classNames("section-events", mask ? "mask" : "")}>
      <h2>展演活動</h2>
      <TabWrapper nowIndex={1} />
      <Carousel
        itemWidth={itemWidth}
        offset={width < 1024 ? 14 : 28}
        onChange={slideChange}
        value={eventSlideNum}
      >
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={mask}
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={mask}
        />
        <EventItem
          title="第十屆兒童節親子活動「兒童月Online」－台中"
          imgSrc="https://picsum.photos/625/520"
          mask={mask}
          characterNum={1}
          characterDisplay={mask}
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
      <SlideControl
        nowNum={slideControlValue}
        totalNum={max}
        leftClick={minusSlide}
        rightClick={addSlide}
      />
    </section>
  );
};

export default EventsWrapper;
