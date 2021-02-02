import React from "react";
import { storiesOf } from "@storybook/react";

import TabButton from "../index";

const stories = storiesOf("atoms/TabButton", module);

stories.add("__interactive", () => <TabButton />);
