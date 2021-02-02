import React from "react";
import { storiesOf } from "@storybook/react";

import EventsWrapper from "../index";

const stories = storiesOf("organisms/EventsWrapper", module);

stories.add("__interactive", () => <EventsWrapper />);
