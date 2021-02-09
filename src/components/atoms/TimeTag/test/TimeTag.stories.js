import React from "react";
import { storiesOf } from "@storybook/react";

import TimeTag from "../index";

const stories = storiesOf("atoms/TimeTag", module);

stories.add("__interactive", () => (
  <TimeTag startMonth={2} startDay={2} endMonth={2} endDay={2} />
));
