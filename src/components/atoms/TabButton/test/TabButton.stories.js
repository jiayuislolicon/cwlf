import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import TabButton from "../index";

const stories = storiesOf("atoms/TabButton", module);

stories.add("__interactive", () => (
  <TabButton text="哈哈屁眼" isNow={boolean("isNow", false)} />
));
