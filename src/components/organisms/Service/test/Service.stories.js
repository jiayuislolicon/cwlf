import React from "react";
import { storiesOf } from "@storybook/react";

import Service from "../index";

const stories = storiesOf("organisms/Service", module);

stories.add("__interactive", () => <Service />);
