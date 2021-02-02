import React from "react";
import { storiesOf } from "@storybook/react";

import Home from "../index";

const stories = storiesOf("layouts/Home", module);

stories.add("__interactive", () => <Home />);
