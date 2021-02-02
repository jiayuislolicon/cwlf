import React from "react";
import { storiesOf } from "@storybook/react";

import SlideControl from "../index";

const stories = storiesOf("molecules/SlideControl", module);

stories.add("__interactive", () => <SlideControl />);
