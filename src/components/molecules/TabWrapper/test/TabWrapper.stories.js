import React from "react";
import { storiesOf } from "@storybook/react";

import TabWrapper from "../index";

const stories = storiesOf("molecules/TabWrapper", module);

stories.add("__interactive", () => <TabWrapper />);
