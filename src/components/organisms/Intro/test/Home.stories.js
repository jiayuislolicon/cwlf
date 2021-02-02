import React from "react";
import { storiesOf } from "@storybook/react";

import Intro from "../index";

const stories = storiesOf("organisms/Intro", module);

stories.add("__interactive", () => <Intro />);
