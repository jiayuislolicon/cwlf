import React from "react";
import { storiesOf } from "@storybook/react";

import InnerPage from "../index";

const stories = storiesOf("layouts/InnerPage", module);

stories.add("__interactive", () => <InnerPage />);
