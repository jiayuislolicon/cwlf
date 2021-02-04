import React from "react";
import { storiesOf } from "@storybook/react";

import CircleBtn from "../index";

const stories = storiesOf("atoms/CircleBtn", module);

stories.add("__interactive", () => <CircleBtn />);
