import React from "react";
import { storiesOf } from "@storybook/react";

import Cover from "../index";

const stories = storiesOf("organisms/Cover", module);

stories.add("__interactive", () => <Cover />);
