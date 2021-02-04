import React from "react";
import { storiesOf } from "@storybook/react";

import TimeTag from "../index";

const stories = storiesOf("atoms/TimeTag", module);

stories.add("__interactive", () => <TimeTag month="2" day="28" year="2020" />);
