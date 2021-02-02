import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "../index";

const stories = storiesOf("molecules/Header", module);

stories.add("__interactive", () => <Header />);
