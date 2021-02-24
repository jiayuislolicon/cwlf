import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Carousel from "@brainhubeu/react-carousel";
import classNames from "classnames";
import isMobile from "ismobilejs";

import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";
import { setEventSideNum } from "actions/global";

import { fakerData } from "./fakerData";
import "./index.scss";
import "@brainhubeu/react-carousel/lib/style.css";

// const random = [true, false];

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
    if (max !== 0) {
      if (eventSlideNum >= max - 2 && width >= 768) {
        dispatch(setEventSideNum(max - 2));
      } else if (eventSlideNum >= max - 1 && width < 768) {
        dispatch(setEventSideNum(max - 1));
      } else {
        dispatch(setEventSideNum(eventSlideNum + 1));
      }
    }
  };

  const linkToPopup = (num) => {
    const params = new URLSearchParams();
    params.append("pageNum", num);
    history.push({ search: params.toString() });
  };

  useEffect(() => {
    setMax(fakerData.length);
    // if (width >= 1024) {
    //   console.log("1024");
    //   dispatch(setEventSideNum(3));
    // }
  }, []);

  useEffect(() => {
    setCarouselItemWidth();
  }, [width]);

  useEffect(() => {
    const { top } = eventsRef.current.getBoundingClientRect();
    const sectionTop = top + offset;

    if (offset >= sectionTop - 400) setAnimate(true);
  }, [offset]);

  useEffect(() => {
    if (max !== 0) {
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
    }
  }, [eventSlideNum, width, max]);

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
          draggable={width < 1280}
        >
          {fakerData.map((e, index) =>
            isMobile(window.navigator).any ? (
              <EventItem
                title={e.title}
                imgSrc={e.imgSrc}
                mask
                characterNum={index % 4}
                characterDisplay={index % 6 !== 0 && eventSlideNum === index}
                onClick={() => {
                  linkToPopup(1);
                }}
                key={e.id}
              />
            ) : (
              <EventItem
                title={e.title}
                imgSrc={e.imgSrc}
                mask={mask}
                characterNum={index % 4}
                characterDisplay={mask}
                onClick={() => {
                  linkToPopup(1);
                }}
                key={e.id}
              />
            )
          )}
        </Carousel>
        <SlideControl
          nowNum={slideControlValue}
          totalNum={max}
          leftClick={minusSlide}
          rightClick={addSlide}
        />
      </div>
      {!mask && (
        <div className="overflow-wrapper circle-wrapper">
          <WhiteCircle />
        </div>
      )}
    </section>
  );
};

export default EventsWrapper;
