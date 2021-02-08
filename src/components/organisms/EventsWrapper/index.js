/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";

import "./index.scss";
import { useSelector } from "react-redux";

const EventsWrapper = ({ mask }) => {
  const { width } = useSelector((state) => state.global);
  return (
    <section className="section-events">
      <h2>展演活動</h2>
      <TabWrapper nowIndex={1} />
      {/* <div className="events-wrapper">
      </div> */}
      <CarouselProvider
        naturalSlideWidth={width * 0.35}
        naturalSlideHeight={width * 0.35 * 0.66 + 98}
        totalSlides={4}
        visibleSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <EventItem
              title="第十屆兒童節親子活動「兒童月Online」－台中"
              imgSrc="https://picsum.photos/625/520"
              mask={mask}
              characterNum={1}
              characterDisplay={false}
            />
          </Slide>
          <Slide index={1}>
            <EventItem
              title="第十屆兒童節親子活動「兒童月Online」－台中"
              imgSrc="https://picsum.photos/625/520"
              mask={mask}
              characterNum={1}
              characterDisplay={false}
            />
          </Slide>
          <Slide index={2}>
            <EventItem
              title="第十屆兒童節親子活動「兒童月Online」－台中"
              imgSrc="https://picsum.photos/625/520"
              mask={mask}
              characterNum={1}
              characterDisplay={false}
            />
          </Slide>
          <Slide index={3}>
            <EventItem
              title="第十屆兒童節親子活動「兒童月Online」－台中"
              imgSrc="https://picsum.photos/625/520"
              mask={mask}
              characterNum={1}
              characterDisplay={false}
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      {!mask && <WhiteCircle />}
      <SlideControl nowNum={1} totalNum={10} />
    </section>
  );
};

export default EventsWrapper;
