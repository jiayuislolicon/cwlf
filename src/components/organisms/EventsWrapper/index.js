/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";
import { setEventSideNum } from "actions/global";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useHistory } from "react-router-dom";

import "./index.scss";

const EventsWrapper = ({ mask, offset }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventsRef = useRef(null);

  const { width, eventSlideNum } = useSelector((state) => state.global);
  const [slideControlValue, setSlideControlValue] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [max, setMax] = useState(0);
  const [animate, setAnimate] = useState(false);

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
  };

  const minusSlide = () => {
    if (eventSlideNum === 0) {
      dispatch(setEventSideNum(0));
    } else {
      dispatch(setEventSideNum(eventSlideNum - 1));
    }
  };

  const addSlide = () => {
    if (eventSlideNum >= max - 2 && width >= 768) {
      dispatch(setEventSideNum(max - 2));
    } else if (eventSlideNum >= max - 1 && width < 768) {
      dispatch(setEventSideNum(max - 1));
    } else {
      dispatch(setEventSideNum(eventSlideNum + 1));
    }
  };

  const linkToPopup = (num) => {
    const params = new URLSearchParams();
    params.append("pageNum", num);
    history.push({ search: params.toString() });
  };

  useEffect(() => {
    setMax(5);
  }, []);

  useEffect(() => {
    setCarouselItemWidth();
  }, [width]);

  useEffect(() => {
    const { top } = eventsRef.current.getBoundingClientRect();
    const sectionTop = top + offset;

    if (offset >= sectionTop - 300) setAnimate(true);
  }, [offset]);

  useEffect(() => {
    if (width < 768) {
      setSlideControlValue(eventSlideNum + 1);
    } else if (width >= 768) {
      if (eventSlideNum >= max - 2) {
        dispatch(setEventSideNum(max - 2));
        setSlideControlValue(max);
      } else {
        setSlideControlValue(eventSlideNum + 3);
      }
    }
  }, [eventSlideNum, width]);

  return (
    <section
      className={classNames(
        "section-events",
        mask ? "mask" : "",
        animate ? "animate" : ""
      )}
      ref={eventsRef}
    >
      <div className="overflow-wrapper">
        <h2>展演活動</h2>
      </div>
      <div className="overflow-wrapper">
        <TabWrapper nowIndex={1} />
      </div>
      <div className="slideshow-wrapper">
        <Carousel
          itemWidth={itemWidth}
          offset={width < 1024 ? 14 : 28}
          onChange={slideChange}
          value={eventSlideNum}
          draggable={width < 1024}
        >
          <EventItem
            title="第十屆兒童節親子活動「兒童月Online」－台中"
            imgSrc="https://picsum.photos/625/520"
            mask={mask}
            characterNum={1}
            characterDisplay={mask}
            onClick={() => {
              linkToPopup(1);
            }}
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
        <SlideControl
          nowNum={slideControlValue}
          totalNum={max}
          leftClick={minusSlide}
          rightClick={addSlide}
        />
      </div>
      {!mask && <WhiteCircle />}
    </section>
  );
};

export default EventsWrapper;
