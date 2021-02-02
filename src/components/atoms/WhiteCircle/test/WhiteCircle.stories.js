import React from "react";
import { storiesOf } from "@storybook/react";

import WhiteCircle from "../index";

const stories = storiesOf("atoms/WhiteCircle", module);

stories.add("__interactive", () => <WhiteCircle />);
