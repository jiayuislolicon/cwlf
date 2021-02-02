import React from "react";
import { storiesOf } from "@storybook/react";

import EventItem from "../index";

const stories = storiesOf("molecules/EventItem", module);

stories.add("__interactive", () => <EventItem />);
