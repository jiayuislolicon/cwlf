import React from "react";
import TabWrapper from "components/molecules/TabWrapper";
import EventItem from "components/molecules/EventItem";
import WhiteCircle from "components/atoms/WhiteCircle";
import SlideControl from "components/molecules/SlideControl";
import "./index.scss";

const EventsWrapper = ({ mask }) => {
  return (
    <section className="section-events">
      <h2>展演活動</h2>
      <TabWrapper nowIndex={1} />
      <div className="events-wrapper">
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
      </div>
      {!mask && <WhiteCircle />}
      <SlideControl />
    </section>
  );
};

export default EventsWrapper;
