import React from "react";
import { storiesOf } from "@storybook/react";

import ShapeButton from "../index";

const stories = storiesOf("atoms/ShapeButton", module);

stories.add("__interactive", () => <ShapeButton />);
