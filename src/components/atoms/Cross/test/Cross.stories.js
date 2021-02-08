import React from "react";
import { storiesOf } from "@storybook/react";

import Cross from "../index";

const stories = storiesOf("atoms/Cross", module);

stories.add("__interactive", () => <Cross />);
