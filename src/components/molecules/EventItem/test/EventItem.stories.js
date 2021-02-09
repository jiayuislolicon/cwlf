import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, text } from "@storybook/addon-knobs";

import EventItem from "../index";

const stories = storiesOf("molecules/EventItem", module);

stories.add("__interactive", () => (
  <EventItem
    title="第十屆兒童節親子活動「兒童月Online」－台中"
    imgSrc="https://picsum.photos/625/520"
    mask={boolean("mask", false)}
    characterNum={text("characterNum", 1)}
    characterDisplay={boolean("characterDisplay", false)}
  />
));
