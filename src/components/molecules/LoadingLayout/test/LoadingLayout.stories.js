import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, number } from "@storybook/addon-knobs";

import LoadingLayout from "../index";

const stories = storiesOf("molecules/LoadingLayout", module);

stories.add("__interactive", () => (
  <LoadingLayout
    mask={boolean("mask", false)}
    number={number("number", 0, {
      range: true,
      min: 0,
      max: 100,
    })}
  />
));
