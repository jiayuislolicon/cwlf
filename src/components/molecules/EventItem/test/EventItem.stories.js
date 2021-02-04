import React from "react";
import { storiesOf } from "@storybook/react";

import EventItem from "../index";

const stories = storiesOf("molecules/EventItem", module);

stories.add("__interactive", () => (
  <EventItem
    title="第十屆兒童節親子活動「兒童月Online」－台中"
    imgSrc="https://picsum.photos/625/520"
  />
));
